import { ClassNames } from "@codevachon/classnames";

export interface IIconProps {
    className?: string | ClassNames;
    ariaHidden?: boolean;
}
// Solid-Mail
export const IconMail = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
);

// Solid-Cog
export const IconCog = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
        />
    </svg>
);

// Solid-Adjustments
export const IconSettings = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
    </svg>
);

// Solid-Chevron-Up-Down
export const IconChevronUpDown = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            d="M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z"
            clipRule="evenodd"
        />
    </svg>
);

// Solid-Chevron-Down
export const IconChevronDown = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
        />
    </svg>
);

// Solid-Chevron-Left
export const IconChevronLeft = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
        />
    </svg>
);

// Solid-Chevron-Right
export const IconChevronRight = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
        />
    </svg>
);

// Solid-Chevron-Up
export const IconChevronUp = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
        />
    </svg>
);

// Solid-Duplicate
export const IconCopy = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
        <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
    </svg>
);

// Solid-Dots-Vertical
export const IconDotsVertical = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
    </svg>
);

// Solid-Dots-Horizontal
export const IconDotsHorizontal = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
);

// Solid-Link
export const IconLink = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
            clipRule="evenodd"
        />
    </svg>
);

// Solid-External-Link
export const IconExternalLink = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path d="M11 3a1 1 0 100 2h2.586l-5.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
);

// Solid-Key
export const IconKey = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-5-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
            clipRule="evenodd"
        />
    </svg>
);

// Solid-Plus
export const IconPlus = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
        />
    </svg>
);

// Solid-User
export const IconUser = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
        />
    </svg>
);

// Solid-Building
export const IconOfficeBuilding = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
            clipRule="evenodd"
        />
    </svg>
);

// Solid-Search
export const IconSearch = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
        />
    </svg>
);

// Solid-Sparkles
export const IconSparkles = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
            clipRule="evenodd"
        />
    </svg>
);

// Solid-Exclamation-Circle
export const IconExclaimCircle = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
        />
    </svg>
);

export type IconSpinnerTheme = "primary" | "secondary" | "tertiary";
export const IconSpinner = ({
    theme = "primary",
    className = "h-5 w-5",
    ariaHidden = true
}: IIconProps & { theme?: IconSpinnerTheme }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(["animate-spin text-gray-200 dark:text-gray-500"])
            .add({
                "fill-primary": theme === "primary",
                "fill-secondary": theme === "secondary",
                "fill-tertiary": theme === "tertiary"
            })
            .add(className)
            .list()}
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden={ariaHidden}
    >
        <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
        />
        <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
        />
    </svg>
);

// Solid-Selector
export const IconSelector = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
        />
    </svg>
);

// Solid-Check
export const IconCheck = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
        />
    </svg>
);

// Solid-X
export const IconX = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
        />
    </svg>
);

// Outline-Check-Circle
export const IconCircleCheck = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden={ariaHidden}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>
);

// Outline-X-Circle
export const IconCircleX = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden={ariaHidden}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>
);

// Outline-Exclamation-Circle
export const IconCircleExclamation = ({
    className = "h-5 w-5",
    ariaHidden = false
}: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden={ariaHidden}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>
);

// Outline-Information-Circle
export const IconCircleInfo = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden={ariaHidden}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>
);

// Solid-Pencil-Alt
export const IconEdit = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden={ariaHidden}
    >
        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
        <path
            fillRule="evenodd"
            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
            clipRule="evenodd"
        />
    </svg>
);

// Solid-Trash
export const IconRemove = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
        />
    </svg>
);

// Solid-Home
export const IconHome = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
);

// Solid-Folder
export const IconFolder = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
    </svg>
);

// Solid-Folder-Open
export const IconFolderOpen = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
            clipRule="evenodd"
        />
        <path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
    </svg>
);

// Solid-Document-Text
export const IconDocumentText = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
            clipRule="evenodd"
        />
    </svg>
);

// Forward-Slash
export const IconForwardSlash = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        className={new ClassNames(className).ifNotAdd(/h-.+/, "h-5").ifNotAdd(/w-.+/, "w-5").list()}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden={ariaHidden}
    >
        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
    </svg>
);

// solid clipboard-copy
export const SolidClipboardCopy = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-+./, "h-5").ifNotAdd(/w-+./, "w-5").list()}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
        <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
    </svg>
);

// solid Wifi
export const IconSolidWifi = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-+./, "h-5").ifNotAdd(/w-+./, "w-5").list()}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
        />
    </svg>
);

export const IconScrewDriverWrench = ({
    className = "h-5 w-5",
    ariaHidden = false
}: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-+./, "h-5").ifNotAdd(/w-+./, "w-5").list()}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
            clipRule="evenodd"
        />
        <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
        <path
            fillRule="evenodd"
            d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z"
            clipRule="evenodd"
        />
    </svg>
);

export const IconLockClosed = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-+./, "h-5").ifNotAdd(/w-+./, "w-5").list()}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
            clipRule="evenodd"
        />
    </svg>
);

export const IconLockOpen = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-+./, "h-5").ifNotAdd(/w-+./, "w-5").list()}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z" />
    </svg>
);

export const IconEyeClosed = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-+./, "h-5").ifNotAdd(/w-+./, "w-5").list()}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
        <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
        <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
    </svg>
);

export const IconEye = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-+./, "h-5").ifNotAdd(/w-+./, "w-5").list()}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
        <path
            fillRule="evenodd"
            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
            clipRule="evenodd"
        />
    </svg>
);

export const IconPhone = ({ className = "h-5 w-5", ariaHidden = false }: IIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={new ClassNames(className).ifNotAdd(/h-+./, "h-5").ifNotAdd(/w-+./, "w-5").list()}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            clipRule="evenodd"
        />
    </svg>
);

/**
 * List of the Name of All the Icons
 *
 * **NOTE** This is mostly used for Ladle, Probably not something
 * you'll need on the front end.
 */
export const iconNames = [
    "Check",
    "ChevronDown",
    "ChevronLeft",
    "ChevronRight",
    "ChevronUp",
    "ChevronUpDown",
    "CircleCheck",
    "CircleExclamation",
    "CircleInfo",
    "CircleX",
    "Cog",
    "Copy",
    "DocumentText",
    "DotsHorizontal",
    "DotsVertical",
    "Edit",
    "ExclaimCircle",
    "ExternalLink",
    "Eye",
    "EyeClosed",
    "Folder",
    "FolderOpen",
    "ForwardSlash",
    "Home",
    "Key",
    "Link",
    "Mail",
    "OfficeBuilding",
    "Phone",
    "Plus",
    "Remove",
    "Search",
    "Selector",
    "Settings",
    "Sparkles",
    "Spinner",
    "User",
    "Wifi",
    "ScrewDriverWrench",
    "X",
    "LockOpen",
    "LockClosed"
] as const;
export type IconName = typeof iconNames[number];

export const Icon = ({ name, ...props }: { name: IconName } & IIconProps) => {
    switch (name) {
        case "Check":
            return <IconCheck {...props} />;
        case "ChevronDown":
            return <IconChevronDown {...props} />;
        case "ChevronLeft":
            return <IconChevronLeft {...props} />;
        case "ChevronRight":
            return <IconChevronRight {...props} />;
        case "ChevronUpDown":
            return <IconChevronUpDown {...props} />;
        case "ChevronUp":
            return <IconChevronUp {...props} />;
        case "CircleCheck":
            return <IconCircleCheck {...props} />;
        case "CircleExclamation":
            return <IconCircleExclamation {...props} />;
        case "CircleInfo":
            return <IconCircleInfo {...props} />;
        case "CircleX":
            return <IconCircleX {...props} />;
        case "Cog":
            return <IconCog {...props} />;
        case "Copy":
            return <IconCopy {...props} />;
        case "DocumentText":
            return <IconDocumentText {...props} />;
        case "DotsHorizontal":
            return <IconDotsHorizontal {...props} />;
        case "DotsVertical":
            return <IconDotsVertical {...props} />;
        case "Edit":
            return <IconEdit {...props} />;
        case "ExclaimCircle":
            return <IconExclaimCircle {...props} />;
        case "ExternalLink":
            return <IconExternalLink {...props} />;
        case "Eye":
            return <IconEye {...props} />;
        case "EyeClosed":
            return <IconEyeClosed {...props} />;
        case "Folder":
            return <IconFolder {...props} />;
        case "FolderOpen":
            return <IconFolderOpen {...props} />;
        case "ForwardSlash":
            return <IconForwardSlash {...props} />;
        case "Home":
            return <IconHome {...props} />;
        case "Key":
            return <IconKey {...props} />;
        case "Link":
            return <IconLink {...props} />;
        case "Mail":
            return <IconMail {...props} />;
        case "OfficeBuilding":
            return <IconOfficeBuilding {...props} />;
        case "Phone":
            return <IconPhone {...props} />;
        case "Plus":
            return <IconPlus {...props} />;
        case "Remove":
            return <IconRemove {...props} />;
        case "Search":
            return <IconSearch {...props} />;
        case "Selector":
            return <IconSelector {...props} />;
        case "Settings":
            return <IconSettings {...props} />;
        case "Sparkles":
            return <IconSparkles {...props} />;
        case "Spinner":
            return <IconSpinner {...props} />;
        case "User":
            return <IconUser {...props} />;
        case "Wifi":
            return <IconSolidWifi {...props} />;
        case "ScrewDriverWrench":
            return <IconScrewDriverWrench {...props} />;
        case "X":
            return <IconX {...props} />;
        case "LockOpen":
            return <IconLockOpen {...props} />;
        case "LockClosed":
            return <IconLockClosed {...props} />;
        default:
            return <IconCircleExclamation {...props} />;
    }
};
