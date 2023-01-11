import Head from 'next/head'

import MainHeroSection from '../components/sections/home/main-hero-section';
import HeaderMenu from "../components/menus/header-menu";
import {useRouter} from "next/router";

export default function Home() {
    const router = useRouter();

    let head = {
        siteName: '스타 시티즌 유저 한국어 프로젝트',
        title: '',
        description: '스타 시티즌 한국어 패치를 다운로드 받을 수 있는 웹 사이트 입니다. #스타시티즌 #유저한국어 #한패 #한글',
        url: {
            basePath: router.basePath,
            path: router.pathname
        }
    };

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
                <meta property="og:type" content="website"/>
                <meta property="og:locale" content="ko_KR"/>
                <meta property="og:url" content={head.url.basePath + head.url.path}/>
                <meta property="og:site_name" content={head.siteName}/>
                <meta property="og:image" content={''}/>
                <meta property="og:title" content={head.title}/>
                <meta property="og:description" content={head.description}/>
                <meta name="description" content={head.description}/>
                <title>
                    {head.title !== '' ? `${head.title} - ${head.siteName}` : head.siteName}
                </title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="relative min-h-screen bg-gray-200 dark:bg-041bed">
                <HeaderMenu/>
                <MainHeroSection/>
            </main>
        </>
    )
}
