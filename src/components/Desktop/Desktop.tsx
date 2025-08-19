import TextDocument from '../IconsDesktop/TextDocument/TextDocument';
import styles from './Desktop.module.scss';
import bg from '../../assets/img/bg.jpg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { DocumentState } from '../../store';

type DesktopProps = {}


function Desktop({ }: DesktopProps) {

    const [selected, setSelected] = useState<HTMLDivElement | null>(null);
    const [zIndex, setZIndex] = useState(20)

    const documents = useSelector((state: DocumentState) => state.documents)

    let wallpaper = bg;

    return (
        <div className={styles.desktop}>
            <img src={wallpaper} alt="" className={styles.desktop__bg} />
            <div className={styles.desktop__wrapper}>
                {documents.map(doc => (
                    <TextDocument
                        key={doc.id}
                        baseActive={doc.baseActive}
                        text={doc.text}
                        fileName={doc.name}
                        selected={selected}
                        setSelected={setSelected}
                        zIndex={zIndex}
                        setZIndex={setZIndex}
                    />
                ))}
            </div>
        </div >
    )
}

export default Desktop