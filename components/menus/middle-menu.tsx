import {RefObject, useEffect, useRef, useState} from "react";
import elementObserver from "../utiles/elementObserver";
import classNames from "classnames";

import LinkCard from '../cards/link-card'

import type {link as linkCardLink} from '../cards/link-card'
import hash from "../utiles/hash";
import Link from "next/link";

interface props {
    titleArea: RefObject<HTMLDivElement>
}

export default function middleMenu({titleArea}: props) {
    const [isVisibleTitleArea, setVisibleTitleArea] = useState(false);

    elementObserver(titleArea, setVisibleTitleArea);

    let [links] = useState([
        {
            title: '저작권 안내',
            description: '영리 활동자(스트리머, 기자, 블로거)는 반드시 읽어주십시오.',
            url: '',
            target: '_self',
            isLink: true
        },
        {
            title: '자주하는 질문',
            description: '사용자분들이 자주하시는 질문에 대한 답변을 정리했습니다.',
            url: '',
            target: '_self',
            isLink: true
        },
        {
            title: '다운로드',
            description: '유저 한국어 패치를 편리하게 적용할 수 있도록 도와드립니다.',
            url: '',
            target: '_self',
            isLink: true
        },
        {
            title: '디스코드',
            description: '문제를 해결하고 스타 시티즌에 대해 함께 이야기할 수 있습니다.',
            url: '',
            target: '_self',
            isLink: true
        }
    ])

    return (
        <div className={classNames({
            'hidden lg:block lg:fixed lg:bottom-4 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:transition-transform lg:duration-200': true,
            'md:translate-y-0 md:opacity-100': isVisibleTitleArea,
            'translate-y-[100vh] optical-0': !isVisibleTitleArea
        })}>
            <div className="w-full">
                <div className="grid grid-cols-4 border border-gray-400/50 rounded-md divide-x divide-gray-400/50">
                    {Object.values(links).map((link, id) => (
                        <LinkCard
                            key={hash(link.title)}
                            link={link as linkCardLink}
                            styles={{
                                card: {
                                    'mix-blend-multiply hover:bg-white/10 transition-color duration-200': true,
                                    'rounded-l-md': id == 0,
                                    'rounded-r-md': id == (links.length -1)
                                },
                                header: 'text-gray-100',
                                body: 'text-gray-300'
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <a className="flex items-center text-gray-200 text-sm" href={'/#introduce'}>
                    스타 시티즌 유저 한국어 프로젝트 소개
                    <span className="animate-bounce ml-2">
                        <svg className="fill-current h-3 h-3"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M214.6 454.6L192 477.3l-22.6-22.6-144-144L2.7 288 48 242.8l22.6 22.6L160 354.8 160 64l0-32 64 0 0 32 0 290.7 89.4-89.4L336 242.8 381.3 288l-22.6 22.6-144 144z"/>
                        </svg>
                    </span>
                </a>
            </div>
        </div>
    );
}
