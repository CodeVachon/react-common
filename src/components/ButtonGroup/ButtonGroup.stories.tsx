import { Story } from "@ladle/react";
import React from "react";
import { ButtonGroup, buttonSpacing, ButtonSpacing } from "./ButtonGroup";
import { Button, buttonSizes, ButtonSize, ButtonType, buttonTypes } from "./../Button";
import { Card } from "../Card/Card";

export const KitchenSink: Story<{
    onClick: () => void;
    size: ButtonSize;
    disabled: boolean;
    label: string;
    spacing: ButtonSpacing;
    type: ButtonType;
    lastType: ButtonType | "none";
    asColumn: boolean;
}> = ({ onClick, size, spacing, type, lastType, asColumn }) => {
    return (
        <ButtonGroup buttonSize={size} spacing={spacing} buttonType={type} asColumn={asColumn}>
            <Button onClick={onClick}>Button 1</Button>
            <Button onClick={onClick}>Button 2</Button>
            <Button onClick={onClick} type={lastType === "none" ? undefined : lastType}>
                Button 3
            </Button>
        </ButtonGroup>
    );
};
KitchenSink.args = {
    asColumn: false
};
KitchenSink.argTypes = {
    onClick: {
        action: "clicked"
    },
    spacing: {
        options: buttonSpacing,
        control: { type: "select" }
    },
    type: {
        options: buttonTypes,
        control: { type: "select" }
    },
    lastType: {
        options: ["none"].concat(buttonTypes),
        control: { type: "select" }
    },
    size: {
        options: buttonSizes,
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
                    <ButtonGroup buttonSize={value}>
                        <Button onClick={onClick}>Button 1</Button>
                        <Button onClick={onClick}>Button 2</Button>
                        <Button onClick={onClick}>Button 3</Button>
                    </ButtonGroup>
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

export const asColumn: Story<{
    onClick: () => void;
}> = ({ onClick }) => {
    return (
        <ul className="flex flex-col space-y-6">
            {buttonSpacing.map((value) => (
                <Card header={<p className="font-bold">{value}</p>} key={value}>
                    <ButtonGroup spacing={value} asColumn>
                        <Button onClick={onClick}>Button 1</Button>
                        <Button onClick={onClick}>Button 2</Button>
                        <Button onClick={onClick}>Button 3</Button>
                    </ButtonGroup>
                </Card>
            ))}
        </ul>
    );
};
asColumn.argTypes = {
    onClick: {
        action: "clicked"
    }
};

export const Spacing: Story<{
    onClick: () => void;
}> = ({ onClick }) => {
    return (
        <ul className="flex flex-col space-y-6">
            {buttonSpacing.map((value) => (
                <Card header={<p className="font-bold">{value}</p>} key={value}>
                    <ButtonGroup spacing={value}>
                        <Button onClick={onClick}>Button 1</Button>
                        <Button onClick={onClick}>Button 2</Button>
                        <Button onClick={onClick}>Button 3</Button>
                    </ButtonGroup>
                </Card>
            ))}
        </ul>
    );
};
Spacing.argTypes = {
    onClick: {
        action: "clicked"
    }
};

export const Type: Story<{
    onClick: () => void;
    forceMiddleTypeDifferent: boolean;
}> = ({ onClick, forceMiddleTypeDifferent }) => {
    return (
        <ul className="flex flex-col space-y-6">
            {buttonTypes.map((value) => (
                <Card header={<p className="font-bold">{value}</p>} key={value}>
                    <ButtonGroup buttonType={value}>
                        <Button onClick={onClick}>Button 1</Button>
                        <Button
                            onClick={onClick}
                            type={
                                forceMiddleTypeDifferent
                                    ? value === "secondary"
                                        ? "primary"
                                        : "secondary"
                                    : undefined
                            }
                        >
                            Button 2
                        </Button>
                        <Button onClick={onClick}>Button 3</Button>
                    </ButtonGroup>
                </Card>
            ))}
        </ul>
    );
};
Type.args = {
    forceMiddleTypeDifferent: false
};
Type.argTypes = {
    onClick: {
        action: "clicked"
    }
};
