import { ReactNode } from "react";
import { FormContextProvider, IFormContextData } from "../../context/FormContext/FormContext";
import { IFormBlockProps, FormBlock } from "./IFormBlock";

interface IFormElementProps {
    children: ReactNode;
}

export type IFormProps<T = Record<string, unknown>> = IFormElementProps &
    IFormContextData<T> &
    IFormBlockProps;

function Form<T = Record<string, unknown>>({
    className = "",
    children,
    data,
    validation = {},
    beforeCancel,
    beforeReset,
    beforeSubmit,
    onSubmit,
    onCancel,
    ...props
}: IFormProps<T>) {
    if (!onCancel) {
        props.hideCancel = true;
    }

    return (
        <FormContextProvider
            data={data}
            validation={validation}
            onSubmit={onSubmit}
            onCancel={onCancel}
            beforeCancel={beforeCancel}
            beforeReset={beforeReset}
            beforeSubmit={beforeSubmit}
        >
            <FormBlock {...props}>{children}</FormBlock>
        </FormContextProvider>
    );
}

export { Form };
