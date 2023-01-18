import {ReactNode} from "react";
import classNames from "classnames";
import HeaderSection from "../../components/sections/header-section";
import DisclaimerDocument from "../../components/documents/disclaimer-document";
import CopyrightDocument from "../../components/documents/copyright-document";

export default function DownloadLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <HeaderSection textColor={'white'}/>
            {children}
            <div className={classNames(
                'container mt-auto flex-col text-041b2d dark:text-white'
            )}>
                <DisclaimerDocument/>
                <CopyrightDocument/>
            </div>
        </>
    )
}
