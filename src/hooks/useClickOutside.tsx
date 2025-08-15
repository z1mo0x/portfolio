import { useEffect } from "react";
import styles from '../components/Desktop/Desktop.module.scss'

export function useClickOutside(
    ref: React.RefObject<HTMLDivElement | null>,
    handler: () => void
) {
    useEffect(() => {
        const desktop = document.querySelector<HTMLDivElement>(`.${styles.desktop}`);

        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                handler();
            }
        }

        if (desktop) {
            desktop.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            if (desktop) {
                desktop.removeEventListener("mousedown", handleClickOutside);
            }
        };
    }, [ref, handler]);
}
