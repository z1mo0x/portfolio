import styles from './Menu.module.scss'
import FolderItems from './Folder/FolderItems';
import { useSelector } from 'react-redux';
import type { DocumentState } from '../../store';
import { useMemo } from 'react';
import MenuIcons from './MenuIcons/MenuIcons';

type Props = {
    open: boolean;
    ref: React.RefObject<HTMLDivElement | null>;
}


function Menu({ open, ref }: Props) {

    const notepadItems = useSelector((state: DocumentState) => state.documents)

    const notepadIcons = useMemo(() =>
        notepadItems.map((doc, i) => (
            <MenuIcons key={i} type='notepad' name={doc.name} />
        )), [notepadItems]
    )

    return (
        <>
            <div ref={ref} className={`${styles.menu__wrapper} ${open ? styles.active : ''}`}>
                <div className={`${styles.menu__sidebar} ${styles.sidebar}`}>
                    <div className={styles.sidebar__wrapper}>
                    </div>
                </div>
                <div className={`${styles.menu__items}`}>
                    {notepadIcons}
                    <FolderItems isOpen={open} />
                </div>
            </div >
        </>
    )
}

export default Menu