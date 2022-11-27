import { ClassNames } from "@codevachon/classnames";
import React from "react";
import type { FC, ReactNode } from "react";

export const pageTitleSizes = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
export type PageTitleSize = typeof pageTitleSizes[number];

interface IPageTitleProps {
    className?: string | ClassNames;
    as?: PageTitleSize;
    size?: PageTitleSize;
    children: ReactNode;
}

const PageTitle: FC<IPageTitleProps> = ({ as = "h1", className = "", size = "h1", children }) => {
    // Values from https://type-scale.com/ - 1.125 - Major Second Scale
    return React.createElement(
        as,
        {
            className: new ClassNames(["font-semibold", "font-serif"])
                .switch(
                    size,
                    {
                        h1: "text-[1.802rem]",
                        h2: "text-[1.602rem]",
                        h3: "text-[1.424rem]",
                        h4: "text-[1.266rem]",
                        h5: "text-[1.125rem]"
                    },
                    "text-[1rem]"
                )
                .add(className)
                .ifNotAdd(new RegExp("^text-"), "text-black dark:text-white")
                .list()
        },
        children
    );
};

export { PageTitle };
