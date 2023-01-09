import React from "react";
import { Form } from "./../Form";
import { FormControl, FormControlTypes } from "./../FormControl";
import ClassNames from "@codevachon/classnames";
import { Stack } from "../Stack";

export const KitchenSink = ({ submitAction, type, label, value }) => {
    const data = {
        key: value
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
                <FormControl label={label} name="key" type={type} />
            </Form>
            <p className={new ClassNames(["text-slate-500"]).list()}>
                Note: ladle is resetting this component on submit. Relates to "ladle.actions"
            </p>
        </Stack>
    );
};

KitchenSink.args = {
    label: "My Test Label",
    value: ""
};
KitchenSink.argTypes = {
    submitAction: {
        action: "Submitted"
    },
    type: {
        options: FormControlTypes,
        control: { type: "select" },
        defaultValue: "text"
    }
};
