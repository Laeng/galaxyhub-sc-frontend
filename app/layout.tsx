import './globals.css'
import {ReactNode} from "react";
import HeaderSection from "../components/sections/header-section";
import classNames from "classnames";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ko">
            <head/>
            <body>
                <main className={classNames(
                    'relative min-h-screen bg-gray-200 dark:bg-041bed'
                )}>
                    <HeaderSection/>
                    {children}
                </main>
            </body>
        </html>
    )
}
