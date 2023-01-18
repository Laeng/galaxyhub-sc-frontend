'use client'

import classNames from "classnames";
import Image from "next/image";

export default function DownloadPictureSection() {

    return (
        <section className={classNames(
            'container text-041b2d dark:text-white',
            'md:py-20'
        )}>
            <div className={classNames(
                'flex items-center justify-center'
            )}>
                <Image src={'/images/download/picture-0.jpg'} alt={'샤타곤 패쳐 모습'} width={960} height={520} priority={true} style={{
                    maxWidth: '960px'
                }} className={classNames(
                    'rounded-xl w-full',
                    'md:col-span-9'
                )}/>
            </div>
        </section>
    );
}
