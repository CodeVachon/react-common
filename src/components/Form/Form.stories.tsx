import React from "react";
import { Form } from "./Form";
import { FormControl } from "./../FormControl";
import ClassNames from "@codevachon/classnames";

export const KitchenSink = () => {
    const listBoxOptions = [
        { label: "value 1", value: "value-1" },
        { label: "value 2", value: "value-2" },
        { label: "value 3", value: "value-3" }
    ];
    const data = { name: "", password: "", options: listBoxOptions[0].value };
    return (
        <div className={new ClassNames(["max-w-[400px]"]).list()}>
            <Form
                data={data}
                onSubmit={(submitData, done) => {
                    setTimeout(() => done(submitData), 1500);
                }}
            >
                <FormControl label="My Label" name="name" />
                <FormControl type="password" label="Password" name="password" />
                <FormControl
                    name="options"
                    type="listbox"
                    label="Some Options"
                    options={listBoxOptions}
                />
            </Form>
        </div>
    );
};
