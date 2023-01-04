import classNames from "classnames";

interface props {
    link: link,
    styles?: styles
}

export interface link {
    title: string,
    description: string,
    url: string,
    target: '_blank'|'_self'|'_parent'|'_top',
    isLink: boolean
}

export interface styles {
    card: any,
    header: any,
    body: any
}

const defaultStyle = {
    card: '',
    header: '',
    body: ''
}

export default function linkCard({link, styles = defaultStyle}: props) {
    return (
        <a
            href={link.url}
            target={link.target}
            className={classNames(
                'group p-4 space-y-2 font-semibold',
                styles.card
            )}
        >
            <h2 className={classNames(
                'flex items-center',
                styles?.header
            )}>
                {link.title}
                <span className="relative translate-x-1 group-hover:translate-x-2 transition-transform duration-200 z-0">
                    <svg
                        fill="currentColor"
                        stroke="currentColor"
                        className="relative w-3 h-3 z-0 text-gray-100"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path d="M422.6 278.6L445.3 256l-22.6-22.6-144-144L256 66.7 210.8 112l22.6 22.6L322.8 224 32 224 0 224l0 64 32 0 290.7 0-89.4 89.4L210.8 400 256 445.3l22.6-22.6 144-144z"/>
                    </svg>
                </span>
            </h2>
            <p className={classNames(
                'text-sm font-medium',
                styles?.body
            )}>
                {link.description}
            </p>
        </a>
    );
}
