export interface props {
    siteName?: string,
    title?: string;
    description?: string,
    path?: string
}

const defaultProps: props = {
    siteName: '스타 시티즌 유저 한국어 프로젝트',
    title: '',
    description: '스타 시티즌 한국어 패치를 다운로드 받을 수 있는 웹 사이트 입니다. #스타시티즌 #유저한국어 #한패 #한글',
    path: ''
}

export default function HeadTags({
                                     siteName = defaultProps.siteName,
                                     title = defaultProps.title,
                                     path = defaultProps.path,
                                     description = defaultProps.description
}) {
    return (
        <>
            <title>
                {title !== '' ? `${title} - ${siteName}` : siteName}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
            <meta property="og:type" content="website"/>
            <meta property="og:locale" content="ko_KR"/>
            <meta property="og:url" content={'https://sc.galaxyhub.kr' + path}/>
            <meta property="og:site_name" content={siteName}/>
            <meta property="og:image" content={''}/>
            <meta property="og:title" content={title === '' ? siteName : title}/>
            <meta property="og:description" content={description}/>
            <meta name="description" content={description}/>
            <link rel="icon" href="/favicon.ico"/>
        </>
    )
}
