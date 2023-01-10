import ClassNames from "@codevachon/classnames";
import { FC, ReactNode, useCallback, useContext, useMemo } from "react";
import { FormContext } from "src/context/FormContext/FormContext";
import { ListBox, IListBoxProps } from "./../ListBox";
import { DateFormControl, IDateFormControlProps } from "./../DateFormControl";
import { PasswordFormControl } from "./../PasswordFormControl";
import { TextFromControl, TextFromControlTypes, ITextFromControlProps } from "./../TextFormControl";

/**
 * WithoutFormControlCommonProps strips out common properties as from incoming
 * form controls because they are handled in this control
 */
type WithoutFormControlCommonProps<T> = Omit<T, "onChange" | "value" | "name">;

/**
 * the Valid Form Control Types
 */
export const FormControlTypes = [...TextFromControlTypes, "listbox", "date"] as const;
export type FormControlType = typeof FormControlTypes[number];

interface IFormControlCommonProps {
    className?: string | ClassNames;
    children?: ReactNode;
    label?: string;
    name: string;
    type?: FormControlType;
}

export interface IFormControlProps
    extends IFormControlCommonProps,
        WithoutFormControlCommonProps<ITextFromControlProps> {
    type?: "text" | "password" | "email" | "search" | "tel" | "url";
}

interface IFormControlListBoxProps
    extends IFormControlCommonProps,
        WithoutFormControlCommonProps<IListBoxProps> {
    type: "listbox";
}

interface IFormControlDateProps
    extends IFormControlCommonProps,
        WithoutFormControlCommonProps<IDateFormControlProps> {
    type: "date";
}

const FormControl: FC<IFormControlProps | IFormControlListBoxProps | IFormControlDateProps> = ({
    className = "",
    name = "",
    children,
    label,
    type = "text",
    ...props
}) => {
    const { formData, updateValue, isValid } = useContext(FormContext);

    if (typeof formData[name] === "undefined") {
        console.error(`FormControl: Configuration Error - "${name}" was not found on data`, {
            formData
        });
        return (
            <div className={new ClassNames(["border-2 border-red-700", "p-4"]).list()}>
                <p className={new ClassNames(["text-red-700"]).list()}>
                    FormControl: Configuration Error - "{name}" was not found.
                </p>
                <p>expected one of: {Object.keys(formData).join(", ")}</p>
            </div>
        );
    }

    /**
     * Setup Component Classes
     */
    const commonWrapperClasses = new ClassNames(["flex flex-col space-y-1"]).add(className);

    const updateFormValue = useCallback(
        (value: unknown) => {
            updateValue(name, value);
        },
        [name, updateValue]
    );

    let Control: ReactNode;
    switch (type) {
        case "date":
            Control = (
                <DateFormControl
                    {...props}
                    value={String(formData[name])}
                    onChange={(newValue) => {
                        updateFormValue(newValue);
                    }}
                />
            );
            break;

        case "listbox":
            Control = (
                <ListBox
                    options={(props as IListBoxProps).options}
                    value={String(formData[name])}
                    onChange={(newValue) => {
                        updateFormValue(newValue);
                    }}
                />
            );
            break;

        case "password":
            Control = (
                <PasswordFormControl
                    value={String(formData[name])}
                    onChange={(newValue) => {
                        updateFormValue(newValue);
                    }}
                    name={name}
                />
            );
            break;

        default:
            Control = (
                <TextFromControl
                    type={type}
                    value={String(formData[name])}
                    onChange={(newValue) => {
                        updateFormValue(newValue);
                    }}
                    name={name}
                />
            );
    }

    return (
        <div
            data-type={`formControl-${type}`}
            className={new ClassNames(commonWrapperClasses).list()}
        >
            {label && label.length > 0 ? (
                <label
                    className={new ClassNames([
                        "text-gray-700: block text-sm font-medium dark:text-gray-300"
                    ]).list()}
                >
                    {label}
                </label>
            ) : null}

            {Control}

            {children ? <div>{children}</div> : null}
        </div>
    );
};

export { FormControl };
