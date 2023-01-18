'use client'

import {ReactNode, useState} from "react";
import hash from "../../utiles/hash";
import classNames from "classnames";
import {DownloadFeatureCard} from "../../cards/download-feature-card";
import {infoCard} from "../home/home-hero-cards-component";


interface props {
    data: featureCard[]
}

export interface featureCard {
    title: string,
    description: string,
    icon: ReactNode
}

export default function DownloadFeatureCardsComponent({data}: props) {
    const [cards] = useState(data);

    return (
        <>
            {Object.values(cards).map((card, id) => (
                <DownloadFeatureCard key={hash(card.title)} className={classNames(
                    'flex flex-col items-start'
                )}>
                    <div className={classNames(
                        'h-12 w-12 p-3 rounded-xl bg-blue-600 text-white flex items-center justify-center'
                    )}>
                        { card.icon }
                    </div>
                    <div className={classNames(
                        'space-y-2'
                    )}>
                        <p className={classNames(
                            'font-bold',
                            'md:text-xl dark:md:text-white'
                        )}>
                            { card.title }
                        </p>
                        <p className={classNames(
                            'text-gray-700 dark:text-gray-300'
                        )}>
                            { card.description }
                        </p>
                    </div>
                </DownloadFeatureCard>
            ))}
        </>
    )
}
