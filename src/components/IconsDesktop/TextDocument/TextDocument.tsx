import styles from './TextDocument.module.scss';
import textDocumentIcon from '../../../assets/img/text-file.svg'
import { useEffect, useRef, useState } from 'react';
import Notepad from '../../Notepad/Notepad';
// import { useClickOutside } from '../../../hooks/useClickOutside';

type TextDocumentProps = {
    fileName: string,
    text: string,
    baseActive: boolean,
    selected: HTMLDivElement | null,
    setSelected: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>,
    zIndex: number,
    setZIndex: React.Dispatch<React.SetStateAction<number>>,
}

export default function TextDocument({ fileName, text, baseActive, selected, setSelected, zIndex, setZIndex }: TextDocumentProps) {

    const [openedItems, setOpenedItems] = useState<Set<HTMLDivElement | null>>(new Set());
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (baseActive) {
            setIsOpened(true);
        }
    }, [])

    useEffect(() => {
        if (openedItems.has(itemRef.current)) {
            setIsOpened(true)
        }
    }, [openedItems])

    useEffect(() => {
        const handleDoubleClick = () => {
            if (itemRef.current) {
                // setZIndex(prev => prev + 1)
                setOpenedItems(prevOpened => {
                    const newOpened = new Set(prevOpened);
                    newOpened.add(itemRef.current);
                    return newOpened;
                });
            }
        };

        const currentRef = itemRef.current;
        currentRef?.addEventListener('dblclick', handleDoubleClick);

        return () => {
            currentRef?.removeEventListener('dblclick', handleDoubleClick);
        };
    }, [itemRef])

    function handleClick() {
        if (selected) {
            itemRef.current?.classList.add("active");
            selected.classList.remove('active')
            setSelected(itemRef.current)
            console.log(selected);
        }
    }

    return (
        <>
            <div onClick={handleClick} ref={itemRef} className={`${styles.icon}  icon desktop-icon`}>
                <div className={`${styles.icon__image} desktop-icon__image`}>
                    <img src={textDocumentIcon} alt="" />
                </div>
                <div className={`${styles.icon__name} desktop-icon__name`}>
                    {fileName}
                </div>
            </div>

            <Notepad isOpen={isOpened} setIsOpen={setIsOpened} zIndex={zIndex} setZIndex={setZIndex} title={fileName}>
                {text}
            </Notepad>
        </>

    )
}   