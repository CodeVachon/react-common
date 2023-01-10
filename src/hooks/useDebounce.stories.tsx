import React from "react";
import { Stack, PageTitle } from "../components/";

export default {
    title: "Hooks / use Debounce"
};

export const HowToUse = () => {
    return (
        <Stack>
            <PageTitle>useDebounce</PageTitle>
            <code>
                <pre
                    dangerouslySetInnerHTML={{
                        __html: `
 const [value, setValue] = useState("");
 const debouncedValue = useDebounce(value, 500);
 `
                    }}
                ></pre>
            </code>
        </Stack>
    );
};
