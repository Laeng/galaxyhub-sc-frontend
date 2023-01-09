import Head from 'next/head'
import Image from 'next/image'

import CardLink from '../components/cards/link-card'
import TopMenu from '../components/menus/top-menu'
import MainHeroSection from '../components/sections/main-hero-section';
import FleetsIntroduceSection from '../components/sections/fleets-introduce-section'
import FeatureIntroduceSection from '../components/sections/feature-introduce-section'

export default function Home() {
    return (
        <>
            <Head>
                <title>스타 시티즌 유저 한국어 프로젝트</title>
                <meta name="description" content="스타 시티즌 한국어 패치를 다운로드 받을 수 있는 웹 사이트 입니다. #스타시티즌 #유저한국어 #한패 #한글"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="relative bg-black">
                <TopMenu isVisibleMiddleMenu={true}/>
                <MainHeroSection/>
                <FleetsIntroduceSection/>
                <FeatureIntroduceSection/>
                <div className="h-[3000px] bg-black"></div>
            </main>
        </>
    )
}
