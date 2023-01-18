import ClassNames from "@codevachon/classnames";
import { FC, Fragment, useCallback, useMemo, useRef } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { IconCheck, IconChevronUpDown } from "./../Icons";

export const listBoxOpenDirections = ["up", "down", "auto"] as const;
export type ListBoxOpenDirection = typeof listBoxOpenDirections[number];

export const listBoxThemes = [
    "default",
    "primary",
    "secondary",
    "tertiary",
    "success",
    "danger"
] as const;
export type ListBoxTheme = typeof listBoxThemes[number];

export interface IListBoxProps {
    className?: string | ClassNames;
    value: string;
    onChange: (value: string) => void;
    options: Array<
        | {
              label?: string;
              value: string;
          }
        | string
    >;
    openDir?: ListBoxOpenDirection;
    theme?: ListBoxTheme;
}

const ListBox: FC<IListBoxProps> = ({
    value,
    options = [],
    onChange,
    className = "",
    openDir = "down",
    theme = "default"
}) => {
    const cleanedOptions: Array<{
        label: string;
        value: string;
    }> = options.map((option) =>
        typeof option === "string"
            ? { label: option, value: option }
            : {
                  label: String(option.label).length > 0 ? String(option.label) : option.value,
                  value: option.value
              }
    );
    const current = cleanedOptions.filter((opt) => opt.value === value)[0];
    const thisInput = useRef<HTMLDivElement>(null);

    const isNearBottom = useCallback((): boolean => {
        const maxHeightOfOptionList = 240;
        if (thisInput && window !== undefined) {
            const screenTwoThirds = window.innerHeight - window.innerHeight / 3;
            const node = thisInput.current;

            if (node) {
                const elemPos = node.getBoundingClientRect();

                return elemPos.top + maxHeightOfOptionList > screenTwoThirds;
            }
        }

        return false;
    }, [thisInput]);

    const getDerivedOpenDir = useCallback(() => {
        return openDir === "auto" ? (isNearBottom() ? "up" : "down") : openDir;
    }, [isNearBottom]);

    return (
        <Listbox value={value} onChange={onChange}>
            {({ open }) => {
                const derivedOpenDir = getDerivedOpenDir();

                return (
                    <>
                        <div
                            className={new ClassNames(["relative"]).add(className).list()}
                            ref={thisInput}
                        >
                            <Listbox.Button
                                className={new ClassNames([
                                    "relative z-10 w-full cursor-default rounded-md border bg-white py-2 pl-3 pr-10 text-left shadow-md sm:text-sm",
                                    "focus:outline-none  focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-offset-2"
                                ])
                                    .switch<ListBoxTheme>(
                                        theme,
                                        {
                                            secondary:
                                                "focus-visible:border-secondary focus-visible:ring-secondary",
                                            tertiary:
                                                "focus-visible:border-tertiary focus-visible:ring-tertiary",
                                            success:
                                                "focus-visible:border-success focus-visible:ring-success",
                                            danger: "focus-visible:border-danger focus-visible:ring-danger"
                                        },
                                        "focus-visible:border-primary focus-visible:ring-primary"
                                    )
                                    .list()}
                            >
                                <span className={new ClassNames(["block truncate"]).list()}>
                                    {current ? current.label : "Select a Value"}
                                </span>
                                <span
                                    className={new ClassNames([
                                        "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                                    ]).list()}
                                >
                                    <IconChevronUpDown
                                        className={new ClassNames(["h-5 w-5 text-gray-400"]).list()}
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>

                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options
                                    className={new ClassNames([
                                        "absolute z-20  max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                    ])
                                        .switch(derivedOpenDir, { up: "bottom-[2.60rem]" }, "mt-1")
                                        .list()}
                                >
                                    {cleanedOptions.map((option) => (
                                        <Listbox.Option
                                            key={option.value}
                                            className={({ active }) =>
                                                new ClassNames([
                                                    "relative cursor-default select-none py-2 pl-10 pr-4"
                                                ])
                                                    .if(
                                                        active,
                                                        new ClassNames().switch<ListBoxTheme>(
                                                            theme,
                                                            {
                                                                secondary:
                                                                    "bg-secondary/10 text-secondary",
                                                                tertiary:
                                                                    "bg-tertiary/10 text-tertiary",
                                                                success:
                                                                    "bg-success/10 text-success",
                                                                danger: "bg-danger/10 text-danger"
                                                            },
                                                            "bg-primary/10 text-primary"
                                                        ),
                                                        "text-gray-900"
                                                    )
                                                    .list()
                                            }
                                            value={option.value}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={new ClassNames([
                                                            "block truncate"
                                                        ])
                                                            .if(
                                                                selected,
                                                                "font-medium",
                                                                "font-normal"
                                                            )
                                                            .list()}
                                                    >
                                                        {option.label}
                                                    </span>
                                                    {selected ? (
                                                        <span
                                                            className={new ClassNames([
                                                                "absolute inset-y-0 left-0 flex items-center pl-3"
                                                            ])
                                                                .switch<ListBoxTheme>(
                                                                    theme,
                                                                    {
                                                                        secondary: "text-secondary",
                                                                        tertiary: "text-tertiary",
                                                                        success: "text-success",
                                                                        danger: "text-danger"
                                                                    },
                                                                    "text-primary"
                                                                )
                                                                .list()}
                                                        >
                                                            <IconCheck
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                );
            }}
        </Listbox>
    );
};

export { ListBox };
