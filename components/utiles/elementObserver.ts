import {Dispatch, RefObject, SetStateAction, useCallback, useEffect} from "react";

export default function ElementObserver (
        target: RefObject<HTMLDivElement>,
        setVisiable:Dispatch<SetStateAction<boolean>>
    ) {

    useEffect(() => {
        const element = target.current;
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setVisiable(state => true);
            } else {
                setVisiable(state => false);
            }
        });

        if (element != undefined) {
            observer.observe(element)
        }

        return () => observer.disconnect();
    }, [setVisiable, target]);
}
