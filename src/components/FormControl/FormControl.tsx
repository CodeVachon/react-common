import ClassNames from "@codevachon/classnames";
import { FC, ReactNode, useCallback, useContext } from "react";
import { FormContext } from "src/context/FormContext/FormContext";
import { ListBox, IListBoxProps } from "./../ListBox";

type FormControlType = "text" | "password" | "email" | "search" | "tel" | "url" | "listbox";

interface IFormControlCommonProps {
    className?: string | ClassNames;
    children?: ReactNode;
    label?: string;
    name: string;
    type?: FormControlType;
}

export interface IFormControlProps extends IFormControlCommonProps {
    type?: "text" | "password" | "email" | "search" | "tel" | "url";
}

interface IFormControlListBoxProps
    extends IFormControlCommonProps,
        Omit<IListBoxProps, "onChange" | "value"> {
    type: "listbox";
}

const FormControl: FC<IFormControlProps | IFormControlListBoxProps> = ({
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
    const commonControlClasses = new ClassNames([
        "focus:outline-none focus-visible:ring-primary focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-opacity-75",
        "block w-full rounded-md sm:text-sm shadow-md",
        "text-slate-900 dark:text-slate-900",
        "border border-gray-200"
    ]);
    const commonWrapperClasses = new ClassNames(["flex flex-col space-y-1"]).add(className);

    const updateFormValue = useCallback(
        (value: unknown) => {
            updateValue(name, value);
        },
        [name, updateValue]
    );

    let Control: ReactNode;
    switch (type) {
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

        default:
            Control = (
                <input
                    type={type}
                    name={name}
                    className={new ClassNames(commonControlClasses).list()}
                    value={String(formData[name] || "")}
                    onChange={(event) => {
                        event.preventDefault();
                        event.stopPropagation();

                        updateFormValue(event.target.value);
                    }}
                />
            );
    }

    return (
        <div className={new ClassNames(commonWrapperClasses).list()}>
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