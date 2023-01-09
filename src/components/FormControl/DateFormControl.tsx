import ClassNames from "@codevachon/classnames";
import { range } from "@codevachon/utilities";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useDebounce } from "src/hooks";
import { ListBox } from "../ListBox";

export const DateFormControlSpacingValues = [
    "none",
    "xs",
    "sm",
    "default",
    "standard",
    "lg",
    "xl"
] as const;
export type DateFormControlSpacing = typeof DateFormControlSpacingValues[number];
export const DateFormControlDateDelimiters = ["-", "/"] as const;
export type DateFormControlDateDelimiter = typeof DateFormControlDateDelimiters[number];
export const DateFormControlSelectors = ["dropdown"] as const;
export type DateFormControlSelector = typeof DateFormControlSelectors[number];

export interface IDateFormControlProps {
    className?: string | ClassNames;
    yearStart?: number;
    yearEnd?: number;
    value: string;
    dateDelimiter?: DateFormControlDateDelimiter;
    onChange: (value: string) => void;
    selector?: DateFormControlSelector;
    spacing?: DateFormControlSpacing;
    hideDay?: boolean;
    hideMonth?: boolean;
    hideYear?: boolean;
}

interface DateFormControlDateObject {
    year: number;
    month: number;
    day: number;
}

const datePad = (value: string | number) => String(value).padStart(2, "0");

const DateFormControl: FC<IDateFormControlProps> = ({
    className = "",
    yearEnd = new Date().getFullYear() + 1,
    yearStart = new Date().getFullYear() - 25,
    value,
    onChange = () => {},
    selector = "dropdown",
    dateDelimiter = "-",
    spacing = "default",
    hideDay = false,
    hideMonth = false,
    hideYear = false
}) => {
    const formatOutputDate = useCallback(
        (cDate: DateFormControlDateObject): string => {
            const dateString = [cDate.year, datePad(cDate.month), datePad(cDate.day)].join(
                dateDelimiter
            );

            return dateString; // new Date(dateString).toJSON();
        },
        [dateDelimiter]
    );

    const formatInputDate = useCallback(
        (currDateString: string): DateFormControlDateObject => {
            const asDate = currDateString
                .replace(new RegExp(`^([\\d]{4}[-\\/][\\d]{2}[-\\/][\\d]{2})(?:.+)?`), "$1")
                .split(new RegExp("[-\\/]"));

            if (asDate.length !== 3) {
                throw new Error(
                    `Invalid Date Format. Expected "YYYY${dateDelimiter}MM${dateDelimiter}DD", Got "${currDateString}"`
                );
            }

            return {
                year: Number(asDate[0]),
                month: Number(asDate[1]),
                day: Number(asDate[2])
            };
        },
        [dateDelimiter]
    );

    const forceValidDate = useCallback((cDate: DateFormControlDateObject) => {
        const maxDay = daysInMonth(cDate.month, cDate.year);

        if (cDate.day > maxDay) {
            cDate.day = maxDay;
        }

        return cDate;
    }, []);

    const [date, setDate] = useState<DateFormControlDateObject>(formatInputDate(value));

    const formattedIncomingValue = useMemo(() => formatOutputDate(formatInputDate(value)), [value]);
    // const debouncedDate = useDebounce(date, 150);
    /**
     * Update the Internal State Value when `value` is Changed
     */
    useEffect(() => {
        const A = formattedIncomingValue;
        const B = formatOutputDate(date);

        if (A !== B) {
            setDate(formatInputDate(value));
        }
    }, [formattedIncomingValue, date]);

    /**
     * When the Internal State Value is changed, trigger the
     * onChange() function from Props
     */
    const onSelectedValueChange = useCallback(
        (date: DateFormControlDateObject) => {
            const A = formattedIncomingValue;
            const B = formatOutputDate(date);

            /**
             * Prevents a recursive loop if A already equals B
             */
            if (A !== B) {
                onChange(B);
                setDate(date);
            }
        },
        [formattedIncomingValue]
    );

    if (selector === "dropdown") {
        const maxDaysInMonth = daysInMonth(date.month, date.year);

        const years = range(
            date.year < yearStart ? date.year : yearStart,
            date.year > yearEnd ? date.year : yearEnd
        );

        return (
            <div
                data-type="dateFormControl"
                className={new ClassNames(["flex "])
                    .switch(
                        spacing,
                        {
                            none: "space-x-0",
                            xs: "space-x-1",
                            sm: "space-x-2",
                            standard: "space-x-4",
                            lg: "space-x-6",
                            xl: "space-x-8"
                        },
                        "space-x-2"
                    )
                    .add(className)
                    .list()}
            >
                {!hideYear && (
                    <ListBox
                        className={new ClassNames(["min-w-[120px]"]).list()}
                        value={String(date.year)}
                        onChange={(value) => {
                            onSelectedValueChange(forceValidDate({ ...date, year: Number(value) }));
                        }}
                        options={years.map((v) => ({
                            label: String(v),
                            value: String(v)
                        }))}
                    />
                )}
                {!hideMonth && (
                    <ListBox
                        className={new ClassNames(["flex-grow", "min-w-[150px]"]).list()}
                        value={String(date.month)}
                        onChange={(value) => {
                            onSelectedValueChange(
                                forceValidDate({ ...date, month: Number(value) })
                            );
                        }}
                        options={range(1, 12).map((v) => ({
                            label: new Intl.DateTimeFormat("default", { month: "long" }).format(
                                new Date(date.year, v - 1, 1)
                            ),
                            value: String(v)
                        }))}
                    />
                )}
                {!hideDay && (
                    <ListBox
                        className={new ClassNames(["min-w-[100px]"]).list()}
                        value={String(date.day)}
                        onChange={(value) => {
                            onSelectedValueChange(forceValidDate({ ...date, day: Number(value) }));
                        }}
                        options={range(1, maxDaysInMonth).map((v) => ({
                            label: String(v),
                            value: String(v)
                        }))}
                    />
                )}
            </div>
        );
    } else {
        return <p>Unknown Selector: {selector}</p>;
    }
};

function daysInMonth(month: number, year: number) {
    return new Date(year, month + 1, 0).getDate();
}

export { DateFormControl };
