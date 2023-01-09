import classNames from "classnames";

interface props {
    title: string,
    className?: string,
}

const defaultProps = {
    className: 'from-indigo-500 to-pink-500'
}

export default function gradientHeading({title, className = defaultProps.className}: props) {
    return (
        <h2
            className={classNames(
                'flex flex-row justify-center space-x-2 md:space-x-4 font-black text-3xl md:text-4xl lg:text-5xl py-2 md:py-4 text-transparent bg-clip-text bg-gradient-to-r',
                className
            )}
            dangerouslySetInnerHTML={{__html: title}}
        >
        </h2>
    )
}
