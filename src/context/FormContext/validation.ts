import { Validation } from "../../utl/Validation";
import type { IFormContextDataValidationOptions } from "./FormContext.d";

/**
 *
 * @param value the Value to be Checked
 * @param validationRecord  the Validation Record
 */
export const runValidation = (
    value: unknown,
    validationRecord?: IFormContextDataValidationOptions
) => {
    if (validationRecord) {
        if (validationRecord.isRequired === true) {
            if (new Validation(value).isNil()) {
                throw new Error("value is required");
            }
        }

        if (validationRecord.isEmailAddress === true) {
            if (new Validation(value).not.isEmailAddress()) {
                throw new Error("Expected a valid Email Address");
            }
        }

        if (validationRecord.isPassword === true) {
            if (new Validation(value).not.matches(new RegExp("[A-Z]", "g"))) {
                throw new Error("Expected at least 1 upper case letter");
            }
            if (new Validation(value).not.matches(new RegExp("[a-z]", "g"))) {
                throw new Error("Expected at least 1 lower case letter");
            }
            if (new Validation(value).not.matches(new RegExp("[0-9]", "g"))) {
                throw new Error("Expected at least 1 number");
            }
        }

        if (typeof value === "string") {
            if (validationRecord.isRequired === true) {
                if (String(value).length === 0) {
                    throw new Error("value is required");
                }
            }
            if (validationRecord?.min) {
                if (String(value).length < validationRecord.min) {
                    throw new Error(`Expected a length greater than ${validationRecord.min}`);
                }
            }
            if (validationRecord?.max) {
                if (String(value).length > validationRecord.max) {
                    throw new Error(`Expected a length less than ${validationRecord.max}`);
                }
            }
        }

        if (typeof value === "number") {
            if (validationRecord?.min) {
                if (Number(value) < validationRecord.min) {
                    throw new Error(`Expected greater than or equal to ${validationRecord.min}`);
                }
            }
            if (validationRecord?.max) {
                if (Number(value) > validationRecord.max) {
                    throw new Error(`Expected less than or equal to ${validationRecord.max}`);
                }
            }
        }

        if (validationRecord.fn) {
            const fnSet = Array.isArray(validationRecord.fn)
                ? validationRecord.fn
                : [validationRecord.fn];

            for (const fn of fnSet) {
                const result = fn(value);
                if (result === false) {
                    throw new Error("value failed validation error");
                }
                if (typeof result === "string") {
                    throw new Error(result);
                }
            }
        }
    }
};
