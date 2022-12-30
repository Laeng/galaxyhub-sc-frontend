import Head from 'next/head'
import Image from 'next/image'

import CardLink from '../components/cards/card-link'
import TopMenu from '../components/menus/top-menu'
import MiddleMenu from '../components/menus/middle-menu'
import {RefObject} from "react";

export default function Home() {
    return (
        <>
            <Head>
                <title>스타 시티즌 유저 한국어 프로젝트</title>
                <meta name="description" content="스타 시티즌 한국어 패치를 다운로드 받을 수 있는 웹 사이트 입니다. #스타시티즌 #유저한국어 #한패 #한글"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="relative">
                <TopMenu isVisibleMiddleMenu={true}/>

                <div className="max-w-6xl mx-auto py-4 px-4 sm:px-6 lg:px-8">

                </div>
                <div className="h-[3000px]"></div>
            </main>
        </>
    )
}
