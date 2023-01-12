import classNames from "classnames";
import hash from "../../utiles/hash";
import Link from "next/link";
import RoundedXlCard from "../../cards/rounded-xl-card";
import DisclaimerDocument from "../../documents/disclaimer-document";
import TranslationProgressDocument from "../../documents/translation-progress-document";
import TranslationVersionDocument from "../../documents/translation-version-document";
import LinkButton from "../../bottons/link-button";

export default function MainHeroSection() {

    const cards = [
        {
            'description': '유저 한국어 프로젝트를 도와주신 분들과 제작 참여자를 소개합니다.',
            'title': '바로가기',
            'target': '_self',
            'href': '#',
            'hrefClassName': 'btn btn-blue rounded-full'
        },
        {
            'description': '영리 활동자(스트리머, 기자, 블로거)는 반드시 읽어주십시오.',
            'title': '저작권 안내',
            'target': '_self',
            'href': '#',
            'hrefClassName': 'btn btn-rose rounded-full'
        },
        {
            'description': '사용자분들이 자주하시는 질문에 대한 답변을 정리했습니다.',
            'title': '자주하는 질문',
            'target': '_self',
            'href': '#',
            'hrefClassName': 'btn btn-blue rounded-full'
        },
        {
            'description': '스타 시티즌에 대한 한국어 영상 컨텐츠를 한번에 볼 수 있습니다.',
            'title': 'LIVE',
            'target': '_blank',
            'href': '#',
            'hrefClassName': 'btn btn-rose rounded-full'
        },
        {
            'description': '유저 한국어 패치를 편리하게 적용할 수 있도록 도와드립니다.',
            'title': '다운로드',
            'target': '_self',
            'href': '#',
            'hrefClassName': 'btn btn-blue rounded-full'
        },
        {
            'description': '문제를 해결하고 스타 시티즌에 대해 함께 이야기할 수 있습니다.',
            'title': 'Discord',
            'target': '_blank',
            'href': '#',
            'hrefClassName': 'btn btn-indigo bg-[#5865F2] rounded-full'
        },
    ];

    return (
        <section className={classNames(
            'flex items-center justify-center w-full',
        )}>
            <div className={classNames(
                'container mt-16',
                'sm:pb-8',
                'md:mt-44',
                'xl:pb-6'
            )}>
                <div className={classNames(
                    'grid grid-cols-1 gap-4 text-041bed dark:text-white',
                    'md:grid-cols-3 md:p-1 md:gap-1 md:rounded-2xl md:bg-041bed dark:md:bg-white',
                    'lg:grid-cols-12'
                )}>
                    <RoundedXlCard className={classNames(
                        'flex flex-col',
                        'md:col-span-3',
                        'lg:col-span-8 lg:row-span-2 lg:border-0',
                        'xl:p-8'
                    )}>
                        <TranslationProgressDocument/>
                    </RoundedXlCard>
                    <RoundedXlCard className={classNames(
                        'md:col-span-2',
                        'lg:col-span-4 lg:flex lg:items-center lg:border-0',
                        'xl:p-8'
                    )}>
                        <TranslationVersionDocument/>
                    </RoundedXlCard>

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

                    <RoundedXlCard className={classNames(
                        'md:col-span-3',
                        'lg:col-span-12 lg:row-span-1 lg:p-8 lg:border-0'
                    )}>
                        <DisclaimerDocument/>
                        <p className={classNames(
                            'mt-2 text-sm text-gray-700 dark:text-gray-400'
                        )}>
                            © 2020 스타 시티즌 유저 한국어 프로젝트 All rights reserved.
                        </p>
                    </RoundedXlCard>
                </div>
            </div>
        </section>
    );
}
