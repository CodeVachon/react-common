import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import type {
    IFormContext,
    IFormContextData,
    IFormContextDataValidation,
    IFormContextDataValidationOptions,
    IFormContextProviderProps,
    UnknownRecord
} from "./FormContext.d";
import { runValidation } from "./validation";

const FormContext = createContext<IFormContext<UnknownRecord>>({
    isWorking: false,
    isDirty: false,
    isValid: true,
    formData: {},
    runValidationForKey: () => {},
    validationErrors: {},
    submitForm: () => {},
    cancelForm: () => {},
    resetForm: () => {},
    updateValue: () => {},
    updateValues: () => {},
    updateValidationConfig: () => {},
    validationForKey: () => ({})
});

function FormContextProvider<T = UnknownRecord>({
    data,
    validation = {},
    beforeSubmit = () => {},
    onSubmit = () => {},
    beforeCancel = () => {},
    beforeReset = () => {},
    onCancel,
    children
}: IFormContextProviderProps & IFormContextData<T>) {
    const [isWorking, setIsWorking] = useState<boolean>(false);
    const [isDirty, setIsDirty] = useState<boolean>(false);
    const [currentFormData, setCurrentFormData] = useState<Readonly<Partial<T>>>({ ...data });
    const [resetFormData, setResetFormData] = useState<Readonly<Partial<T>>>({ ...data });
    const [validationErrors, setValidationErrors] = useState<Partial<Record<keyof T, string>>>({});
    const [validationConfig, setValidationConfig] =
        useState<IFormContextDataValidation<T>>(validation);

    const isValid = useMemo(() => Object.keys(validationErrors).length === 0, [validationErrors]);

    /**
     * If Data Prop Changes...
     */
    useEffect(() => {
        const dataSet = { ...data };

        setCurrentFormData(() => ({ ...dataSet }));
        setResetFormData(() => ({ ...dataSet }));
    }, [data]);

    useEffect(() => {
        setValidationConfig(validation);
    }, [validation]);

    /**
     * When Form Data Changes...
     */
    useEffect(() => {
        const isDirtyNow = JSON.stringify(currentFormData) !== JSON.stringify(resetFormData);

        if (isDirtyNow !== isDirty) {
            setIsDirty(() => isDirtyNow);

            // If we restored to initial form state, than reset Validation Errors
            if (!isDirtyNow && !isValid) {
                setValidationErrors({});
            }
        }
    }, [currentFormData, resetFormData, isDirty, isValid]);

    /**
     * Called when Submit Action is Completed
     * @param newDataSet An incoming replacement Dataset for Form Data
     * @param validationErrors Validation Errors
     */
    const handleSubmitCallback = useCallback(
        (newDataSet?: Partial<T>, validationErrors?: Partial<Record<keyof T, string>>) => {
            setIsWorking(false);

            if (validationErrors) {
                setValidationErrors(validationErrors);
            }

            if (newDataSet) {
                console.log({ newDataSet });
                setCurrentFormData({ ...newDataSet });
                setResetFormData({ ...newDataSet });
            }
        },
        []
    );

    const runValidationForKey = useCallback(
        (key: keyof T) => {
            const value = currentFormData[key];
            const foundValidationErrors = { ...validationErrors };
            try {
                runValidation(value, validation[key]);
            } catch (error) {
                if (error instanceof Error) {
                    foundValidationErrors[key] = error.message;
                }
            }
            setValidationErrors(() => foundValidationErrors);
        },
        [currentFormData, validation, validationErrors]
    );

    /**
     * Called when the Form is Submitted
     */
    const handleSubmit = useCallback(() => {
        if (isWorking) {
            return;
        }

        beforeSubmit();

        const workingData = { ...currentFormData };
        const foundValidationErrors: Partial<Record<keyof T, string>> = {};
        for (const [key, value] of Object.entries(workingData)) {
            try {
                runValidation(value, validation[key as keyof T]);
            } catch (error) {
                if (error instanceof Error) {
                    foundValidationErrors[key as keyof T] = error.message;
                }
            }
        }

        if (Object.keys(foundValidationErrors).length > 0) {
            setValidationErrors(() => foundValidationErrors);
            return;
        }

        setIsWorking(true);

        Object.freeze(workingData);

        onSubmit(workingData, handleSubmitCallback);
    }, [beforeSubmit, currentFormData, handleSubmitCallback, isWorking, onSubmit, validation]);

    /**
     * Called when the Form is Reset
     */
    const handelReset = useCallback(() => {
        beforeReset();

        setValidationErrors({});
        setCurrentFormData(resetFormData);
    }, [beforeReset, resetFormData]);

    /**
     * Called when the Form is Canceled
     */
    const handleCancel = useCallback(() => {
        beforeCancel();

        if (onCancel) {
            onCancel();
        } else {
            handelReset();
        }
    }, [beforeCancel, handelReset, onCancel]);

    /**
     *
     * @param name The name of the field being changed
     * @param values The new values
     */
    const updateValidationConfig = useCallback(
        (name: keyof T, values: Partial<IFormContextDataValidationOptions>) => {
            setValidationConfig((currentConfig) => {
                const config = { ...currentConfig };
                const currentValues = { ...config[name] } || {};

                config[name] = { ...currentValues, ...values };

                return config;
            });
        },
        []
    );

    /**
     * Values Exported to the Context
     */
    const providerValues: IFormContext<T> = {
        isWorking,
        isDirty,
        isValid,
        formData: { ...currentFormData },
        validationErrors,
        runValidationForKey,
        submitForm: () => handleSubmit(),
        cancelForm: () => handleCancel(),
        resetForm: () => handelReset(),
        updateValue: useCallback(
            (key: keyof T, value: unknown) =>
                setCurrentFormData((dataSet) => ({ ...dataSet, [key]: value })),
            []
        ),
        updateValues: useCallback(
            (dataSet: Partial<T>) =>
                setCurrentFormData((currentDataSet) => ({ ...currentDataSet, ...dataSet })),
            []
        ),
        updateValidationConfig,
        validationForKey: useCallback(
            (key: keyof T) => {
                let current: Partial<IFormContextDataValidationOptions> | undefined = {
                    ...validationConfig
                }[key];

                if (!current) {
                    current = {};
                }
                Object.freeze(current);

                return current;
            },
            [validationConfig]
        )
    };

    return (
        <FormContext.Provider value={providerValues as IFormContext<UnknownRecord>}>
            {children}
        </FormContext.Provider>
    );
}

export { FormContextProvider, FormContext, IFormContextData };
