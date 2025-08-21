import React, { useEffect } from "react";

export default function useOpenFile(
    ref: React.RefObject<HTMLDivElement | null>,
    setOpenedItems: React.Dispatch<React.SetStateAction<Set<HTMLDivElement | null>>>,
) {
    useEffect(() => {
        const handleDoubleClick = () => {
            if (ref.current) {
                setOpenedItems(prevOpened => {
                    const newOpened = new Set(prevOpened);
                    newOpened.add(ref.current);
                    return newOpened;
                });
            }
        };

        const currentRef = ref.current;
        currentRef?.addEventListener('dblclick', handleDoubleClick);

        return () => {
            currentRef?.removeEventListener('dblclick', handleDoubleClick);
        };
    }, [ref])
}