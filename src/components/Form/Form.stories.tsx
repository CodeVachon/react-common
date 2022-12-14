import React from "react";
import { Form } from "./Form";
import { FormControl } from "./../FormControl";
import ClassNames from "@codevachon/classnames";
import { Stack } from "../Stack";
import { getDateString } from "../../utl";

export const KitchenSink = ({ submitAction }) => {
    const listBoxOptions = [
        { label: "value 1", value: "value-1" },
        { label: "value 2", value: "value-2" },
        { label: "value 3", value: "value-3" }
    ];
    const data = {
        name: "",
        password: "",
        options: listBoxOptions[0].value,
        startDate: getDateString(new Date())
    };
    return (
        <Stack className={new ClassNames(["max-w-[400px]"]).list()} spacing="xl">
            <Form
                data={data}
                onSubmit={(submitData, done) => {
                    setTimeout(() => {
                        done(submitData);
                        setTimeout(() => {
                            submitAction(submitData);
                        }, 750);
                    }, 1500);
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
                <FormControl name="startDate" type="date" label="Start Date" />
            </Form>
            <p className={new ClassNames(["text-slate-500"]).list()}>
                Note: ladle is resetting this component on submit. Relates to "ladle.actions"
            </p>
        </Stack>
    );
};

KitchenSink.argTypes = {
    submitAction: {
        action: "Submitted"
    }
};
