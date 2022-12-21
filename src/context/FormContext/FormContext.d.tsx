import { ReactNode } from "react";

export interface DataRecord {
    [key: string]: unknown;
}

export interface IFormContext<T = UnknownRecord> {
    isWorking: boolean;
    isDirty: boolean;
    isValid: boolean;
    formData: Readonly<Partial<T>>;
    validationErrors: Partial<Record<keyof T, string | undefined>>;
    runValidationForKey: (key: keyof T) => void;
    submitForm: () => void;
    cancelForm: () => void;
    resetForm: () => void;
    updateValue: (key: keyof T, value: unknown) => void;
    updateValues: (data: Partial<T>) => void;
    updateValidationConfig: (name: keyof T, value: IFormContextDataValidationOptions) => void;
    validationForKey: (key: keyof T) => Readonly<Partial<IFormContextDataValidationOptions>>;
}

/**
 * Manually Check if a value is Valid
 */
export type ValidationFunction = (
    value: unknown
) => void | boolean | string | Error | Promise<void | boolean | string>;
/**
 * Validation Options
 */
export interface IFormContextDataValidationOptions {
    /**
     * The Minimum Length or Value
     */
    min?: number;
    /**
     * The Maximum Length or Value
     */
    max?: number;
    /**
     * Is this a Required value
     */
    isRequired?: boolean;
    /**
     * Is this a Password Value
     */
    isPassword?: boolean;
    /**
     * Is this an Email Address
     */
    isEmailAddress?: boolean;
    /**
     * Trigger the Validation of this Field when it is Blurred
     */
    validateOnBlur?: boolean;
    /**
     * Manually Pass in Additional Validations run one at a time.
     */
    fn?: Array<ValidationFunction> | ValidationFunction;
}
export type IFormContextDataValidation<T> = Partial<
    Record<keyof T, IFormContextDataValidationOptions>
>;

export type UnknownRecord = Record<string, unknown>;

export interface IFormContextData<T> {
    data: T;
    validation?: IFormContextDataValidation<T>;
    beforeSubmit?: () => void;
    onSubmit: (
        formData: Readonly<Partial<T>>,
        callback: (
            newData?: Partial<T>,
            validationErrors?: Partial<Record<keyof T, string>>
        ) => void
    ) => void;
    beforeCancel?: () => void;
    beforeReset?: () => void;
    onCancel?: () => void;
}

export interface IFormContextProviderProps {
    children: ReactNode;
}
