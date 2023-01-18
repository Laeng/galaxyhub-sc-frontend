import {ReactNode} from "react";
import classNames from "classnames";
import DownloadFeatureCardsComponent from "./download/download-feature-cards-component";

interface props {
    children: ReactNode,
    className?: string,
    title?: string,
    description?: string
}

export default function TwoColumnSection({children, className = '', title = '', description = ''}: props) {
    return (
        <section className={classNames(
            'container text-041b2d dark:text-white',
            'md:py-20'
        )}>
            <div className={classNames(
                'grid grid-cols-1 gap-8',
                'md:grid-cols-3'
            )}>
                <div className={classNames(
                    'space-y-2'
                )}>
                    <h3 className={classNames(
                        'font-bold ',
                        'md:text-3xl md:leading-normal',
                    )}>
                        { title }
                    </h3>
                    <p className={classNames(
                        'font-medium text-lg leading-normal break-words',
                    )}>
                        { description }
                    </p>
                </div>
                <div className={classNames(
                    'md:col-span-2',
                    className
                )}>
                    { children }
                </div>
            </div>
        </section>
    );
}
