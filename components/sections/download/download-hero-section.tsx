import classNames from "classnames";
import HeroBackgroundSection from "./hero-background-section";

export default function DownloadHeroSection() {
    const backgroundSrc = '/images/bg-download.jpg'
    const backgroundLayers = [
        '/images/bg-download-0.png',
        '/images/bg-download-1.png'
    ];

    return (
        <HeroBackgroundSection src={backgroundSrc} layers={backgroundLayers}>
            <div className={classNames(
                'container flex-col justify-start min-h-screen mt-16',
                'md:justify-center md:mt-0'
            )}>
                <div>
                    <p>
                        퀀텀 속도처럼 빠르게
                    </p>
                    <p>
                        유저 한국어 패치 적용하기
                    </p>
                </div>
            </div>
        </HeroBackgroundSection>
    );
}
