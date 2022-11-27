import ClassNames from "@codevachon/classnames";
import { FC, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface IListBoxProps {
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
}

const ListBox: FC<IListBoxProps> = ({ value, options = [], onChange, className = "" }) => {
    const cleanedOptions = options.map((option) =>
        typeof option === "string"
            ? { label: option, value: option }
            : {
                  label: String(option.label).length > 0 ? option.label : option.value,
                  value: option.value
              }
    );
    const current = cleanedOptions.filter((opt) => opt.value === value)[0];

    return (
        <Listbox value={value} onChange={onChange}>
            <div className={new ClassNames(["relative"]).add(className).list()}>
                <Listbox.Button
                    className={new ClassNames([
                        "relative z-10 w-full cursor-default rounded-lg border bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                    ]).list()}
                >
                    <span className={new ClassNames(["block truncate"]).list()}>
                        {current ? current.label : "Select a Value"}
                    </span>
                    <span
                        className={new ClassNames([
                            "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                        ]).list()}
                    >
                        <ChevronUpDownIcon
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
                            "absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        ]).list()}
                    >
                        {cleanedOptions.map((option) => (
                            <Listbox.Option
                                key={option.value}
                                className={({ active }) =>
                                    new ClassNames([
                                        "relative cursor-default select-none py-2 pl-10 pr-4"
                                    ])
                                        .if(active, "bg-amber-100 text-amber-900", "text-gray-900")
                                        .list()
                                }
                                value={option.value}
                            >
                                {({ selected }) => (
                                    <>
                                        <span
                                            className={new ClassNames(["block truncate"])
                                                .if(selected, "font-medium", "font-normal")
                                                .list()}
                                        >
                                            {option.label}
                                        </span>
                                        {selected ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        ) : null}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
};

export { ListBox };
