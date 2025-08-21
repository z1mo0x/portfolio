import styles from './Notepad.module.scss'
import iconFile from '../../assets/img/notepad-icon.png'
import handleMouseDown from '../../assets/scripts/windowDrag';
import { useEffect, useRef, useState } from 'react';
import windowResize from '../../assets/scripts/windowResize';

type WindowProps = {
    title: string,
    children: React.ReactNode,
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
    zIndex?: number,
    setZIndex?: React.Dispatch<React.SetStateAction<number>>,
}

function Notepad({ title, children, isOpen, setIsOpen, zIndex, setZIndex }: WindowProps) {

    const [isExpanded, setIsExpanded] = useState(false);
    const notepadRef = useRef<HTMLDivElement | null>(null);
    // const [notepadSelected, setNotepadSelected] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        if (notepadRef.current && zIndex && setZIndex) {
            // setNotepadSelected(notepadRef.current);
            setZIndex(prev => prev + 1)
            notepadRef.current.style.zIndex = `${zIndex}`
        }
    }, [isOpen])

    useEffect(() => {
        const handleClick = () => {
            if (notepadRef.current && setZIndex) {
                setZIndex(prev => prev + 1);
                notepadRef.current.style.zIndex = `${zIndex}`;
            }
        };

        const currentRef = notepadRef.current;
        currentRef?.addEventListener("click", handleClick);

        return () => {
            currentRef?.removeEventListener("click", handleClick);
        };

    }, [zIndex]);

    return (
        <div ref={notepadRef} className={`${isOpen ? styles.opened : ''} ${isExpanded ? styles.expanded : ''} ${styles.overlay}`}>
            <div className={`${styles.window}`}>
                <div className={styles.window__header}>
                    <div className={styles.window__file} onMouseDown={(e) => { handleMouseDown(e, `${styles.overlay}`, setIsExpanded, isExpanded) }} >
                        <img src={iconFile} alt="" />{title} - Блокнот
                    </div>
                    <div className={styles.window__actions}>
                        <div className={`${styles.window__minimize} ${styles.window__action}`}>
                            –
                        </div>
                        <div
                            className={`${styles.window__expand} ${styles.window__action}`}
                            onClick={() => { setIsExpanded(!isExpanded) }}
                        >
                            ◻
                        </div>
                        <div
                            className={`${styles.window__close} ${styles.window__action}`}
                            onClick={() => {
                                setIsOpen(false)
                                setIsExpanded(false)
                            }}
                        >
                            ✕
                        </div>
                    </div>
                </div>
                <textarea className={styles.window__info} defaultValue={children?.toString()}></textarea>
                {/* ползунки для resize */}
                <div className={styles.resize__top} data-type="top" onMouseDown={(e) => { windowResize(e, styles.overlay) }}></div>
                <div className={styles.resize__left} data-type="left"></div>
                <div className={styles.resize__right} data-type="right"></div>
                <div className={styles.resize__bottom} data-type="bottom"></div>
                {/* ползунки для resize */}
            </div>
        </div >
    )
}

export default Notepad