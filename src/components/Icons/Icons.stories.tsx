import { ClassNames } from "@codevachon/classnames";
import { Icon, IconExternalLink, IconName, IIconProps, iconNames } from "./Icons";
import { ReactNode, useState } from "react";
import { Story } from "@ladle/react";
import { PageTitle } from "../Typography";
import React from "react";

const allIconList: Array<{ label: string; node: (props: IIconProps) => ReactNode }> = iconNames.map(
    (icon) => ({
        label: `Icon${icon}`,
        node: (props) => <Icon name={icon} {...props} />
    })
);

allIconList.sort((a, b) => {
    if (a.label < b.label) {
        return -1;
    } else if (a.label > b.label) {
        return 1;
    } else {
        return 0;
    }
});

export const AllIcons = () => {
    const [filter, setFilter] = useState<string>("");
    return (
        <section className={new ClassNames(["flex flex-col space-y-6"]).list()}>
            <PageTitle>Icons</PageTitle>

            <p className={new ClassNames(["text-slate-500"]).list()}>
                Icons Primarily Sourced from{" "}
                <a
                    href="https://heroicons.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={new ClassNames([
                        "inline-flex items-center space-x-4",
                        "hover:decoration-primary underline"
                    ]).list()}
                >
                    Hero Icons <IconExternalLink />
                </a>
                .
            </p>

            <div>
                <input
                    className={new ClassNames(["rounded-sm border px-4 py-2"]).list()}
                    placeholder="Filter"
                    type="text"
                    value={filter}
                    onChange={(e) => setFilter(e.currentTarget.value)}
                />
            </div>

            <ul className={new ClassNames(["grid grid-cols-5 gap-4"]).list()}>
                {allIconList
                    .filter(({ label }) => new RegExp(filter, "gi").test(label))
                    .map(({ label, node }) => (
                        <li
                            key={label}
                            className={new ClassNames([
                                "flex flex-col items-center justify-center space-y-2"
                            ]).list()}
                        >
                            <div
                                className={new ClassNames(["h-24 w-24 rounded border p-4"]).list()}
                            >
                                {node({
                                    className: "w-full h-full text-slate-900 dark:text-slate-50"
                                })}
                            </div>
                            <p
                                className={new ClassNames([
                                    "select-all whitespace-nowrap font-mono text-sm text-slate-900 dark:text-slate-50"
                                ]).list()}
                            >
                                {`<${label} />`}
                            </p>
                        </li>
                    ))}
            </ul>
        </section>
    );
};

export const IconSingleton: Story<{ name: IconName; className: string }> = ({
    name = "User",
    ...props
}) => {
    return <Icon name={name} {...props} />;
};
IconSingleton.args = {
    name: "User",
    className: "h-24 w-24"
};
IconSingleton.argTypes = {
    name: {
        options: allIconList.map((icon) => icon.label.replace(new RegExp("^Icon", "i"), "")),
        control: { type: "select" },
        defaultValue: "User"
    },
    className: {
        options: ["h-24 w-24", "h-5 w-5"],
        control: { type: "select" },
        defaultValue: "h-24 w-24"
    }
};
