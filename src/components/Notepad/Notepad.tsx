import styles from './Notepad.module.scss'
import iconFile from '../../assets/img/notepad-icon.png'
import handleMouseDown from '../../assets/scripts/windowDrag';
import { useEffect, useRef, useState } from 'react';

type WindowProps = {
    title: string,
    children: React.ReactNode,
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
    zIndex: number,
    setZIndex: React.Dispatch<React.SetStateAction<number>>,
}

function Notepad({ title, children, isOpen, setIsOpen, zIndex, setZIndex }: WindowProps) {

    const [isExpanded, setIsExpanded] = useState(false);
    const notepadRef = useRef<HTMLDivElement | null>(null);
    const [notepadSelected, setNotepadSelected] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        if (notepadRef.current !== null) {
            setNotepadSelected(notepadRef.current);
            setZIndex(prev => prev + 1)
            notepadRef.current.style.zIndex = `${zIndex++}`;
            console.log(notepadSelected);
        }
    }, [isOpen])


    return (
        <div ref={notepadRef} className={`${isOpen ? styles.opened : ''} ${isExpanded ? styles.expanded : ''} ${styles.overlay}`}>
            <div className={`${styles.window}`}>
                <div className={styles.window__header} onMouseDown={(e) => { handleMouseDown(e, `${styles.overlay}`, setIsExpanded, isExpanded) }} >
                    <div className={styles.window__file}>
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
                <div className={styles.resize__top}></div>
                <div className={styles.resize__left}></div>
                <div className={styles.resize__right}></div>
                <div className={styles.resize__bottom}></div>
                {/* ползунки для resize */}
            </div>
        </div >
    )
}

export default Notepad