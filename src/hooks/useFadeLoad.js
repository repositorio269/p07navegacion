import { useRef, useEffect } from "react";

export function useFadeLoad() {

    const containerRef = useRef();

    useEffect(() => {
        containerRef.current.classList.add('fade');
        setTimeout(() => {
            containerRef.current.classList.add('show');
        }, 50);
    }, [])

    return containerRef;

}