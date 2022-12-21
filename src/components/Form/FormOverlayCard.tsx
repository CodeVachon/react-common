import { ClassNames } from "@codevachon/classnames";
import { FC, Fragment, ReactNode } from "react";
import { Transition } from "@headlessui/react";

export const FormOverlayCard: FC<{
    show: boolean;
    className?: string | ClassNames;
    children: ReactNode;
}> = ({ className = "", show = false, children }) => (
    <Transition as={Fragment} show={show}>
        <Transition.Child
            as={Fragment}
            enter="ease-out transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in transition-opacity duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div
                className={new ClassNames([
                    "absolute z-50 rounded-lg",
                    "flex items-center justify-center",
                    "bg-white/25 backdrop-blur-sm",
                    "inset-[-0.30rem]"
                ])
                    .add(className)
                    .list()}
            >
                {children && (
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out transition-opacity duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100  translate-y-0 sm:scale-100"
                        leave="ease-in transition-opacity duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0  translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div
                            className={new ClassNames([
                                "flex items-center space-x-4",
                                "bg-white dark:bg-slate-700",
                                "text-slate-700 dark:text-white",
                                "rounded-lg border bg-opacity-75 py-4 px-6 shadow-xl"
                            ]).list()}
                        >
                            {children}
                        </div>
                    </Transition.Child>
                )}
            </div>
        </Transition.Child>
    </Transition>
);
