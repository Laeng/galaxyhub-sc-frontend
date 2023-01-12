import classNames from "classnames";
import hash from "../../utiles/hash";
import Link from "next/link";


interface props {

}

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
                'max-w-6xl mx-auto py-4 px-4 w-full mt-16',
                'sm:px-6 sm:pb-8',
                'md:relative md:mt-44 md:px-8',
                'xl:pb-6'
            )}>
                <div className={classNames(
                    'grid grid-cols-1 gap-4 text-041bed dark:text-white',
                    'md:grid-cols-3 md:p-1 md:gap-1 md:rounded-2xl md:bg-041bed dark:md:bg-white',
                    'lg:grid-cols-12'
                )}>
                    <div className={classNames(
                        'rounded-xl flex flex-col bg-white dark:bg-041bed p-4 border border-gray-300 dark:border-gray-700',
                        'md:col-span-3',
                        'lg:col-span-8 lg:row-span-2 lg:border-0',
                        'xl:p-8'
                    )}>
                        <div className={classNames(
                            ''
                        )}>
                            <p className={classNames(
                                'font-medium leading-4'
                            )}>
                                번역 진행률
                            </p>
                            <div className={classNames(
                                'flex',
                                'lg:justify-start lg:items-start'
                            )}>
                                <p className={classNames(
                                    'font-black text-transparent bg-clip-text bg-gradient-to-tr from-indigo-600 to-indigo-600 text-7xl',
                                    'md:text-9xl'
                                )}>
                                    75.8%
                                </p>
                                <p className={classNames(
                                    'text-yellow-500'
                                )}>
                                    <svg className="ml-1 mt-1 h-6 w-6"
                                         xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M506.3 417l-213.3-364C284.8 39 270.4 32 256 32C241.6 32 227.2 39 218.1 53l-213.2 364C-10.59 444.9 9.851 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM52.58 432L255.1 84.8L459.4 432H52.58zM256 337.1c-17.36 0-31.44 14.08-31.44 31.44c0 17.36 14.11 31.44 31.48 31.44s31.4-14.08 31.4-31.44C287.4 351.2 273.4 337.1 256 337.1zM232 184v96C232 293.3 242.8 304 256 304s24-10.75 24-24v-96C280 170.8 269.3 160 256 160S232 170.8 232 184z"/>
                                    </svg>
                                </p>
                            </div>
                        </div>
                        <div className={classNames(
                            'font-medium mt-2',
                            'lg:mt-auto'
                        )}>
                            <ul>
                                <li className={classNames(
                                    'hidden'
                                )}>
                                    번역 진행률은 게임 업데이트 상황에 따라 변경될 수 있습니다.
                                </li>
                                <li className={classNames(

                                )}>
                                    현재 번역 프로그램 문제로 잘못된 번역 진행률이 표시되고 있습니다.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={classNames(
                        'rounded-xl bg-white dark:bg-041bed p-4 border border-gray-300 dark:border-gray-700',
                        'md:col-span-2',
                        'lg:col-span-4 lg:flex lg:items-center lg:border-0',
                        'xl:p-8'
                    )}>
                        <div className={classNames(
                            'flex flex-col space-y-2',
                            'md:space-y-4',
                            'lg:space-y-8'
                        )}>
                            <div className={classNames(

                            )}>
                                <p className={classNames(
                                    'font-medium leading-4'
                                )}>
                                    현재 버전
                                </p>
                                <p className={classNames(
                                    'font-medium text-2xl'
                                )}>
                                    0.37.2 (for 3.17.4-LIVE)
                                </p>
                            </div>
                            <div className={classNames(

                            )}>
                                <p className={classNames(
                                    'font-medium leading-4'
                                )}>
                                    릴리즈 날짜
                                </p>
                                <p className={classNames(
                                    'font-medium text-2xl'
                                )}>
                                    2022년 12월 20일
                                </p>
                            </div>
                        </div>
                    </div>

                    {Object.values(cards).map((card, id) => (
                        <div className={classNames(
                            'font-medium rounded-xl bg-white dark:bg-041bed p-4 border border-gray-300 dark:border-gray-700',
                            'lg:col-span-4 lg:border-0',
                            'xl:p-8',
                            {
                                'md:row-span-2': id == 3
                            }
                        )} key={hash(card.title)}>
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
                                    {
                                        card.target === '_self'
                                            ? <Link href={card.href} target={card.target} className={card.hrefClassName}>{card.title}</Link>
                                            : <a href={card.href} target={card.target} className={card.hrefClassName}>{card.title}</a>
                                    }
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className={classNames(
                        'rounded-xl flex flex-col bg-white dark:bg-041bed p-4 border border-gray-300 dark:border-gray-700',
                        'md:col-span-3',
                        'lg:col-span-12 lg:row-span-1 lg:p-8 lg:border-0'
                    )}>
                        <div className={classNames(
                            'space-y-2',
                        )}>
                            <p className={classNames(
                                'text-xl font-bold'
                            )}>
                                DISCLAIMER
                            </p>
                            <ul className={classNames(
                                'text-sm font-base text-gray-700 dark:text-gray-400 space-y-1'
                            )}>
                                <li className={classNames(

                                )}>
                                    This site is not endorsed by or affiliated with the Cloud Imperium or Roberts Space Industries group of companies. Star Citizen®, Squadron 42®, Roberts Space Industries®, and Cloud Imperium® are registered trademarks of Cloud Imperium Rights LLC. All rights reserved.
                                </li>
                                <li className={classNames(

                                )}>
                                    본 사이트는 Cloud Imperium 또는 Roberts Space Industries 그룹과 보증 및 제휴 관계가 아닙니다. Star Citizen®, Squadron 42®, Roberts Space Industries® 및 Cloud Imperium®은 Cloud Imperium Rights LLC의 등록 상표이며 모든 권리를 보유하고 있습니다.
                                </li>
                                <li className={classNames(

                                )}>
                                    © 2020 스타 시티즌 유저 한국어 프로젝트 All rights reserved.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}