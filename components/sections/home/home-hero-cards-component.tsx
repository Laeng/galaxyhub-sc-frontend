'use client'

import HomeCard from "../../cards/home-card";
import hash from "../../utiles/hash";
import classNames from "classnames";
import LinkButton from "../../bottons/link-button";
import {useState} from "react";

interface props {
    data: infoCard[]
}

export interface infoCard {
    title: string,
    description: string,
    hrefClassName: string,
    href: string,
    target: string
}

export default function HomeHeroCardsComponent({data}: props) {
    const [cards] = useState(data);

    return (
        <>
            {Object.values(cards).map((card, id) => (
                <HomeCard key={hash(card.title)} className={classNames(
                    'lg:col-span-4',
                    'xl:p-8',
                    {
                        'md:row-span-2': id == 3
                    }
                )}>
                    <div className={classNames(
                        'flex flex-col h-28',
                        {
                            'md:h-full': id === 3
                        }
                    )}>
                        <p className={classNames(

                        )}>
                            {card.description}
                        </p>
                        <div className={classNames(
                            'mt-auto mb-2'
                        )}>
                            <LinkButton className={card.hrefClassName} href={card.href} target={card.target}>
                                { card.title }
                            </LinkButton>
                        </div>
                    </div>
                </HomeCard>
            ))}
        </>
    );
}
