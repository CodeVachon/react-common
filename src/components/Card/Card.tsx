import { ClassNames } from "@codevachon/classnames";
import { isNil } from "@codevachon/utilities";
import type { FC, ReactNode } from "react";
import React from "react";

export const cardAs = ["div", "article", "section"] as const;
export type CardAs = typeof cardAs[number];

interface ICardProps {
    className?: string | ClassNames;
    bodyClassName?: string | ClassNames;
    headerClassName?: string | ClassNames;
    footerClassName?: string | ClassNames;
    noBodyPadding?: boolean;
    children: ReactNode;
    header?: ReactNode;
    footer?: ReactNode;
    as?: CardAs;
}

const cardPadding = new ClassNames("px-6 py-4");
const Card: FC<ICardProps> = ({
    as = "div",
    className = "",
    bodyClassName = "",
    headerClassName = "",
    footerClassName = "",
    noBodyPadding = false,
    children,
    header,
    footer
}) => {
    return React.createElement(
        as,
        {
            "data-type": "card",
            className: new ClassNames(["border rounded shadow", "bg-white/25"])
                .add(className)
                .list()
        },
        [
            !isNil(header)
                ? React.createElement(
                      "header",
                      {
                          "data-type": "card-header",
                          className: new ClassNames("border-b")
                              .add(headerClassName)
                              .add(cardPadding)
                              .list()
                      },
                      header
                  )
                : null,
            React.createElement(
                "main",
                {
                    "data-type": "card-body",
                    className: new ClassNames()
                        .if(noBodyPadding === false, cardPadding, "p-0")
                        .add(bodyClassName)
                        .list()
                },
                children
            ),
            !isNil(footer)
                ? React.createElement(
                      "footer",
                      {
                          "data-type": "card-footer",
                          className: new ClassNames("border-t")
                              .add(footerClassName)
                              .add(cardPadding)
                              .list()
                      },
                      footer
                  )
                : null
        ].filter((elem) => !isNil(elem))
    );
};

export { Card, cardPadding };
