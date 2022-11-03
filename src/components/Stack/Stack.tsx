import { ClassNames } from "@codevachon/classnames";
import React from "react";
import { FC, ReactNode } from "react";

export const stackSizes = ["default", "none", "xs", "sm", "lg", "xl"] as const;
export type StackSize = typeof stackSizes[number];

export const stackAs = ["div", "ol", "ul", "section", "aside"] as const;
export type StackAs = typeof stackAs[number];

export interface IStackProps {
    className?: string | ClassNames;
    children: ReactNode;
    spacing?: StackSize;
    as?: StackAs;
}

const Stack: FC<IStackProps> = ({ as = "div", className = "", spacing = "default", children }) => {
    return React.createElement(
        as,
        {
            className: new ClassNames(["flex flex-col"])
                .switch(
                    spacing,
                    {
                        none: "space-y-0",
                        xs: "space-y-1",
                        sm: "space-y-2",
                        lg: "space-y-8",
                        xl: "space-y-12"
                    },
                    "space-y-4"
                )
                .add(className)
                .list()
        },
        children
    );
};

export { Stack };
