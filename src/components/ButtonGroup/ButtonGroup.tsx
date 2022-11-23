import type { FC, ReactNode } from "react";
import { ClassNames } from "@codevachon/classnames";

import { ButtonSize, ButtonType } from "./../Button";
import React from "react";

export const buttonSpacing = ["default", "xs", "sm", "lg", "xl"] as const;
export type ButtonSpacing = typeof buttonSpacing[number];

export const buttonGroupAs = ["div", "section", "ol", "ul"] as const;
export type ButtonGroupAs = typeof buttonGroupAs[number];

interface IButtonGroupProps {
    as?: ButtonGroupAs;
    className?: string | ClassNames;
    children: ReactNode;
    buttonSize?: ButtonSize;
    buttonType?: ButtonType;
    spacing?: ButtonSpacing;
    asColumn?: boolean;
}

const ButtonGroup: FC<IButtonGroupProps> = ({
    as = "div",
    className = "",
    buttonSize = "default",
    buttonType = "default",
    spacing = "default",
    asColumn = false,
    children
}) => {
    const divideColoring = new ClassNames("divide-white/50");

    return React.createElement(
        as,
        {
            "data-type": "button-group",
            className: new ClassNames("flex flex-col")
                .if(
                    asColumn,
                    // Display a Column
                    new ClassNames()
                        .switch(
                            spacing,
                            {
                                xs: "space-y-1",
                                sm: "space-y-2",
                                lg: "space-y-4",
                                xl: "space-y-8"
                            },
                            "space-y-0 divide-y space-x-0 divide-x-0"
                        )
                        .add(divideColoring),
                    // Display as Row, Flex to Column for Mobile Devices
                    new ClassNames("md:flex-row  md:space-y-0")
                        .switch(
                            spacing,
                            {
                                xs: "md:space-x-1 space-y-1",
                                sm: "md:space-x-2 space-y-2",
                                lg: "md:space-x-4 space-y-4",
                                xl: "md:space-x-8 space-y-8"
                            },
                            "space-x-0 space-y-0 mobile:divide-y md:divide-y-0 mobile:divide-x-0 md:divide-x"
                        )
                        .add(divideColoring)
                        .add(className)
                )

                .list()
        },
        React.Children.toArray(children).map((child, index, { length }) => {
            if (React.isValidElement(child)) {
                const props = { ...child.props };

                /**
                 * Handles where null or undefined is passed into props on the button which results in
                 * the incorrect button type value
                 */
                if (typeof props.type !== "string") {
                    delete props.type;
                }

                /**
                 * Setting type First allows for a type on the Button
                 * to override the groups type.
                 *
                 * Don't allow this for sizing though
                 */
                return React.cloneElement(child, {
                    type: buttonType,
                    ...props,
                    size: buttonSize,
                    // Add any provided classes to this instance
                    className: new ClassNames(child.props?.className || "").if(
                        asColumn,
                        // when set as a Column, remove Top and Bottom Rounding as needed
                        new ClassNames().if(
                            spacing === "default",
                            new ClassNames()
                                .if(index > 0, "rounded-t-none")
                                .if(index < length - 1, "rounded-b-none")
                        ),
                        // when as a Row, remove the Left and Right Borders, on Mobile, remove Top and Bottom
                        new ClassNames().if(
                            spacing === "default",
                            new ClassNames()
                                .if(index > 0, "md:rounded-l-none mobile:rounded-t-none")
                                .if(index < length - 1, "md:rounded-r-none mobile:rounded-b-none")
                        )
                    )
                });
            } else {
                return child;
            }
        })
    );
};

export { ButtonGroup };
