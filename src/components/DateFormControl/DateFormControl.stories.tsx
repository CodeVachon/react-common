import React, { useState } from "react";
import ClassNames from "@codevachon/classnames";
import { Stack } from "../Stack";
import {
    DateFormControl,
    DateFormControlDateDelimiters,
    DateFormControlSpacingValues
} from "./DateFormControl";
import { getDateString } from "../../utl";

export default {
    title: "Form Control / Date Control"
};

export const KitchenSink = ({
    value,
    delimiter,
    spacing,
    yearStart,
    yearEnd,
    hideDay,
    hideMonth,
    hideYear
}) => {
    const [controlValue, setControlValue] = useState<string>(value);

    return (
        <Stack className={new ClassNames(["max-w-[400px]"]).list()} spacing="xl">
            <DateFormControl
                hideDay={hideDay}
                hideMonth={hideMonth}
                hideYear={hideYear}
                yearEnd={yearEnd}
                yearStart={yearStart}
                value={controlValue}
                onChange={setControlValue}
                dateDelimiter={delimiter}
                spacing={spacing}
            />
            <p>Value: {controlValue}</p>
        </Stack>
    );
};

KitchenSink.args = {
    value: getDateString(),
    yearStart: new Date().getFullYear() - 3,
    yearEnd: new Date().getFullYear() + 1,
    hideDay: false,
    hideMonth: false,
    hideYear: false
};
KitchenSink.argTypes = {
    delimiter: {
        options: DateFormControlDateDelimiters,
        control: { type: "select" },
        defaultValue: "-"
    },
    spacing: {
        options: DateFormControlSpacingValues,
        control: { type: "select" },
        defaultValue: "default"
    }
};
