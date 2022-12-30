import {RefObject, useEffect, useRef, useState} from "react";
import elementObserver from "../utiles/elementObserver";
import classNames from "classnames";

import CardLink from '../cards/card-link'
import topMenu from "./top-menu";

interface props {
    titleArea: RefObject<HTMLDivElement>
}

export default function middleMenu({titleArea}: props) {
    const [isVisibleTitleArea, setVisibleTitleArea] = useState(false);

    elementObserver(titleArea, setVisibleTitleArea);

    return (
        <div className={classNames({
            'hidden lg:block lg:fixed lg:bottom-4 w-full max-w-6xl mx-auto py-4 px-4 sm:px-6 md:px-8 lg:transition-transform lg:duration-200': true,
            'md:translate-y-0 md:opacity-100': isVisibleTitleArea,
            'translate-y-[100vh] optical-0': !isVisibleTitleArea
        })}>
            <div className="w-full">
                <div className="grid grid-cols-4">
                    <CardLink title="저작권 안내" link="" target="_self" description="영리 활동자(스트리머, 기자, 블로거)는 반드시 읽어주십시오."/>
                    <CardLink title="자주하는 질문" link="" target="_self" description="사용자분들이 자주하시는 질문에 대한 답변을 정리했습니다."/>
                    <CardLink title="다운로드" link="" target="_self" description="유저 한국어 패치를 편리하게 적용할 수 있도록 도와드립니다."/>
                    <CardLink title="디스코드" link="" target="_self" description="문제를 해결하고 스타 시티즌에 대해 함께 이야기할 수 있습니다."/>
                </div>
            </div>
        </div>
    );
}
