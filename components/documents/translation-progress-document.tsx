import classNames from "classnames";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export default function TranslationProgressDocument() {
    const data = {
        progress: 75.8,
        message: '현재 번역 프로그램 문제로 잘못된 번역 진행률이 표시되고 있습니다.',
        error: true
    }

    return (
        <>
            <div className={classNames(

            )}>
                <p className={classNames(
                    'font-medium leading-4'
                )}>
                    번역 진행률
                </p>
                <div className={classNames(
                    'flex',
                    'lg:justify-start lg:items-start'
                )}>
                    <p className={classNames(
                        'font-black text-transparent bg-clip-text bg-gradient-to-tr from-indigo-600 to-indigo-600 text-7xl',
                        'md:text-9xl'
                    )}>
                        {`${data.progress}%`}
                    </p>
                    <p className={classNames(
                        'text-yellow-500',
                        {
                            'opacity-0': !data.error,
                            'opacity-100': data.error
                        }
                    )}>
                        <svg className="ml-1 mt-1 h-6 w-6"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 512 512">
                            <path fill="currentColor" d="M506.3 417l-213.3-364C284.8 39 270.4 32 256 32C241.6 32 227.2 39 218.1 53l-213.2 364C-10.59 444.9 9.851 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM52.58 432L255.1 84.8L459.4 432H52.58zM256 337.1c-17.36 0-31.44 14.08-31.44 31.44c0 17.36 14.11 31.44 31.48 31.44s31.4-14.08 31.4-31.44C287.4 351.2 273.4 337.1 256 337.1zM232 184v96C232 293.3 242.8 304 256 304s24-10.75 24-24v-96C280 170.8 269.3 160 256 160S232 170.8 232 184z"/>
                        </svg>
                    </p>
                </div>
            </div>
            <div className={classNames(
                'font-medium mt-2',
                'lg:mt-auto'
            )}>
                <ul>
                    <li>
                        {data.message}
                    </li>
                </ul>
            </div>
        </>
    );
}
