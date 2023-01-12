import {Dispatch, RefObject, SetStateAction, useEffect} from "react";

export default class ElementObserver {
    static calculateIntersectionRatio(
        target: RefObject<HTMLDivElement>,
        setVisiable:Dispatch<SetStateAction<number>>
    ) {
        useEffect(() => {
            const element = target.current;
            const options = { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] };
            const observer = new IntersectionObserver((entries) => {
                setVisiable(entries[0].intersectionRatio);
            }, options);

            if (element != undefined) {
                observer.observe(element)
            }

            return () => observer.disconnect();
        }, []);
    }

    static isIntersecting(
        target: RefObject<HTMLDivElement>,
        setVisiable:Dispatch<SetStateAction<boolean>>
    ) {
        useEffect(() => {
            const element = target.current;
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setVisiable(true);
                } else {
                    setVisiable(false);
                }
            });

            if (element != undefined) {
                observer.observe(element)
            }

            return () => observer.disconnect();
        }, []);
    }
}
