import classNames from "classnames";
import CyclingImage from "../../image/cycling-image";
import LinkButton from "../../bottons/link-button";

export default function DownloadHeroSection() {
    const backgroundSrc = '/images/download/hero-bg.jpg'
    const backgroundLayers = [
        '/images/download/hero-bg-0.png',
        '/images/download/hero-bg-1.png'
    ];

    return (
        <section className={classNames(
            'bg-[#18120F]'
        )}>
            <CyclingImage src={backgroundSrc} layers={backgroundLayers}>
                <div className={classNames(
                    'bg-black/20'
                )}>
                    <div className={classNames(
                        'container flex items-center min-h-screen',
                    )}>
                        <div className={classNames(
                            'mx-8',
                            'md:my-36 md:py-7',
                            'lg:px-16'
                        )}>
                            <ul className={classNames(
                                'font-black text-4xl text-white leading-normal',
                                'lg:text-6xl',
                            )}>
                                <li>한국어로 즐기는</li>
                                <li>스타 시티즌</li>
                            </ul>
                            <p className={classNames(
                                'py-4 font-medium text-lg text-gray-100 break-words',
                                'md:w-2/3',
                                'lg:text-xl'
                            )}>
                                샤타곤 패쳐를 통해 스타 시티즌 유저 한국어 패치를 간편하고 빠르게 설치할 수 있습니다.
                                프로그램 사용 전 반드시 사용 방법을 확인해 주세요!

                            </p>
                            <div className={classNames(
                                'flex space-x-4 py-4'
                            )}>
                                <LinkButton href={'#'} className={classNames(
                                    'btn btn-rose rounded-full'
                                )}>
                                    사용 방법
                                </LinkButton>

                                <LinkButton href={'#'} className={classNames(
                                    'btn btn-blue rounded-full'
                                )}>
                                    다운로드
                                </LinkButton>
                            </div>
                        </div>
                    </div>
                </div>
            </CyclingImage>
        </section>
    );
}
