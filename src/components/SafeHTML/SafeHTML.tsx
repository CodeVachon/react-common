import { ClassNames } from "@codevachon/classnames";
import React from "react";
import { FC, ReactNode } from "react";

export const SafeHTMLAsValues = ["div", "section", "article"] as const;
export type SafeHTMLAs = typeof SafeHTMLAsValues[number];

interface ISafeHTMLProps {
    as?: SafeHTMLAs;
    className?: string;
    content?: string;
    children?: ReactNode;
}

const SafeHTML: FC<ISafeHTMLProps> = ({ as = "div", className = "", content, children }) => {
    return React.createElement(as, {
        className: new ClassNames(className).list(),
        dangerouslySetInnerHTML: {
            __html: content || children || ""
        }
    });
};

export { SafeHTML };
