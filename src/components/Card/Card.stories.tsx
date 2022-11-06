import { Story } from "@ladle/react";
import React from "react";
import { Card } from "./Card";

export const KitchenSink: Story<{
    body: string;
    footer: string;
    header: string;
    hideFooter: boolean;
    hideHeader: boolean;
}> = ({
    body = "Hello",
    hideFooter = false,
    hideHeader = false,
    header = "Header Content",
    footer = "Footer Content"
}) => {
    return (
        <Card footer={hideFooter ? null : footer} header={hideHeader ? null : header}>
            {body}
        </Card>
    );
};
KitchenSink.args = {
    footer: "Footer Content",
    header: "Header Content",
    hideFooter: false,
    hideHeader: false,
    body: "Hello"
};

export const Header: Story<{
    body: string;
}> = ({ body = "Hello" }) => {
    return <Card header={"Header Content"}>{body}</Card>;
};
KitchenSink.args = {
    body: "Hello"
};

export const Footer: Story<{
    body: string;
}> = ({ body = "Hello" }) => {
    return <Card footer={"Footer Content"}>{body}</Card>;
};
KitchenSink.args = {
    body: "Hello"
};
