import { useState } from "react";
import folder from "../../../assets/img/folder.svg"
import styles from './Folder.module.scss'

type FolderItemsProps = {
    isOpen: boolean;
}

function FolderItems({ isOpen }: FolderItemsProps) {

    const [isFolderOpen, setIsFolderOpen] = useState(false);

    function handleFolder() {
        if (!isFolderOpen) {
            setIsFolderOpen(true);
        }
        else {
            setIsFolderOpen(false);
        }
    }
    return (
        <div className={`${styles.menu__item} ${styles.menu__folder}`}>
            <div onClick={handleFolder} className={`${styles.menu__wrap} ${isOpen ? styles.active : ''}`}>
                <div className={styles.menu__icon}>
                    <img src={folder} alt="Иконка папки" />
                </div>
                <div className={styles.menu__name}>7-Zip</div>
            </div>
            <div className={`${styles.folder}`}>
                <div className={`${styles.folder__wrapper} ${isFolderOpen ? styles.active : ''}`}>
                    <div className={styles.folder__item}>
                        <div className={styles.folder__icon}>
                            <img src={folder} alt="Иконка папки" />
                        </div>
                        <div className={styles.folder__name}>7-Zip</div>
                    </div>
                    <div className={styles.folder__item}>
                        <div className={styles.folder__icon}>
                            <img src={folder} alt="Иконка папки" />
                        </div>
                        <div className={styles.folder__name}>7-Zip</div>
                    </div>
                    <div className={styles.folder__item}>
                        <div className={styles.folder__icon}>
                            <img src={folder} alt="Иконка папки" />
                        </div>
                        <div className={styles.folder__name}>7-Zip</div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FolderItems