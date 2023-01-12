import {ReactNode} from "react";
import classNames from "classnames";
import hash from "../utiles/hash";
import Link from "next/link";

interface props {
    children: ReactNode,
    className: string,
}

export default function RoundedXlCard({ children, className }: props) {
    return (
        <div className={classNames(
            'card rounded-xl',
            className
        )}>
            { children }
        </div>
    );
}
