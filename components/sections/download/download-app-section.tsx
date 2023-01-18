import DownloadFeatureCardsComponent from "./download-feature-cards-component";
import TwoColumnSection from "../two-column-section";
import classNames from "classnames";
import LinkButton from "../../bottons/link-button";

export default function DownloadAppSection() {
    return (
        <TwoColumnSection
            title={'다운로드'}
            description={'샤타곤 패쳐를 내려 받으면 스타 시티즌 유저 한국어 패치를 설치할 수 있어요.'}
            className={''}
        >
            <ul className={classNames(
                'space-y-4'
            )}>
                <li className={classNames(
                    'space-y-1'
                )}>
                    <p className={classNames(
                        'font-bold',
                        'md:text-3xl'
                    )}>
                        Shatagon Patcher
                    </p>
                    <div className={classNames(
                        'flex items-center space-x-4'
                    )}>
                        <div className={classNames(
                            'flex items-center space-x-1'
                        )}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={classNames(
                                'fill-current h-3 w-3'
                            )}>
                                <path d="M472.8 168.4C525.1 221.4 525.1 306.6 472.8 359.6L360.8 472.9C351.5 482.3 336.3 482.4 326.9 473.1C317.4 463.8 317.4 448.6 326.7 439.1L438.6 325.9C472.5 291.6 472.5 236.4 438.6 202.1L310.9 72.87C301.5 63.44 301.6 48.25 311.1 38.93C320.5 29.61 335.7 29.7 344.1 39.13L472.8 168.4zM144 143.1C144 161.7 129.7 175.1 112 175.1C94.33 175.1 80 161.7 80 143.1C80 126.3 94.33 111.1 112 111.1C129.7 111.1 144 126.3 144 143.1zM410.7 218.7C435.7 243.7 435.7 284.3 410.7 309.3L277.3 442.7C252.3 467.7 211.7 467.7 186.7 442.7L18.75 274.7C6.743 262.7 0 246.5 0 229.5V80C0 53.49 21.49 32 48 32H197.5C214.5 32 230.7 38.74 242.7 50.75L410.7 218.7zM48 79.1V229.5C48 233.7 49.69 237.8 52.69 240.8L220.7 408.8C226.9 415.1 237.1 415.1 243.3 408.8L376.8 275.3C383.1 269.1 383.1 258.9 376.8 252.7L208.8 84.69C205.8 81.69 201.7 79.1 197.5 79.1L48 79.1z"/>
                            </svg>
                            <p className={classNames(
                                ''
                            )}>
                                1.4.2.3
                            </p>
                        </div>
                        <div className={classNames(
                            'flex items-center space-x-1'
                        )}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={classNames(
                                'fill-current h-3 w-3'
                            )}>
                                <path d="M448 304h-53.5l-48 48H448c8.822 0 16 7.178 16 16V448c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16v-80C48 359.2 55.18 352 64 352h101.5l-48-48H64c-35.35 0-64 28.65-64 64V448c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64v-80C512 332.7 483.3 304 448 304zM432 408c0-13.26-10.75-24-24-24S384 394.7 384 408c0 13.25 10.75 24 24 24S432 421.3 432 408zM239 368.1C243.7 373.7 249.8 376 256 376s12.28-2.344 16.97-7.031l136-136c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L280 294.1V24C280 10.75 269.3 0 256 0S232 10.75 232 24v270.1L136.1 199c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L239 368.1z"/>
                            </svg>
                            <p className={classNames(

                            )}>
                                16,323
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <ul className={classNames(
                        'text-sm'
                    )}>
                        <li>
                            영리 사용자(스트리머, 기자)는 반드시
                            <LinkButton href={'/copyright'} className={classNames('text-blue-600 hover:underline font-medium pl-1')}>
                                저작권 안내
                            </LinkButton>
                            를 확인해주세요.
                        </li>
                        <li>
                            게임 개발사에 정식 한국어 지원에 대한 필요성을 뒷받침할 자료로 사용하고자 구글 애널리틱스 서비스를 활용하여 사용한 시간과 사용 국가를 익명으로 수집하고 있음을 알려드려요.
                        </li>
                        <li>
                            본 웹사이트 외에서의 프로그램 다운로드는 바이러스 감염 위험이 있으므로 반드시 본 웹사이트를 통해서 다운로드 해주세요.
                        </li>
                    </ul>
                </li>
                <li className={classNames(
                    'space-x-4 py-2'
                )}>
                    <LinkButton href={'#'} className={classNames(
                        'btn btn-rose rounded-full'
                    )}>
                        사용 방법
                    </LinkButton>
                    <LinkButton href={'#'} className={classNames(
                        'btn btn-indigo bg-[#5865F2] rounded-full'
                    )}>
                        디스코드
                    </LinkButton>
                    <LinkButton href={'#'} className={classNames(
                        'btn btn-blue rounded-full'
                    )}>
                        다운로드
                    </LinkButton>
                </li>
            </ul>
        </TwoColumnSection>
    );
}
