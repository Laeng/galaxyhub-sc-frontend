import BasicContainer from '../containers/basic-container';
import elementObserver from "../utiles/elementObserver";
import classNames from "classnames";
import {useRef, useState} from "react";

export default function featureIntroduceSection() {
    const [isVisibleFeatureIntroduceArea1, setVisibleFeatureIntroduceArea1] = useState(false);
    const [isVisibleFeatureIntroduceArea2, setVisibleFeatureIntroduceArea2] = useState(false);
    const [isVisibleFeatureIntroduceArea3, setVisibleFeatureIntroduceArea3] = useState(false);

    const featureIntroduceArea1 = useRef<HTMLDivElement>(null);
    const featureIntroduceArea2 = useRef<HTMLDivElement>(null);
    const featureIntroduceArea3 = useRef<HTMLDivElement>(null);


    elementObserver(featureIntroduceArea1, setVisibleFeatureIntroduceArea1);
    elementObserver(featureIntroduceArea2, setVisibleFeatureIntroduceArea2);
    elementObserver(featureIntroduceArea3, setVisibleFeatureIntroduceArea3);


    return (
        <section className="bg-black py-16">
            <BasicContainer twoUpperClassName="" oneUpperClassName="overflow-x-hidden">
                <div
                    className="flex items-center justify-center text-center w-full py-4"
                    ref={featureIntroduceArea1}>
                    <div>
                        <div
                            className={
                                classNames({
                                    'transition duration-50 delay-500': true,
                                    'translate-x-0 opacity-100': isVisibleFeatureIntroduceArea1,
                                    'translate-x-full opacity-0': !isVisibleFeatureIntroduceArea1,
                                })
                            }
                        >
                            <h2 className="flex flex-row justify-center space-x-2 md:space-x-4 font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-2 md:py-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                                퀀텀 속도로 적용하기
                            </h2>
                        </div>
                        <div
                            className={
                                classNames({
                                    'transition-opacity duration-200 delay-700': true,
                                    'opacity-100': isVisibleFeatureIntroduceArea1,
                                    'opacity-0': !isVisibleFeatureIntroduceArea1,
                                })
                            }
                        >
                            <div className="md:px-8 space-x-1.5 lg:space-x-0 lg:px-0 py-2 md:py-4 text-gray-100">
                                스타 시티즌의 퀀텀 트래블처럼 <span className="underline underline-offset-1 decoration-wavy decoration-purple-500">빠르고 간편하게</span> 유저 한국어 패치를 적용할 수 있어요!
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center text-center py-4">
                    <div className="space-y-8 w-full">
                        <div
                            className="overflow-x-hidden rounded-2xl hover:transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-500/50"
                            ref={featureIntroduceArea2}
                        >
                            <div
                                className={classNames({
                                    'grid grid-cols-1 lg:grid-cols-2 divide-x divide-white/10 bg-blend-multiply bg-white/10 rounded-2xl border border-white/10 w-full': true,
                                    'transition duration-400 delay-500': true,
                                    'translate-x-0 duration-100': isVisibleFeatureIntroduceArea2,
                                    '-translate-x-full opacity-0': !isVisibleFeatureIntroduceArea2
                                })}
                            >
                                <div className="p-16 flex flex-col">
                                    <div className="text-left space-y-2">
                                        <div className="font-black text-5xl text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-pink-600">
                                            <h3>Shatagon</h3>
                                            <h3>Patcher</h3>
                                        </div>
                                        <p className="font-bold text-lg text-gray-100">스타 시티즌 유저 한국어 패치 설치 프로그램</p>
                                    </div>
                                    <div className="mt-auto text-left flex space-x-4">
                                        <a
                                            className="focus:ring-4 focus:outline-none focus:ring-pink-800 font-medium rounded-full text-xs md:text-sm text-gray-100 py-2.5 px-5 text-center bg-pink-600 hover:bg-pink-700 py-4"
                                            href="#"
                                            target="_blank"
                                        >
                                            다운로드
                                        </a>
                                        <a
                                            className="focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-full text-xs md:text-sm text-black py-2.5 px-5 text-center bg-white hover:bg-gray-200 py-4"
                                            href="#"
                                            target="_blank"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                                <div className="py-8 px-16">
                                    <ul className="divide-y divide-white/10 text-gray-100 text-left">
                                        <li className="py-8">
                                            <h3 className="text-white/50">패치 자동화</h3>
                                            <p>한국어 패치 파일를 간편하게 적용할 수 있어요.</p>
                                        </li>
                                        <li className="py-8">
                                            <h3 className="text-white/50">포터블 프로그램</h3>
                                            <p>프로그램을 설치할 필요가 없어요. 압축을 풀고 바로 실행하세요.</p>
                                        </li>
                                        <li className="py-8">
                                            <h3 className="text-white/50">오픈 소스</h3>
                                            <p>개발자이신가요? 어서오세요! 여러분의 기여를 환영합니다.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div
                            className="overflow-x-hidden rounded-2xl hover:transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/50"
                            ref={featureIntroduceArea3}
                        >
                            <div
                                className={classNames({
                                    'grid grid-cols-1 lg:grid-cols-2 divide-x divide-white/10 bg-blend-multiply bg-white/10 rounded-2xl border border-white/10 w-full': true,
                                    'transition duration-400 delay-500': true,
                                    'translate-x-0 duration-100': isVisibleFeatureIntroduceArea3,
                                    'translate-x-full opacity-0': !isVisibleFeatureIntroduceArea3
                                })}
                            >
                                <div className="p-16 flex flex-col">
                                    <div className="text-left space-y-2">
                                        <div className="font-black text-5xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-indigo-600">
                                            <h3>StarCitizenKR</h3>
                                            <h3>Discord</h3>
                                        </div>
                                        <p className="font-bold text-lg text-gray-100">스타 시티즌과 유저 한국어 패치에 대해 소통 할 수 있는 곳</p>
                                    </div>
                                    <div className="mt-auto text-left flex space-x-4">
                                        <a
                                            className="focus:ring-4 focus:outline-none focus:ring-indigo-800 font-medium rounded-full text-xs md:text-sm text-gray-100 py-2.5 px-5 text-center bg-indigo-600 hover:bg-indigo-700 py-4"
                                            href="#"
                                            target="_blank"
                                        >
                                            Discord
                                        </a>
                                    </div>
                                </div>
                                <div className="py-8 px-16">
                                    <ul className="divide-y divide-white/10 text-gray-100 text-left">
                                        <li className="py-8">
                                            <h3 className="text-white/50">오역, 오탈자 제보</h3>
                                            <p>유저 한국어 패치 문제를 발견했다면 알려주세요.</p>
                                        </li>
                                        <li className="py-8">
                                            <h3 className="text-white/50">스타 시티즌 소통</h3>
                                            <p>스타 시티즌 문제나 궁금한 것을 함께 해결할 수 있어요.</p>
                                        </li>
                                        <li className="py-8">
                                            <h3 className="text-white/50">암호 키 확인하기</h3>
                                            <p>한국어 패치 설치에 필요한 암호 키를 확인할 수 있어요.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BasicContainer>
        </section>
    )
}
