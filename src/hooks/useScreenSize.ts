import {useEffect, useState} from "react";

interface ScreenSizeRange {
    minWidth: number;
    maxWidth: number;
}

function useScreenSize({minWidth, maxWidth}: ScreenSizeRange): boolean {
    const [isInSizeRange, setIsInSizeRange] = useState<boolean>(false);

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            setIsInSizeRange(
                (minWidth === undefined || width >= minWidth) &&
                (maxWidth === undefined || width <= maxWidth)
            );
        };

        checkScreenSize();

        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, [minWidth, maxWidth]);
    return isInSizeRange;
}

export default useScreenSize;