import './globals.css'
import {ReactNode} from "react";
import classNames from "classnames";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ko">
            <head/>
            <body>
                <main className={classNames(
                    'relative flex flex-col min-h-screen bg-gray-200 dark:bg-black'
                )}>
                    {children}
                </main>
            </body>
        </html>
    )
}
