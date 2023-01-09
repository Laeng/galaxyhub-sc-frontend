import BasicContainer from '../containers/basic-container';
import elementObserver from "../utiles/elementObserver";
import classNames from "classnames";
import {useRef, useState} from "react";

import FeatureCard from '../cards/feature-card'
import GradientHeading from '../heading/gradient-heading'

import hash from "../utiles/hash";

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
        <section className="py-16 lg:min-h-screen lg:flex lg:items-center lg:justify-center">
            <BasicContainer twoUpperClassName="" oneUpperClassName="overflow-x-hidden">
                <div
                    className="flex items-center justify-center text-center w-full py-4"
                    ref={featureIntroduceArea1}>
                    <div>
                        <div
                            className={
                                classNames({
                                    'transition duration-50 delay-50': true,
                                    'translate-x-0 opacity-100': isVisibleFeatureIntroduceArea1,
                                    'translate-x-full opacity-0': !isVisibleFeatureIntroduceArea1,
                                })
                            }
                        >
                            <GradientHeading title="퀀텀 속도로 적용하기" className="from-indigo-500 to-pink-500"/>
                        </div>
                        <div
                            className={
                                classNames({
                                    'transition-opacity duration-200 delay-100': true,
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
                            <FeatureCard
                                contents={{
                                    title: 'Shatagon Patcher',
                                    description: '스타 시티즌 유저 한국어 패치 설치 프로그램',
                                    links: [
                                        {
                                            title: '다운로드',
                                            url: '#',
                                            target: '_blank',
                                            style: 'text-gray-100 bg-pink-600 hover:bg-pink-700 focus:ring-pink-800',
                                            isLink: true
                                        },
                                        {
                                            title: '사용법',
                                            url: '#',
                                            target: '_blank',
                                            style: 'text-gray-100 bg-pink-600 hover:bg-pink-700 focus:ring-pink-800',
                                            isLink: true
                                        },
                                        {
                                            title: 'GitHub',
                                            url: 'https://github.com/laeng',
                                            target: '_blank',
                                            style: 'focus:ring-gray-500 bg-white hover:bg-gray-200',
                                            isLink: false
                                        }
                                    ],
                                    features: [
                                        {
                                            title: '패치 자동화',
                                            description: '한국어 패치 파일를 간편하게 적용할 수 있어요.'
                                        },
                                        {
                                            title: '포터블 프로그램',
                                            description: '프로그램을 설치할 필요가 없어요. 압축을 풀고 바로 실행하세요.'
                                        },
                                        {
                                            title: '오픈 소스',
                                            description: '개발자이신가요? 어서오세요! 여러분의 기여를 환영합니다.'
                                        }
                                    ]
                                }}

                                styles={{
                                    card: classNames({
                                        'transition duration-400 delay-200': true,
                                        'translate-x-0 duration-100': isVisibleFeatureIntroduceArea2,
                                        '-translate-x-full opacity-0': !isVisibleFeatureIntroduceArea2
                                    }),
                                    title: 'text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-pink-600'
                                }}

                                key={hash('feature one')}
                            />
                        </div>

                        <div
                            className="overflow-x-hidden rounded-2xl hover:transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/50"
                            ref={featureIntroduceArea3}
                        >
                            <FeatureCard
                                contents={{
                                    title: 'StarCitizenKR Discord',
                                    description: '스타 시티즌과 유저 한국어 패치에 대해 소통 할 수 있는 곳',
                                    links: [
                                        {
                                            title: 'Discord',
                                            url: 'https://discord.com',
                                            target: '_blank',
                                            style: 'text-gray-100 focus:ring-indigo-800 bg-indigo-600 hover:bg-indigo-700',
                                            isLink: false
                                        }
                                    ],
                                    features: [
                                        {
                                            title: '오역, 오탈자 제보',
                                            description: '유저 한국어 패치 문제를 발견했다면 알려주세요.'
                                        },
                                        {
                                            title: '스타 시티즌 소통',
                                            description: '스타 시티즌 문제나 궁금한 것을 함께 해결할 수 있어요.'
                                        },
                                        {
                                            title: '암호 키 확인하기',
                                            description: '한국어 패치 설치에 필요한 암호 키를 확인할 수 있어요.'
                                        }
                                    ]
                                }}

                                styles={{
                                    card: classNames({
                                        'transition duration-400 delay-500': true,
                                        'translate-x-0 duration-100': isVisibleFeatureIntroduceArea3,
                                        'translate-x-full opacity-0': !isVisibleFeatureIntroduceArea3
                                    }),
                                    title: 'text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-indigo-600'
                                }}

                                key={hash('feature two')}
                            />
                        </div>
                    </div>
                </div>
            </BasicContainer>
        </section>
    )
}
