import { ClassNames } from "@codevachon/classnames";
import React, { FC, ReactNode, useContext } from "react";
import { Button, ButtonType } from "../Button";
import { IconSpinner } from "../Icons";
import { Stack } from "../Stack";
import { FormContext } from "../../context/FormContext/FormContext";
import { PageTitle } from "../Typography";
import { FormOverlayCard } from "./FormOverlayCard";

export interface IFormBlockProps {
    /**
     * Label on the Cancel Button
     */
    cancelLabel?: string;
    /**
     * The Type of the Cancel Button
     */
    cancelButtonType?: ButtonType;
    /**
     * Additional Classes to be Applied to the Form
     */
    className?: string | ClassNames;
    /**
     * Text under the Title
     *
     * **NOTE** only used when a `title` is passed
     */
    deck?: string;
    /**
     * Trigger a Disabled State on the From
     */
    disabled?: boolean;
    /**
     * Text Displayed when the Form is Disabled
     *
     * **NOTE** trigged by the `disabled` flag
     */
    formDisabledText?: string;
    /**
     * Text Displayed when the Form is in a Loading State
     *
     * **NOTE** triggered by the `isLoading` flag
     */
    formIsLoadingText?: string;
    /**
     * Text Displayed when the Form is in a Submitting State
     *
     * **NOTE** triggered by the Save/Submit Button
     */
    formSubmittingText?: string;
    /**
     * Toggle the Visibility of the Cancel Button
     *
     * **NOTE** if a onCancel function is found, this is true by default
     */
    hideCancel?: boolean;
    /**
     * Toggle the Visibility of the Reset Button
     */
    hideReset?: boolean;
    /**
     * Toggle Special Classes for when the Form is in a Modal/Flyout
     */
    inModal?: boolean;
    /**
     * Set the Form into a Loading State
     */
    isLoading?: boolean;
    /**
     * Label on the Reset Button
     */
    resetLabel?: string;
    /**
     * The Type of the Reset Button
     */
    resetButtonType?: ButtonType;
    /**
     * Label on the Save/Submit Button
     */
    saveLabel?: string;
    /**
     * the Type of the Save Button
     */
    saveButtonType?: ButtonType;
    /**
     * Title used on the Form
     */
    title?: string;
    /**
     *
     */
    children?: ReactNode;
}
export const FormBlock: FC<IFormBlockProps> = ({
    cancelLabel = "Cancel",
    cancelButtonType = "danger",
    children,
    className = "",
    deck,
    disabled = false,
    formDisabledText = "",
    formIsLoadingText = "Loading...",
    formSubmittingText = "Working...",
    hideCancel = false,
    hideReset = false,
    inModal = false,
    isLoading = false,
    resetLabel = "Reset",
    resetButtonType = "secondary",
    saveLabel = "Save",
    saveButtonType = "primary",
    title
}) => {
    const { submitForm, cancelForm, resetForm, isWorking, isDirty } = useContext(FormContext);

    const handleSubmit = (event?: React.FormEvent | React.MouseEvent) => {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (disabled) {
            return;
        }

        submitForm();
    };

    const handleCancel = () => {
        if (hideCancel) {
            return;
        }

        if (disabled) {
            return;
        }

        cancelForm();
    };

    const handleReset = () => {
        if (hideReset) {
            return;
        }

        if (disabled) {
            return;
        }

        resetForm();
    };

    const disableSaveBtn = isWorking || !isDirty;

    if (String(formSubmittingText).length === 0) {
        formSubmittingText = "Working...";
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={new ClassNames(["relative z-0"]).add(className).list()}
        >
            <Stack
                className={new ClassNames(["min-h-0 flex-1"]).list()}
                spacing={inModal ? "none" : "default"}
            >
                {title && title.length && (
                    <div
                        className={new ClassNames([""])
                            .add({ "border-b py-6 px-4": inModal })
                            .list()}
                    >
                        <PageTitle size="h4">{title}</PageTitle>
                        {deck && deck.length > 0 && <p>{deck}</p>}
                    </div>
                )}
                {inModal ? (
                    <div
                        className={new ClassNames([
                            "flex min-h-0 flex-1 flex-col overflow-y-scroll py-6 px-4"
                        ]).list()}
                    >
                        {children}
                    </div>
                ) : (
                    children
                )}

                <div
                    className={new ClassNames(["flex justify-between space-x-8"])
                        .add({ "border-t py-6 px-4": inModal })
                        .list()}
                >
                    <div className={new ClassNames(["flex space-x-2"]).list()}>
                        <Button
                            onClick={handleSubmit}
                            disabled={disableSaveBtn}
                            type={saveButtonType}
                        >
                            {saveLabel}
                        </Button>
                        {!hideCancel && (
                            <Button
                                onClick={handleCancel}
                                disabled={isWorking}
                                type={cancelButtonType}
                            >
                                {cancelLabel}
                            </Button>
                        )}
                    </div>
                    {!hideReset && (
                        <div>
                            <Button
                                onClick={handleReset}
                                disabled={isWorking || !isDirty}
                                type={resetButtonType}
                            >
                                {resetLabel}
                            </Button>
                        </div>
                    )}
                </div>
            </Stack>

            <FormOverlayCard show={isLoading}>
                <IconSpinner />
                {String(formIsLoadingText).length > 0 && (
                    <p className={new ClassNames(["text-lg"]).list()}>{formIsLoadingText}</p>
                )}
            </FormOverlayCard>

            <FormOverlayCard show={isWorking}>
                <IconSpinner />
                {String(formIsLoadingText).length > 0 && (
                    <p className={new ClassNames(["text-lg"]).list()}>{formSubmittingText}</p>
                )}
            </FormOverlayCard>

            <FormOverlayCard
                show={disabled}
                className={new ClassNames(["cursor-not-allowed"]).list()}
            >
                {String(formDisabledText).length > 0 ? (
                    <p className={new ClassNames(["text-lg"]).list()}>{formDisabledText}</p>
                ) : null}
            </FormOverlayCard>
        </form>
    );
};
