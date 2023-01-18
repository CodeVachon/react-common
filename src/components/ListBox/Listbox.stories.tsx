import ClassNames from "@codevachon/classnames";
import React, { useState } from "react";
import { ListBox, listBoxOpenDirections, listBoxThemes } from "./Listbox";

export const KitchenSink = ({ openDir, theme }) => {
    const options = ["option 1", "option 2", "option 3"];
    const [value, setValue] = useState<string>(options[0]);

    return (
        <div
            className={new ClassNames(["h-full flex flex-col items-center justify-center"]).list()}
        >
            <div className={new ClassNames(["min-w-[300px]"]).list()}>
                <ListBox
                    value={value}
                    onChange={(v) => setValue(v)}
                    options={options}
                    openDir={openDir}
                    theme={theme}
                />
            </div>
        </div>
    );
};
KitchenSink.argTypes = {
    openDir: {
        options: listBoxOpenDirections,
        control: { type: "select" },
        defaultValue: "down"
    },
    theme: {
        options: listBoxThemes,
        control: { type: "select" },
        defaultValue: "default"
    }
};

export const AutoPlacement = ({ theme }) => {
    const options = ["option 1", "option 2", "option 3"];
    const [value1, setValue1] = useState<string>(options[0]);
    const [value2, setValue2] = useState<string>(options[0]);

    return (
        <div
            className={new ClassNames(["h-full flex flex-col items-center justify-between"]).list()}
        >
            <div className={new ClassNames(["min-w-[300px]"]).list()}>
                <ListBox
                    value={value1}
                    onChange={(v) => setValue1(v)}
                    options={options}
                    openDir={"auto"}
                    theme={theme}
                />
            </div>
            <div className={new ClassNames(["min-w-[300px]"]).list()}>
                <ListBox
                    value={value2}
                    onChange={(v) => setValue2(v)}
                    options={options}
                    openDir={"auto"}
                    theme={theme}
                />
            </div>
        </div>
    );
};
AutoPlacement.argTypes = {
    theme: {
        options: listBoxThemes,
        control: { type: "select" },
        defaultValue: "default"
    }
};
