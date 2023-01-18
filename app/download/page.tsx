import classNames from "classnames";
import DownloadHeroSection from "../../components/sections/download/download-hero-section";
import DownloadFeatureSection from "../../components/sections/download/download-feature-section";
import DownloadPictureSection from "../../components/sections/download/download-picture-section";
import DownloadAppSection from "../../components/sections/download/download-app-section";
import DownloadCtaSection from "../../components/sections/download/download-cta-section";

export default function Download() {
    return (
        <>
            <DownloadHeroSection/>
            <div className={classNames(
                'md:mt-20'
            )}>
                <DownloadFeatureSection/>
                <DownloadPictureSection/>
                <DownloadAppSection/>
                <DownloadCtaSection/>
            </div>
        </>
    );
}
