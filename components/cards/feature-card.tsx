import classNames from "classnames";
import Link from "next/link";

interface props {
    contents: {
        title: string,
        description: string,
        links: link[]
        features: feature[]
    },
    styles?: styles
}

interface link {
    title: string,
    url: string,
    target: '_blank'|'_self'|'_parent'|'_top',
    style: string,
    isLink: boolean
}

interface feature {
    title: string,
    description: string
}

interface styles {
    card: string
    title: string
}

const defaultStyle = {
    card: '',
    title: '',
}

export default function featureCard({contents, styles = defaultStyle}: props) {
    return (
        <div
            className={classNames(
                'grid grid-cols-1 lg:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-blend-multiply bg-white/10 rounded-2xl border border-white/10 w-full',
                styles?.card
            )}
        >
            <div className="p-16 flex flex-col">
                <div className="text-left space-y-2">
                    <div className={classNames(
                        'font-black text-3xl md:text-5xl leading-none md:leading-normal whitespace-pre-wrap',
                        styles?.title
                    )}>
                        {contents.title}
                    </div>
                    <p className="font-bold text-lg text-gray-100">
                        {contents.description}
                    </p>
                </div>
                <div className="mt-8 md:mt-auto text-left flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                    {Object.values(contents.links).map(({title, url, target, style, isLink}: link) => (
                        !isLink
                            ? <a
                                className={classNames(
                                    'focus:ring-4 focus:outline-none font-medium rounded-full text-xs md:text-sm py-2.5 px-5 text-center py-4',
                                    style
                                )}
                                href={url}
                                target={target}
                            >
                                {title}
                            </a>
                            : <Link
                                className={classNames(
                                    'focus:ring-4 focus:outline-none font-medium rounded-full text-xs md:text-sm py-2.5 px-5 text-center py-4',
                                    style
                                )}
                                href={url}
                                target={target}
                            >
                                {title}
                            </Link>
                    ))}
                </div>
            </div>
            <div className="py-8 px-16">
                <ul className="divide-y divide-white/10 text-gray-100 text-left">
                    {Object.values(contents.features).map(({title, description}: feature) => (
                        <li className="py-8">
                            <h3 className="text-white/50">{title}</h3>
                            <p>{description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
