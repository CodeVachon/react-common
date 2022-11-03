import { Story } from "@ladle/react";
import React from "react";
import { Stack, StackSize, stackSizes } from "./Stack";

const PlaceHolder = () => (
    <div className="border border-dashed border-slate-900 p-6 rounded flex items-center justify-center">
        <p>Place Holder</p>
    </div>
);

export const KitchenSink: Story<{
    spacing: StackSize;
}> = ({ spacing = "default" }) => {
    return (
        <Stack spacing={spacing}>
            <PlaceHolder />
            <PlaceHolder />
            <PlaceHolder />
            <PlaceHolder />
            <PlaceHolder />
        </Stack>
    );
};
KitchenSink.argTypes = {
    size: {
        options: stackSizes,
        control: { type: "select" }
    }
};

const Block = () => (
    <p className="bg-slate-900 text-white px-4 py-2 border border-dashed border-white rounded">
        Block
    </p>
);
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
