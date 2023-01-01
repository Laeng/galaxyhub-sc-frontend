import {PropsWithChildren} from "react";
import classNames from "classnames";

interface props {
    twoUpperClassName: string,
    oneUpperClassName: string
}
export default function basicContainer({children, twoUpperClassName, oneUpperClassName}: PropsWithChildren<props>) {
    return (
        <div className={classNames("flex justify-center ", twoUpperClassName)}>
            <div className={classNames("max-w-6xl mx-auto py-4 px-4 sm:px-6 md:px-8 w-full", oneUpperClassName)}>
                { children }
            </div>
        </div>
    );
}
