import classNames from "classnames";
import LinkButton from "../../bottons/link-button";

export default function DownloadCtaSection() {
    return (
        <section className={classNames(
            'container md:pt-20 md:pb-8'
        )}>
            <div className={classNames(
                'flex items-center justify-between bg-blue-800 rounded-2xl',
                'md:p-16'
            )}>
                <div className={classNames(
                    'text-white text-2xl font-bold'
                )}>
                    <p className={classNames(
                        'text-rose-400'
                    )}>
                        궁금하신 점이 있으신가요?
                    </p>
                    <p className={classNames(

                    )}>
                        많은 분들이 자주하시는 질문에 대한 답을 준비했어요.
                    </p>
                </div>
                <div>
                    <LinkButton href={''} className={classNames(
                        'btn btn-white rounded-full'
                    )}>
                        바로가기
                    </LinkButton>
                </div>
            </div>
        </section>
    );
}
