import { Story } from "@ladle/react";
import React from "react";
import { Button, buttonSizes, ButtonSize, buttonTypes, ButtonType } from "./Button";

export const KitchenSink: Story<{
    onClick: () => void;
    size: ButtonSize;
    type: ButtonType;
    disabled: boolean;
    label: string;
}> = ({ onClick, size, type, disabled, label = "Hello" }) => {
    return (
        <Button onClick={onClick} size={size} disabled={disabled} type={type}>
            {label}
        </Button>
    );
};
KitchenSink.args = {
    disabled: false,
    label: "Hello"
};
KitchenSink.argTypes = {
    onClick: {
        action: "clicked"
    },
    size: {
        options: buttonSizes,
        control: { type: "select" }
    },
    type: {
        options: buttonTypes,
        control: { type: "select" }
    }
};

export const Sizes: Story<{
    onClick: () => void;
}> = ({ onClick }) => {
    return (
        <ul className="flex flex-col space-y-6">
            {buttonSizes.map((btn) => (
                <div key={btn}>
                    <div>{btn}</div>
                    <div>
                        <Button onClick={onClick} size={btn}>
                            Hello
                        </Button>
                    </div>
                </div>
            ))}
        </ul>
    );
};
Sizes.argTypes = {
    onClick: {
        action: "clicked"
    }
};

export const Types: Story<{
    onClick: () => void;
}> = ({ onClick }) => {
    return (
        <ul className="flex flex-col space-y-6">
            {buttonTypes.map((btn) => (
                <div key={btn}>
                    <div>{btn}</div>
                    <div>
                        <Button onClick={onClick} type={btn}>
                            Hello
                        </Button>
                    </div>
                </div>
            ))}
        </ul>
    );
};
Sizes.argTypes = {
    onClick: {
        action: "clicked"
    }
};
