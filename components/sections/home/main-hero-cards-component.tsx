'use client'

import RoundedXlCard from "../../cards/rounded-xl-card";
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

export default function MainHeroCardsComponent({data}: props) {
    const [cards] = useState(data);

    return (
        <>
            {Object.values(cards).map((card, id) => (
                <RoundedXlCard key={hash(card.title)} className={classNames(
                    'lg:col-span-4 lg:border-0',
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
                </RoundedXlCard>
            ))}
        </>
    );
}
