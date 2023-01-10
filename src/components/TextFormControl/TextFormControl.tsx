import { ClassNames } from "@codevachon/classnames";
import { FC, useCallback } from "react";
import { Icon, IconName } from "../Icons";

export const TextFromControlTypes = [
    "textarea",
    "text",
    "password",
    "email",
    "search",
    "tel",
    "url"
] as const;
export type TextFormControlType = typeof TextFromControlTypes[number];

export interface ITextFromControlProps {
    className?: string | ClassNames;
    name?: string;
    type?: TextFormControlType;
    value: string;
    onChange: (value: string) => void;
    onIconClick?: () => void;
    icon?: IconName;
    hideIcon?: boolean;
    placeholder?: string;
}

const TextFromControl: FC<ITextFromControlProps> = ({
    className = "",
    name = "",
    type = "text",
    placeholder = "",
    value,
    icon,
    onChange = () => {},
    onIconClick,
    hideIcon = false
}) => {
    const commonClasses = new ClassNames([
        "focus:outline-none focus-visible:ring-primary focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-opacity-75",
        "block w-full rounded-md sm:text-sm shadow-md",
        "text-slate-900 dark:text-slate-900",
        "border border-gray-200"
    ]);

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            event.preventDefault();
            event.stopPropagation();

            onChange(event.target.value);
        },
        [onChange]
    );

    let typeIcon: IconName | undefined = icon;
    if (!typeIcon) {
        switch (type) {
            case "search":
                typeIcon = "Search";
                break;
            case "email":
                typeIcon = "Mail";
                break;
            case "tel":
                typeIcon = "Phone";
                break;
            case "password":
                typeIcon = "EyeClosed";
                break;
            case "url":
                typeIcon = "Link";
                break;
        }
    }

    return type === "textarea" ? (
        <div
            data-type={`textFromControl-${type}`}
            className={new ClassNames([""]).add(className).list()}
        >
            <textarea
                name={name}
                className={commonClasses.add("min-h-[8rem]").list()}
                value={value}
                onChange={handleChange}
            />
        </div>
    ) : (
        <div
            data-type={`textFromControl-${type}`}
            className={new ClassNames(["relative"]).add(className).list()}
        >
            <input
                type={type}
                name={name}
                className={commonClasses.list()}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
            />
            {hideIcon === false && typeIcon && (
                <div
                    onClick={(event) => {
                        if (event) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        if (typeof onIconClick === "function") {
                            onIconClick();
                        }
                    }}
                    className={new ClassNames(["absolute right-4 top-2.5"])
                        .if(typeof onIconClick === "function", "cursor-pointer")
                        .list()}
                >
                    <Icon
                        name={typeIcon}
                        className={new ClassNames(["text-slate-300"])
                            .if(typeof onIconClick === "function", [
                                "hover:text-slate-500 transition-colors duration-300"
                            ])
                            .list()}
                    />
                </div>
            )}
        </div>
    );
};

export { TextFromControl };
