import React, { useState } from "react";
import { ListBox } from "./Listbox";

export const KitchenSink = () => {
    const options = ["option 1", "option 2", "option 3"];
    const [value, setValue] = useState<string>(options[0]);

    return <ListBox value={value} onChange={(v) => setValue(v)} options={options} />;
};
