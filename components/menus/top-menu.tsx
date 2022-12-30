import {useRef, useState} from "react";
import classNames from "classnames";
import elementObserver from "../utiles/elementObserver";
import MiddleMenu from "../menus/middle-menu";
import CardLink from "../cards/dark-card-link";
import GalaxyhubLogo from "../logo/galaxyhub-logo"

interface props {
    isVisibleMiddleMenu: boolean
}

export default function topMenu({isVisibleMiddleMenu}: props) {
    const [isVisibleTitleArea, setVisibleTitleArea] = useState(false);
    const [isVisibleNavigation, setVisibleNavigation] = useState(false);
    const titleArea = useRef<HTMLDivElement>(null);

    elementObserver(titleArea, setVisibleTitleArea);

    return (
        <div className="absolute flex justify-center w-full z-10">
            <div className="fixed md:relative max-w-6xl mx-auto py-4 px-4 sm:px-6 md:px-8 w-full bg-white md:bg-transparent z-20 md:z-0">
                <div className="flex justify-between items-center md:block w-full">
                    <div className="md:flex md:items-end md:justify-between md:pt-4" ref={titleArea}>
                        <div className="flex md:block md:font-black md:text-4xl space-x-1 md:space-x-0 md:space-y-0 text-gray-100">
                            <p className="md:leading-none">스타 시티즌</p>
                            <p className="md:leading-none">유저 한국어 프로젝트</p>
                        </div>
                        <a
                            target="_blank"
                            title="갤럭시허브"
                            href="http://galaxyhub.kr"
                            className="hidden md:block mix-blend-multiply group rounded-md border border-gray-400/50 hover:bg-white/10 py-2.5 px-3.5">
                            <p className="font-medium text-xs text-gray-500 mb-0.5">powered by</p>
                            <div className="h-4 text-gray-200">
                                <GalaxyhubLogo/>
                            </div>
                        </a>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="md:hidden" onClick={() => setVisibleNavigation(!isVisibleNavigation)}>
                            <svg className="block h-7 w-7" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M0 64H448v64H0V64zM0 224H448v64H0V224zM448 384v64H0V384H448z"/>
                            </svg>
                            <p className="sr-only">
                                메뉴 열기
                            </p>
                        </button>
                        <div className={classNames({
                            'absolute top-0 left-0 md:py-4 transition-transform md:transition-none duration-200 overflow-hidden z-30': true,
                            'md:relative md:top-auto md:left-auto': isVisibleTitleArea,
                            'md:fixed md:left-auto md:max-w-6xl md:mx-auto py-4 md:px-8 md:w-full': !isVisibleTitleArea,
                            'translate-y-0 opacity-100 w-full md:w-auto': isVisibleNavigation,
                            'translate-y-[100vh] opacity-0 md:opacity-100 md:translate-y-0 w-full': !isVisibleNavigation
                        })}>
                            <div className="md:p-0 md:items-end rounded-t-2xl md:rounded-none border-t md:border-0 border-gray-300 bg-white md:bg-transparent">
                                <div className="md:hidden flex justify-end">
                                    <button className="m-4 md:m-0 ml-auto" onClick={() => setVisibleNavigation(!isVisibleNavigation)}>
                                        <svg className="block h-7 w-7 transition delay-200 opacity-100" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                            <path d="M294.6 166.6L317.3 144 272 98.7l-22.6 22.6L160 210.7 70.6 121.4 48 98.7 2.7 144l22.6 22.6L114.7 256 25.4 345.4 2.7 368 48 413.3l22.6-22.6L160 301.3l89.4 89.4L272 413.3 317.3 368l-22.6-22.6L205.3 256l89.4-89.4z"/>
                                        </svg>
                                        <p className="sr-only">
                                            메뉴 닫기
                                        </p>
                                    </button>
                                </div>
                                <div className="overflow-auto h-screen md:h-auto max-h-[calc(100vh-3.75rem)] md:max-h-fit">
                                    <ul className="navigation md:flex w-full text-center border-b md:border-0 border-gray-300 text-gray-100 font-medium">
                                        <li className="group md:float-left text-lg md:text-base py-2 md:py-0 md:pr-4 border-t md:border-0 border-gray-300">
                                            저작권 안내
                                        </li>
                                        <li className="group md:float-left text-lg md:text-base py-2 md:py-0 md:pr-4 border-t md:border-0 border-gray-300">
                                            자주하는 질문
                                        </li>
                                        <li className="group md:float-left text-lg md:text-base py-2 md:py-0 md:pr-4 border-t md:border-0 border-gray-300">
                                            릴리즈 노트
                                        </li>
                                        <li className="group md:float-left text-lg md:text-base py-2 md:py-0 md:pr-4 border-t md:border-0 border-gray-300">
                                            디스코드
                                        </li>
                                        <li className="group md:float-left text-lg md:text-base py-2 md:py-0 md:pr-4 border-t md:border-0 border-gray-300">
                                            갤러리
                                        </li>
                                        <li className="group md:float-left text-lg md:text-base py-2 md:py-0 md:pr-4 border-t md:border-0 border-gray-300">
                                            연락처
                                        </li>
                                        <li className="group md:float-left text-lg md:text-base py-2 md:py-0 md:pr-4 md:ml-auto border-t md:border-0 border-gray-300">
                                            LIVE
                                        </li>
                                        <li className="group md:float-left text-lg md:text-base py-2 md:py-0 border-t md:border-0 border-gray-300">
                                            다운로드
                                        </li>
                                    </ul>
                                    <div className="flex md:hidden justify-center group my-2">
                                        <div className="py-2.5 px-3.5">
                                            <p className="font-medium text-xs text-gray-500">powered by</p>
                                            <p className="leading-none text-xl font-bold h-5">
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
            { isVisibleMiddleMenu ? <MiddleMenu titleArea={titleArea}/> : ""}
        </div>
    );
}
