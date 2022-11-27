import React from "react";
import type { Story } from "@ladle/react";
import { SafeHTML } from "./SafeHTML";
import { Card } from "../Card";
import { PageTitle } from "../Typography/Typography";

export const KitchenSink: Story<{ html: string }> = ({ html = "<h1>Hello</h1>" }) => (
    <Card header={<PageTitle size="h4">HTML</PageTitle>}>
        <SafeHTML className="prose max-w-none" content={html} />
    </Card>
);
KitchenSink.args = {
    html: "<h1>Hello World</h1>"
};
