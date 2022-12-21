import { ClassNames } from "@codevachon/classnames";
import type { Story } from "@ladle/react";
import { Stack } from "../Stack";
import { PageTitle, PageTitleSize, pageTitleSizes } from "./Typography";
import React, { FC, ReactNode } from "react";
import { Card } from "./../Card";

const SectionText = () => (
    <p className={new ClassNames([]).list()}>
        What looked like a small patch of purple grass, above five feet square, was moving across
        the sand in their direction. When it came near enough he perceived that it was not grass;
        there were no blades, but only purple roots. The roots were revolving, for each small plant
        in the whole patch, like the spokes of a rimless wheel.
    </p>
);
const SectionTitle: FC<{ title: string; children?: ReactNode }> = ({ title, children }) => (
    <div className={new ClassNames([]).list()}>
        <p className={new ClassNames(["border-slate-500 font-mono text-slate-500"]).list()}>
            {title}
        </p>
        {children}
    </div>
);

export const TypeScale: Story<{
    text: string;
    body: string;
}> = ({ text = "Hello World", body = "I Am Groot" }) => (
    <Stack spacing="lg">
        {pageTitleSizes.map((size) => (
            <Card header={<SectionTitle title={`PageTitle: Size ${size}`} />} key={size}>
                <PageTitle size={size}>{text}</PageTitle>
                <p>{body}</p>
            </Card>
        ))}

        <Card header={<SectionTitle title={`Paragraph`} />}>
            <p>{body}</p>
        </Card>
    </Stack>
);
TypeScale.args = {
    text: "Hello World",
    body: "What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction. When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel."
};

export const pageTitle: Story<{
    text?: string;
    size?: PageTitleSize;
}> = ({ text = "Hello World", size = "h1" }) => (
    <div>
        <PageTitle size={size}>{text}</PageTitle>
        <SectionText />
    </div>
);
pageTitle.args = {
    text: "Hello World",
    size: "h1"
};
pageTitle.argTypes = {
    size: {
        options: pageTitleSizes,
        control: { type: "select" },
        defaultValue: "h1"
    }
};
