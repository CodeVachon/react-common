import { Validation } from "./Validation";

describe("Validation", () => {
    describe("isString()", () => {
        test.each(["abc", String("String(abc)")])("return true when '%s' is passed", (value) => {
            expect(new Validation(value).isString()).toBeTrue();
        });
        test.each([123, undefined, null, [], {}, true, false])(
            "return false when '%s' is passed",
            (value) => {
                expect(new Validation(value).isString()).toBeFalse();
            }
        );
    });
    describe("not.isString()", () => {
        test.each(["abc", String("String(abc)")])("return true when '%s' is passed", (value) => {
            expect(new Validation(value).not.isString()).toBeFalse();
        });
        test.each([123, undefined, null, [], {}, true, false])(
            "return false when '%s' is passed",
            (value) => {
                expect(new Validation(value).not.isString()).toBeTrue();
            }
        );
    });

    describe("isNumber()", () => {
        test.each([123, 1.23, 0, -1, 4023, Number("1")])(
            "return true when %d is passed",
            (value) => {
                expect(new Validation(value).isNumber()).toBeTrue();
            }
        );
        test.each(["abc", undefined, null, [], {}, true, false])(
            "return false when '%s' is passed",
            (value) => {
                expect(new Validation(value).isNumber()).toBeFalse();
            }
        );
    });
    describe("not.isNumber()", () => {
        test.each([123, 1.23, 0, -1, 4023, Number("1")])(
            "return true when %d is passed",
            (value) => {
                expect(new Validation(value).not.isNumber()).toBeFalse();
            }
        );
        test.each(["abc", undefined, null, [], {}, true, false])(
            "return false when '%s' is passed",
            (value) => {
                expect(new Validation(value).not.isNumber()).toBeTrue();
            }
        );
    });

    describe("isBoolean()", () => {
        test.each([true, false, Boolean("1")])("return true when %s is passed", (value) => {
            expect(new Validation(value).isBoolean()).toBeTrue();
        });
        test.each(["abc", undefined, null, [], {}, 1, 0])(
            "return false when '%s' is passed",
            (value) => {
                expect(new Validation(value).isBoolean()).toBeFalse();
            }
        );
    });
    describe("not.isBoolean()", () => {
        test.each([true, false, Boolean("1")])("return true when %s is passed", (value) => {
            expect(new Validation(value).not.isBoolean()).toBeFalse();
        });
        test.each(["abc", undefined, null, [], {}, 1, 0])(
            "return false when '%s' is passed",
            (value) => {
                expect(new Validation(value).not.isBoolean()).toBeTrue();
            }
        );
    });

    describe("isEmpty()", () => {
        test.each([undefined, null, ""])("return true when %s is passed", (value) => {
            expect(new Validation(value).isEmpty()).toBeTrue();
        });
        test.each(["abc", true, false, [], {}, 1, 0])(
            "return false when '%s' is passed",
            (value) => {
                expect(new Validation(value).isEmpty()).toBeFalse();
            }
        );
    });
    describe("not.isEmpty()", () => {
        test.each([undefined, null, ""])("return true when %s is passed", (value) => {
            expect(new Validation(value).not.isEmpty()).toBeFalse();
        });
        test.each(["abc", true, false, [], {}, 1, 0])(
            "return false when '%s' is passed",
            (value) => {
                expect(new Validation(value).not.isEmpty()).toBeTrue();
            }
        );
    });

    describe("isUndefined()", () => {
        test.each([undefined])("return true when %s is passed", (value) => {
            expect(new Validation(value).isUndefined()).toBeTrue();
        });
        test.each(["abc", true, false, null, [], {}, 1, 0])(
            "return false when '%s' is passed",
            (value) => {
                expect(new Validation(value).isUndefined()).toBeFalse();
            }
        );
    });
    describe("not.isUndefined()", () => {
        test.each([undefined])("return true when %s is passed", (value) => {
            expect(new Validation(value).not.isUndefined()).toBeFalse();
        });
        test.each(["abc", true, false, null, [], {}, 1, 0])(
            "return false when '%s' is passed",
            (value) => {
                expect(new Validation(value).not.isUndefined()).toBeTrue();
            }
        );
    });

    describe("isNull()", () => {
        test.each([null])("return true when %s is passed", (value) => {
            expect(new Validation(value).isNull()).toBeTrue();
        });
        test.each(["abc", true, false, undefined, [], {}, 1, 0])(
            "return false when '%s' is passed",
            (value) => {
                expect(new Validation(value).isNull()).toBeFalse();
            }
        );
    });
    describe("not.isNull()", () => {
        test.each([null])("return true when %s is passed", (value) => {
            expect(new Validation(value).not.isNull()).toBeFalse();
        });
        test.each(["abc", true, false, undefined, [], {}, 1, 0])(
            "return false when '%s' is passed",
            (value) => {
                expect(new Validation(value).not.isNull()).toBeTrue();
            }
        );
    });

    describe("isNil()", () => {
        test.each([null, undefined])("return true when %s is passed", (value) => {
            expect(new Validation(value).isNil()).toBeTrue();
        });
        test.each(["abc", true, false, [], {}, 1, 0])(
            "return false when '%s' is passed",
            (value) => {
                expect(new Validation(value).isNil()).toBeFalse();
            }
        );
    });
    describe("not.isNil()", () => {
        test.each([null, undefined])("return true when %s is passed", (value) => {
            expect(new Validation(value).not.isNil()).toBeFalse();
        });
        test.each(["abc", true, false, [], {}, 1, 0])(
            "return false when '%s' is passed",
            (value) => {
                expect(new Validation(value).not.isNil()).toBeTrue();
            }
        );
    });

    describe("isEmailAddress()", () => {
        test.each([
            "cvachon@fortyfournorth.ca",
            "cvachon+test1@fortyfournorth.ca",
            "cvachon@44north.dev",
            "example@test.dev"
        ])("is true for '%s'", (emailAddress) => {
            expect(new Validation(emailAddress).isEmailAddress()).toBeTrue();
        });

        test.each([
            "cvachon",
            undefined,
            null,
            "",
            " ",
            "test@",
            "11111@111111.111",
            "user@192.168.0.1",
            "8983@192.168.0.1"
        ])("is false for '%s'", (emailAddress) => {
            expect(new Validation(emailAddress).isEmailAddress()).toBeFalse();
        });
    });
    describe("not.isEmailAddress()", () => {
        test.each([
            "cvachon@fortyfournorth.ca",
            "cvachon+test1@fortyfournorth.ca",
            "cvachon@44north.dev",
            "example@test.dev"
        ])("is true for '%s'", (emailAddress) => {
            expect(new Validation(emailAddress).not.isEmailAddress()).toBeFalse();
        });

        test.each([
            "cvachon",
            undefined,
            null,
            "",
            " ",
            "test@",
            "11111@111111.111",
            "user@192.168.0.1",
            "8983@192.168.0.1"
        ])("is false for '%s'", (emailAddress) => {
            expect(new Validation(emailAddress).not.isEmailAddress()).toBeTrue();
        });
    });

    describe("matches()", () => {
        describe("with a string passed", () => {
            test.each`
                pattern    | value    | expected
                ${"[a-z]"} | ${"abc"} | ${true}
                ${"[a-z]"} | ${123}   | ${false}
            `(
                "returns $expected when $pattern is passed with value '$value'",
                ({ pattern, value, expected }) => {
                    expect(new Validation(value).matches(pattern, "i")).toBe(expected);
                }
            );
        });
        describe("with a RegExp passed", () => {
            test.each`
                pattern                     | value    | expected
                ${/[a-z]/i}                 | ${"abc"} | ${true}
                ${new RegExp("[a-z]", "i")} | ${"abc"} | ${true}
                ${/[a-z]/i}                 | ${123}   | ${false}
                ${new RegExp("[a-z]", "i")} | ${123}   | ${false}
            `(
                "returns $expected when $pattern is passed with value '$value'",
                ({ pattern, value, expected }) => {
                    expect(new Validation(value).matches(pattern, "i")).toBe(expected);
                }
            );
        });
    });

    describe("not.matches()", () => {
        describe("with a string passed", () => {
            test.each`
                pattern    | value    | expected
                ${"[a-z]"} | ${"abc"} | ${false}
                ${"[a-z]"} | ${123}   | ${true}
            `(
                "returns $expected when $pattern is passed with value '$value'",
                ({ pattern, value, expected }) => {
                    expect(new Validation(value).not.matches(pattern, "i")).toBe(expected);
                }
            );
        });
        describe("with a RegExp passed", () => {
            test.each`
                pattern                     | value    | expected
                ${/[a-z]/i}                 | ${"abc"} | ${false}
                ${new RegExp("[a-z]", "i")} | ${"abc"} | ${false}
                ${/[a-z]/i}                 | ${123}   | ${true}
                ${new RegExp("[a-z]", "i")} | ${123}   | ${true}
            `(
                "returns $expected when $pattern is passed with value '$value'",
                ({ pattern, value, expected }) => {
                    expect(new Validation(value).not.matches(pattern, "i")).toBe(expected);
                }
            );
        });
    });

    describe("static members", () => {
        describe("check", () => {
            test("returns an instance of Validation", () => {
                const value = "abc";
                const instance = Validation.check(value);

                expect(instance).toBeInstanceOf(Validation);
            });
        });
    });
});
