import BasicContainer from '../containers/basic-container';
import elementObserver from "../utiles/elementObserver";
import {useRef, useState} from "react";
import classNames from "classnames";
import {Tab} from '@headlessui/react';

export default function fleetsIntroduceSection() {
    const [isVisibleFleetsIntroduceArea1, setVisibleFleetsIntroduceArea1] = useState(false);
    const [isVisibleFleetsIntroduceArea2, setVisibleFleetsIntroduceArea2] = useState(false);

    const fleetsIntroduceArea1 = useRef<HTMLDivElement>(null);
    const fleetsIntroduceArea2 = useRef<HTMLDivElement>(null);

    let [fleets] = useState({
        '샤타곤': {
            title: '샤타곤',
            description: '함대원들을 타이어로 보고있는 함대장이 있습니다. 말 안 들으면 짜릅니다. 한글화 패치를 주도하고 있습니다.',
            url: 'https://robertsspaceindustries.com/orgs/NJG',
            image: '/images/logo/sha-min.png'
        },
        'MGM 스타플릿': {
            title: 'MGM 스타플릿',
            description: '반갑습니다, 항해자여! 광대한 이 우주에서 그대를 만나게되어 반갑습니다. 오늘도 어제와 같이 동료가 있어 행운인 하루가 되시길!',
            url: 'https://robertsspaceindustries.com/orgs/MGM',
            image: '/images/logo/msf-min.png'
        },
        '팔코 레스큐': {
            title: '팔코 레스큐',
            description: '상호간의 매너와 협동을 우선시 합니다. 스타시티즌 안정화 단계 전까지 정보 공유 및 중요 행사에 참가하고 이후 구조 작업과 PvE 컨텐츠에 집중할 것입니다.',
            url: 'https://robertsspaceindustries.com/orgs/falco',
            image: '/images/logo/fal-min.png'
        }
    })

    elementObserver(fleetsIntroduceArea1, setVisibleFleetsIntroduceArea1);
    elementObserver(fleetsIntroduceArea2, setVisibleFleetsIntroduceArea2);

    return (
        <section className="bg-blend-multiply bg-black py-16">
            <BasicContainer twoUpperClassName="" oneUpperClassName="">
                <div
                    className={
                        classNames({
                            'flex items-center justify-center text-center w-full transition-opacity	duration-200 delay-200 py-4': true,
                            'opacity-100': isVisibleFleetsIntroduceArea1,
                            'opacity-0': !isVisibleFleetsIntroduceArea1,
                        })
                    }
                    ref={fleetsIntroduceArea1}
                >
                    <div className="">
                        <h2 className="flex flex-row justify-center space-x-2 md:space-x-4 font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-2 md:py-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                            <span>#스타시티즌</span>
                            <span>#한국어</span>
                            <span>#패치</span>
                        </h2>
                        <div className="inline-block lg:flex lg:flex-col md:px-8 space-x-1.5 lg:space-x-0 lg:px-0 py-2 md:py-4 text-gray-100">
                            <span className="space-x-1.5">
                                <span className="underline decoration-rose-600 underline-offset-1 decoration-wavy">'초절정 갓겜'</span>
                                <span>스타 시티즌을 더 많은 분들과 재밌게 즐기고 싶은 마음으로</span>
                                <span>샤타곤</span>
                                <span>·</span>
                                <span>MGM 스타 플릿</span>
                                <span>·</span>
                                <span>팔코 레스큐</span>
                                <span>함대가 모였어요.</span>
                            </span>
                            <span>스타 시티즌에서 한국 분들을 쉽게 만날 수 있을 때까지 열심히 달릴게요!</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center text-center w-full py-4 w-full">
                    <div className="flex justify-center w-full">
                        <div
                            className={
                                classNames({
                                    'transition-opacity	duration-200 delay-200': true,
                                    'opacity-100': isVisibleFleetsIntroduceArea2,
                                    'opacity-0': !isVisibleFleetsIntroduceArea2,
                                })
                            }
                            ref={fleetsIntroduceArea2}
                        >
                            <Tab.Group>
                                <div className="flex justify-center">
                                    <Tab.List className="w-full md:w-2/3 lg:w-1/2 flex space-x-1 rounded-lg bg-blend-multiply bg-white/10 p-1">
                                        {Object.keys(fleets).map((fleet) => (
                                            <Tab
                                                key={fleet}
                                                className={({selected}) =>
                                                    classNames(
                                                        'w-full focus:ring-4 focus:outline-none focus:ring-cyan-800 font-medium rounded-md text-xs md:text-sm text-gray-100 py-2.5 text-center from-blue-500 to-cyan-500',
                                                        selected ? 'bg-gradient-to-r' : 'hover:bg-gradient-to-bl bg-transparent'
                                                    )
                                                }
                                            >
                                                {fleet}
                                            </Tab>
                                        ))}
                                    </Tab.List>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <Tab.Panels className="w-full md:w-3/4 lg:w-2/3">
                                        {Object.values(fleets).map((fleet, id) => (
                                            <Tab.Panel
                                                key={id}
                                                className="flex item-center justify-center"
                                            >
                                                <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full">
                                                    <div className="flex justify-center md:justify-end md:order-last">
                                                        <img className="h-36 w-36 md:h-56 lg:h-72 md:w-56 lg:w-72" src={fleet.image} alt={fleet.title + ' 로고'}/>
                                                    </div>
                                                    <div className="flex flex-col h-full text-center md:text-left md:py-8">
                                                        <h2 className="font-bold text-gray-100 text-2xl md:text-4xl leading-relaxed">
                                                            {fleet.title}
                                                        </h2>
                                                        <p className="text-gray-200 leading-relaxed">
                                                            {fleet.description}
                                                        </p>
                                                        <div className="mt-auto py-4">
                                                            <a
                                                                className="focus:ring-4 focus:outline-none focus:ring-cyan-800 font-medium rounded-full text-xs md:text-sm text-gray-100 py-2.5 px-5 text-center bg-sky-500 hover:bg-sky-600 py-4"
                                                                href={fleet.url}
                                                                target="_blank"
                                                            >
                                                                함대 페이지
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Panel>
                                        ))}
                                    </Tab.Panels>
                                </div>
                            </Tab.Group>
                        </div>
                    </div>
                </div>
            </BasicContainer>
        </section>
    );
}
