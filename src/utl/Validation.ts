export class Validation {
    private value: unknown = "";
    private invertAnswer = false;

    constructor(value: unknown) {
        this.value = value;
    }

    private handleInvert(answer: boolean) {
        if (this.invertAnswer) {
            return !answer;
        } else {
            return answer;
        }
    }

    private _safeIsString() {
        return typeof this.value === "string";
    }

    public isString() {
        return this.handleInvert(this._safeIsString());
    }

    private _safeIsNumber() {
        return typeof this.value === "number";
    }

    public isNumber() {
        return this.handleInvert(this._safeIsNumber());
    }

    private _safeIsBoolean() {
        return typeof this.value === "boolean";
    }

    public isBoolean() {
        return this.handleInvert(this._safeIsBoolean());
    }

    private _safeIsEmpty() {
        if (this._safeIsString()) {
            return String(this.value).length === 0;
        } else {
            return this._safeIsNil();
        }
    }

    public isEmpty() {
        return this.handleInvert(this._safeIsEmpty());
    }

    private _safeIsUndefined() {
        return typeof this.value === "undefined";
    }

    public isUndefined() {
        return this.handleInvert(this._safeIsUndefined());
    }

    private _safeIsNull() {
        return this.value === null;
    }

    public isNull() {
        return this.handleInvert(this._safeIsNull());
    }

    private _safeIsNil() {
        return this._safeIsUndefined() || this._safeIsNull();
    }

    public isNil() {
        return this.handleInvert(this._safeIsNil());
    }

    get not() {
        // Using a Getter allows for us to call this like this
        // `new Validation("abc").not.isString()`
        this.invertAnswer = true;

        return this;
    }

    public matches(pattern: RegExp): boolean;
    public matches(pattern: string, modifiers?: RegExp["flags"]): boolean;
    public matches(pattern: string | RegExp, modifiers?: RegExp["flags"]): boolean {
        if (pattern instanceof RegExp) {
            return this.handleInvert(pattern.test(String(this.value)));
        } else {
            return this.handleInvert(new RegExp(pattern, modifiers).test(String(this.value)));
        }
    }

    public isEmailAddress() {
        if (this._safeIsNil()) {
            return this.handleInvert(false);
        }

        // NOTE: this.handleInvert is handled on `this.matches()`
        // Using it here would cause a double negative
        return this.matches(
            new RegExp("^[a-z][a-z0-9_+\\.\\-]{1,}@[a-z0-9]{3,}\\.[a-z]{2,5}$", "i")
        );
    }

    static check(value: unknown) {
        return new Validation(value);
    }
}
