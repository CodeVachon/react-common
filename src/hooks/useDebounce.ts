//

import { useEffect, useState } from "react";

/**
 * Debounce a Value
 *
 * **example**
 *
 * ```ts
 * const [value, setValue] = useState("");
 * const debouncedValue = useDebounce(value, 500);
 * ```
 *
 * **credits**
 * [usehooks-ts / useDebounce](https://usehooks-ts.com/react-hook/use-debounce)
 *
 * @param value the value to be debounced
 * @param delay the length of time to hold on before updating
 * @returns the value after the delay
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
}
