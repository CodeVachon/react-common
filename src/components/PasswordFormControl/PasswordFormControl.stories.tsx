import React, { useState } from "react";
import ClassNames from "@codevachon/classnames";
import { Stack } from "../Stack";
import { PasswordFormControl } from "./PasswordFormControl";

export default {
    title: "Form Control / Password Control"
};

export const KitchenSink = ({ value, placeholder }) => {
    const [controlValue, setControlValue] = useState<string>(value);

    return (
        <Stack className={new ClassNames(["max-w-[400px]"]).list()} spacing="xl">
            <PasswordFormControl
                placeholder={placeholder}
                name="MyControl"
                value={controlValue}
                onChange={setControlValue}
            />
            <p>Value: {controlValue}</p>
        </Stack>
    );
};

KitchenSink.args = {
    placeholder: "Password",
    value: ""
};
