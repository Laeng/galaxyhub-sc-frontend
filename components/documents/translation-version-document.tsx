import "server-only";
import classNames from "classnames";

export default function TranslationProgressDocument() {
    const data = {
        version: '0.37.2 (for 3.17.4-LIVE)',
        datetime: '2022년 12월 20일',
    }

    return (
        <div className={classNames(
            'flex flex-col space-y-2',
            'md:space-y-4',
            'lg:space-y-8'
        )}>
            <div className={classNames(

            )}>
                <p className={classNames(
                    'font-medium leading-4'
                )}>
                    현재 버전
                </p>
                <p className={classNames(
                    'font-medium text-2xl'
                )}>
                    { data.version }
                </p>
            </div>
            <div className={classNames(

            )}>
                <p className={classNames(
                    'font-medium leading-4'
                )}>
                    릴리즈 날짜
                </p>
                <p className={classNames(
                    'font-medium text-2xl'
                )}>
                    { data.datetime }
                </p>
            </div>
        </div>
    );
}
