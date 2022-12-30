export default function mainHeroSection() {
    return (
        <div
            className="relative h-screen bg-fixed bg-cover bg-center lg:bg-left-top bg-blend-multiply bg-black/50"
            style={{backgroundImage: "url('/images/bg-main-hero-min.jpg')"}}
        >
            <div className="flex items-center justify-center h-full w-full text-gray-300">
                <div className="flex flex-col justify-center">
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                        <ul className="space-y-4 md:space-y-2 lg:space-y-4">
                            <li>
                                <p className="font-medium">번역 진행률</p>
                                <div className="flex lg:justify-start items-start">
                                    <p className="text-4xl md:text-8xl lg:text-9xl tabular-nums text-gray-100 font-semibold">
                                        75.8%
                                    </p>
                                    <p className="text-yellow-500">
                                        <svg className="ml-1 mt-1 h-4 lg:h-6"
                                             xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M506.3 417l-213.3-364C284.8 39 270.4 32 256 32C241.6 32 227.2 39 218.1 53l-213.2 364C-10.59 444.9 9.851 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM52.58 432L255.1 84.8L459.4 432H52.58zM256 337.1c-17.36 0-31.44 14.08-31.44 31.44c0 17.36 14.11 31.44 31.48 31.44s31.4-14.08 31.4-31.44C287.4 351.2 273.4 337.1 256 337.1zM232 184v96C232 293.3 242.8 304 256 304s24-10.75 24-24v-96C280 170.8 269.3 160 256 160S232 170.8 232 184z"/>
                                        </svg>
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <ul className="space-y-4 md:space-y-1 lg:space-y-4">
                            <li>
                                <p className="font-medium">현재 버전</p>
                                <p className="text-3xl md:text-2xl lg:text-4xl font-medium text-gray-100">
                                    0.37.2 (for 3.17.4-LIVE)
                                </p>
                            </li>
                            <li>
                                <p className="font-medium">릴리즈 날짜</p>
                                <p className="text-3xl md:text-2xl lg:text-4xl font-medium text-gray-100">
                                    2022년 12월 20일
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}
