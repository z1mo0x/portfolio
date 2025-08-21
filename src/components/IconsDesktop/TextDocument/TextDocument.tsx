import styles from './TextDocument.module.scss';
import textDocumentIcon from '../../../assets/img/text-file.svg'
import { useEffect, useRef, useState } from 'react';
import Notepad from '../../Notepad/Notepad';
import useOpenFile from '../../../hooks/useOpenFile';
import { useDispatch } from 'react-redux';
import { setDocumentMenu, unsetDocumentMenu } from '../../../store';

type TextDocumentProps = {
    fileName: string,
    text: string,
    baseActive?: boolean | undefined,
    selected?: HTMLDivElement | null,
    setSelected?: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>,
    zIndex?: number,
    setZIndex?: React.Dispatch<React.SetStateAction<number>>,
    addClass?: string,
    id: number,
}

export default function TextDocument({ fileName, text, baseActive, selected, setSelected, zIndex, setZIndex, addClass, id }: TextDocumentProps) {

    const [openedItems, setOpenedItems] = useState<Set<HTMLDivElement | null>>(new Set());
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const itemRef = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch()

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
        if (isOpened) {
            dispatch(setDocumentMenu(id))
        }
        else {
            dispatch(unsetDocumentMenu(id))
        }
    }, [isOpened])

    useOpenFile(itemRef, setOpenedItems)

    function handleClick() {
        if (selected && setSelected) {
            itemRef.current?.classList.add("active");
            selected.classList.remove('active')
            setSelected(itemRef.current)
            console.log(selected);
        }
    }

    return (
        <>
            <div onClick={handleClick} ref={itemRef} className={`${styles.icon} ${addClass}  icon desktop-icon`}>
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