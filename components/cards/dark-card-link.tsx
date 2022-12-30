interface props {
    title: string,
    link: string,
    target: "_self",
    description: string
}

export default function darkCardLink({title, link, target, description}: props) {
    return (
        <a
            href={link}
            target={target}
            className="group p-4 mix-blend-multiply hover:bg-white/10 space-y-2 font-semibold transition-color duration-200"
        >
            <h2 className="flex items-center text-gray-100">
                {title}
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
            <p className="text-sm text-gray-300 font-medium">
                {description}
            </p>
        </a>
    );
}
