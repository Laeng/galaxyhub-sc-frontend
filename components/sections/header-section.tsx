'use client';

import classNames from "classnames";
import {useRef, useState} from "react";

import GalaxyhubLogo from "../brands/galaxyhub-logo";
import ElementObserver from "../utiles/elementObserver";
import Link from "next/link";
import hash from "../utiles/hash";

export interface props {

}

export default function HeaderSection({}: props) {
    const [isVisibleTitleArea, setVisibleTitleArea] = useState(true);
    const [isVisibleNavigation, setVisibleNavigation] = useState(false);
    const headerMenuTitle = useRef<HTMLDivElement>(null);

    ElementObserver.isIntersecting(headerMenuTitle, setVisibleTitleArea);

    let menus = [
        {
            title: '저작권 안내',
            href: '',
            className: 'md:hover:text-blue-700 dark:md:hover:text-blue-500'
        },
        {
            title: '자주하는 질문',
            href: '',
            className: 'md:hover:text-blue-700 dark:md:hover:text-blue-500'
        },
        {
            title: '릴리즈 노트',
            href: '',
            className: 'md:hover:text-blue-700 dark:md:hover:text-blue-500'
        },
        {
            title: '갤러리',
            href: '',
            className: 'md:hover:text-blue-700 dark:md:hover:text-blue-500'
        },
        {
            title: '디스코드',
            href: '',
            className: 'md:hover:text-blue-700 dark:md:hover:text-blue-500'
        },
        {
            title: '연락처',
            href: '',
            className: 'md:hover:text-blue-700 dark:md:hover:text-blue-500'
        },
        {
            title: 'LIVE',
            href: '',
            className: 'md:float-left md:flex md:items-center md:justify-center md:btn md:btn-rose md:rounded-full md:h-9'
        },
        {
            title: '다운로드',
            href: '',
            className: 'md:float-left md:flex md:items-center md:justify-center md:btn md:btn-blue md:rounded-full md:h-9'
        }
    ];

    return (
        <section className="absolute flex justify-center w-full z-10">
            <div className={classNames(
                'fixed max-w-6xl mx-auto py-4 px-4 w-full bg-041bed border-b border-gray-800 z-20',
                'sm:px-6',
                'md:px-8 md:relative md:bg-transparent md:dark:bg-transparent md:border-0 md:z-0 '
            )}>
                <div className={classNames(
                    'flex justify-between items-center w-full',
                    'md:block'
                )}>
                    <div className={classNames(
                        'md:flex md:items-end md:justify-between md:pt-4'
                    )} ref={headerMenuTitle}>
                        <div className={classNames(
                            'flex space-x-1 text-white font-medium text-lg',
                            'md:block md:space-x-0 md:text-041bed md:font-black md:text-4xl md:space-y-0 dark:md:text-white'
                        )}>
                            <p className={classNames(
                                'md:leading-none'
                            )}>
                                스타 시티즌
                            </p>
                            <p className={classNames(
                                'md:leading-none'
                            )}>
                                유저 한국어 프로젝트
                            </p>
                        </div>
                        <a className={classNames(
                            'hidden mix-blend-multiply group rounded-md border border-gray-400/50 hover:bg-white/10 py-2.5 px-3.5 dark:md:text-white',
                            'md:block dark:md:text-white'
                        )} target="_blank" href="http://galaxyhub.kr">
                            <p className={classNames(
                                'font-medium text-xs mb-0.5'
                            )}>
                                powered by
                            </p>
                            <div className={classNames(
                                'h-4'
                            )}>
                                <GalaxyhubLogo/>
                            </div>
                        </a>
                    </div>
                    <div className={classNames(
                        'flex justify-center items-center'
                    )}>
                        <button className={classNames(
                            'md:hidden'
                        )} onClick={() => setVisibleNavigation(!isVisibleNavigation)}>
                            <svg className={classNames(
                                'block h-7 w-7 fill-current text-white'
                            )} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M0 64H448v64H0V64zM0 224H448v64H0V224zM448 384v64H0V384H448z"/>
                            </svg>
                            <p className={classNames(
                                'sr-only'
                            )}>
                                메뉴 열기
                            </p>
                        </button>
                        <div className={classNames(
                            'absolute top-0 left-0 transition-transform duration-200 overflow-hidden z-30',
                            'md:py-4 md:transition-none md:w-full',
                            {
                                'md:relative md:top-auto md:left-auto': isVisibleTitleArea,

                                'py-4': !isVisibleTitleArea,
                                'md:fixed md:left-auto md:bg-gray-200 md:dark:bg-041bed md:border-b md:border-gray-300 md:dark:border-gray-700': !isVisibleTitleArea,

                                'translate-y-0 opacity-100 w-full': isVisibleNavigation,
                                'md:w-auto': isVisibleNavigation,

                                'translate-y-[100vh] opacity-0 w-full': !isVisibleNavigation,
                                'md:opacity-100 md:translate-y-0': !isVisibleNavigation
                            }
                        )}>
                            <div className={classNames(
                                'rounded-t-2xl border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-041bed',
                                'md:p-0 md:items-end md:rounded-none md:border-0 md:bg-transparent',
                                {
                                    'md:max-w-6xl md:mx-auto md:px-8': !isVisibleTitleArea
                                }
                            )}>
                                <div className={classNames(
                                    'flex justify-end',
                                    'md:hidden'
                                )}>
                                    <button className={classNames(
                                        'm-4 md:m-0 ml-auto'
                                    )} onClick={() => setVisibleNavigation(!isVisibleNavigation)}>
                                        <svg className={classNames(
                                            'block h-7 w-7 transition delay-200 opacity-100 fill-current dark:text-white'
                                        )} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                            <path d="M294.6 166.6L317.3 144 272 98.7l-22.6 22.6L160 210.7 70.6 121.4 48 98.7 2.7 144l22.6 22.6L114.7 256 25.4 345.4 2.7 368 48 413.3l22.6-22.6L160 301.3l89.4 89.4L272 413.3 317.3 368l-22.6-22.6L205.3 256l89.4-89.4z"/>
                                        </svg>
                                        <p className={classNames(
                                            'sr-only'
                                        )}>
                                            메뉴 닫기
                                        </p>
                                    </button>
                                </div>
                                <div className={classNames(
                                    'overflow-auto h-screen max-h-[calc(100vh-3.75rem)',
                                    'md:h-auto md:max-h-fit'
                                )}>
                                    <ul className={classNames(
                                        'navigation w-full text-center border-b border-gray-300 dark:border-gray-700 font-medium',
                                        'md:flex md:items-center md:border-0 dark:md:text-white'
                                    )}>
                                        {Object.values(menus).map((menu, id) => (
                                            <li className={classNames(
                                                'flex group text-lg py-2 border-t md:border-0 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white',
                                                'md:block md:float-left md:text-base md:hover:bg-transparent',
                                                {
                                                    'md:pr-4': id !== menus.length - 1,
                                                    'ml-auto': id === menus.length - 2
                                                }
                                            )} key={hash(menu.title)}>
                                                <Link className={classNames(
                                                    'w-full text-center',
                                                    menu.className
                                                )} href={menu.href}>
                                                    {menu.title}
                                                </Link>
                                            </li>
                                        ))}

                                    </ul>
                                    <div className={classNames(
                                        'flex justify-center group my-2 dark:text-gray-500',
                                        'md:hidden'
                                    )}>
                                        <div className={classNames(
                                            'py-2.5 px-3.5'
                                        )}>
                                            <p className={classNames(
                                                'font-medium text-xs'
                                            )}>
                                                powered by
                                            </p>
                                            <p className={classNames(
                                                'leading-none text-xl font-bold h-5'
                                            )}>
                                                Galaxyhub
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
