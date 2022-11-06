import { Story } from "@ladle/react";
import React from "react";
import { Card } from "../Card/Card";
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
            {buttonSizes.map((value) => (
                <Card header={<p className="font-bold">{value}</p>} key={value}>
                    <Button onClick={onClick} size={value}>
                        Hello
                    </Button>
                </Card>
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
            {buttonTypes.map((value) => (
                <Card header={<p className="font-bold">{value}</p>} key={value}>
                    <Button onClick={onClick} type={value}>
                        Hello
                    </Button>
                </Card>
            ))}
        </ul>
    );
};
Sizes.argTypes = {
    onClick: {
        action: "clicked"
    }
};
