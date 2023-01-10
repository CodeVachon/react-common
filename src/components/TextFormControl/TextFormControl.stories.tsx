import React, { useState } from "react";
import ClassNames from "@codevachon/classnames";
import { Stack } from "../Stack";
import { TextFormControlType, TextFromControl, TextFromControlTypes } from "./TextFormControl";
import { IconName, iconNames } from "../Icons";
import { Story } from "@ladle/react";

export default {
    title: "Form Control / Text Control"
};

export const KitchenSink: Story<{
    value: string;
    placeholder: string;
    type: TextFormControlType;
    icon: IconName | "none";
}> = ({ value, type, placeholder, icon = "none" }) => {
    const [controlValue, setControlValue] = useState<string>(value);

    return (
        <Stack className={new ClassNames(["max-w-[400px]"]).list()} spacing="xl">
            <TextFromControl
                placeholder={placeholder}
                name="MyControl"
                type={type}
                value={controlValue}
                onChange={setControlValue}
                icon={icon === "none" ? undefined : icon}
            />
            <p>Value: {controlValue}</p>
        </Stack>
    );
};

KitchenSink.args = {
    placeholder: "your text here",
    value: ""
};
KitchenSink.argTypes = {
    type: {
        options: TextFromControlTypes,
        control: { type: "select" },
        defaultValue: "text"
    },
    icon: {
        options: ["none"].concat(iconNames),
        control: { type: "select" },
        defaultValue: "none"
    }
};
