import ClassNames from "@codevachon/classnames";
import type { FC, ReactNode } from "react";
import React from "react";

export const buttonSizes = ["default", "xs", "sm", "lg", "xl"] as const;
export type ButtonSize = typeof buttonSizes[number];

export const buttonTypes = ["default", "success", "danger"] as const;
export type ButtonType = typeof buttonTypes[number];

export const buttonAs = ["a", "button"] as const;
export type ButtonAs = typeof buttonAs[number];

export interface IButtonCommonProps {
    as?: ButtonAs;
    className?: string | ClassNames;
    children: ReactNode;
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
    onClick?: () => void;
}

export interface IButtonProps extends IButtonCommonProps {
    as?: "button";
    onClick: () => void;
}

export interface IButtonAProps extends IButtonCommonProps {
    as: "a";
    href: string;
    target?: "_blank" | string;
}

const Button: FC<IButtonProps | IButtonAProps> = ({
    as = "button",
    className = "",
    children,
    size = "default",
    type = "default",
    disabled = false,
    onClick,
    ...props
}) => {
    return React.createElement(
        as,
        {
            disabled,
            onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                if (onClick) {
                    if (event) {
                        event.preventDefault();
                        event.stopPropagation();
                    }

                    onClick();
                }
            },
            className: new ClassNames([
                "inline-flex items-center border border-transparent",
                "font-medium text-white shadow-sm",
                "focus:outline-none focus:ring-2 focus:ring-offset-1",
                "enabled:active:ring-2 enabled:active:ring-offset-2"
            ])
                .if(size === "xs", "rounded", "rounded-md")
                .switch(
                    size,
                    {
                        xs: "px-2.5 py-1.5 text-xs",
                        sm: "px-3 py-2 text-sm",
                        lg: "px-4 py-2 text-base",
                        xl: "px-6 py-3 text-base"
                    },
                    "px-4 py-2 text-sm"
                )
                .if(
                    disabled,
                    "bg-slate-100 text-slate-500 cursor-not-allowed",
                    new ClassNames().switch(
                        type,
                        {
                            success:
                                "bg-emerald-700 enabled:hover:bg-emerald-600 active:ring-emerald-600 focus:ring-emerald-600",
                            danger: "bg-red-700 enabled:hover:bg-red-600 active:ring-red-600 focus:ring-red-600"
                        },
                        "bg-sky-700 enabled:hover:bg-sky-600 active:ring-sky-600 focus:ring-sky-600"
                    )
                )
                .add(className)
                .list(),
            ...props
        },
        children
    );
};

export { Button };
