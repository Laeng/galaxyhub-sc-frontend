import {ReactNode} from "react";
import classNames from "classnames";

interface props {
    children: ReactNode,
    className: string,
}

export default function HomeCard({ children, className }: props) {
    return (
        <div className={classNames(
            'card card-border p-4 rounded-xl bg-white dark:bg-222222',
            className
        )}>
            { children }
        </div>
    );
}
