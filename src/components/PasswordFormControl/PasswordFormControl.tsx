import { FC, useState } from "react";
import { TextFromControl, ITextFromControlProps } from "./../TextFormControl";

export interface IPasswordFormControlProps
    extends Omit<ITextFromControlProps, "onIconClick" | "icon" | "type"> {
    onIconClick?: () => void;
}

const PasswordFormControl: FC<IPasswordFormControlProps> = (props) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <TextFromControl
            type={isVisible ? "text" : "password"}
            onIconClick={() => setIsVisible((curr) => !curr)}
            icon={isVisible ? "Eye" : "EyeClosed"}
            {...props}
        />
    );
};

export { PasswordFormControl };
