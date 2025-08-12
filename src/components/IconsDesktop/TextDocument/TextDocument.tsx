import styles from './TextDocument.module.scss';
import textDocumentIcon from '../../../assets/img/text-file.svg'
import { useRef } from 'react';
import Window from '../../Window/Window';

type TextDocumentProps = {
    fileName: string,
}

export default function TextDocument({ fileName }: TextDocumentProps) {

    const itemRef = useRef<HTMLDivElement>(null);

    function handleClick() {
        itemRef.current?.classList.add(`active`)
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

            <Window title={fileName}>
                В разработке...
            </Window>
        </>

    )
}   