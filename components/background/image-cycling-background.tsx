'use client'

import {ReactNode, useState} from "react";
import classNames from "classnames";
import useInterval from "../../hooks/useInterval";

interface props {
    children: ReactNode,
    className?: string
    src: string,
    layers: string[]
}

export default function ImageCyclingBackground({children, src, layers, className = ''}: props) {
    const [layerIndex, setLayerIndex] = useState(0);
    const [layerSrc, setLayerSrc] = useState(layers[0]);

    useInterval(() => {
        setLayerIndex((layerIndex < layers.length - 1) ? layerIndex + 1 : 0);
        setLayerSrc(layers[layerIndex]);
    }, 5 * 1000);

    return (
        <div style={{backgroundImage: `url('${layerSrc}'), url('${src}')`}} className={classNames(
            'bg-cover bg-center bg-fixed',
            className
        )}>
            { children }
        </div>
    )
}
