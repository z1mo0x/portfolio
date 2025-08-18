import styles from './TextDocument.module.scss';
import textDocumentIcon from '../../../assets/img/text-file.svg'
import { useEffect, useRef, useState } from 'react';
import Notepad from '../../Notepad/Notepad';
// import { useClickOutside } from '../../../hooks/useClickOutside';

type TextDocumentProps = {
    fileName: string,
    text: string,
    baseActive: boolean
}

export default function TextDocument({ fileName, text, baseActive }: TextDocumentProps) {

    // const [selected, setSelected] = useState<HTMLDivElement | null>(null);
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
        itemRef.current?.classList.add(`active`);
        // setSelected(itemRef.current)
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

            <Notepad isOpen={isOpened} setIsOpen={setIsOpened} title={fileName}>
                {text}
            </Notepad>
        </>

    )
}   