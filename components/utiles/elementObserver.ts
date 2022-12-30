import {Dispatch, RefObject, SetStateAction, useEffect} from "react";

export default function (target: RefObject<HTMLDivElement>,  setVisiable:Dispatch<SetStateAction<boolean>>) {
    useEffect(() => {
        const element = target.current;
        const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting){
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
