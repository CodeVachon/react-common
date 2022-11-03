import { Story } from "@ladle/react";
import React from "react";
import { Stack, StackSize, stackSizes } from "./Stack";

const Block = () => (
    <p className="bg-slate-900 text-white px-4 py-2 border border-dashed border-white rounded">
        Block
    </p>
);

export const KitchenSink: Story<{
    spacing: StackSize;
}> = ({ spacing = "default" }) => {
    return (
        <Stack spacing={spacing}>
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
        </Stack>
    );
};
KitchenSink.argTypes = {
    spacing: {
        options: stackSizes,
        control: { type: "select" }
    }
};

export const Spacing: Story<{
    spacing: StackSize;
}> = () => {
    return (
        <Stack>
            {stackSizes.map((value) => (
                <div key={value}>
                    <p className="font-bold">{value}</p>
                    <div>
                        <Stack spacing={value}>
                            <Block />
                            <Block />
                        </Stack>
                    </div>
                </div>
            ))}
        </Stack>
    );
};
