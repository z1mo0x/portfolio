import styles from './Menu.module.scss'
import FolderItems from './Folder/FolderItems';

type Props = {
    open: boolean;
}

function Menu({ open }: Props) {

    return (
        <>
            <div className={`${styles.menu__wrapper} ${open ? styles.active : ''}`}>
                <div className={`${styles.menu__sidebar} ${styles.sidebar}`}>
                    <div className={styles.sidebar__wrapper}>
                    </div>
                </div>
                <div className={`${styles.menu__items}`}>
                    <FolderItems isOpen={open} />
                    <FolderItems isOpen={open} />
                    <FolderItems isOpen={open} />
                    <FolderItems isOpen={open} />
                    <FolderItems isOpen={open} />
                </div>
            </div >
        </>
    )
}

export default Menu