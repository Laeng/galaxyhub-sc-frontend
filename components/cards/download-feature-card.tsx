import {ReactNode} from "react";
import classNames from "classnames";

interface cardProps {
    children: ReactNode,
    className: string,
}

export function DownloadFeatureCard({children, className}: cardProps) {
    return (
        <div className={classNames(
            'card space-y-4',
            className
        )}>
            {children}
        </div>
    );
}
