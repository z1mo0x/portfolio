import { useState } from 'react';
import Menu from '../Menu/Menu'
import styles from './Toolbar.module.scss'
import menuButton from "../../assets/img/menu-button.png"

type Props = {}

function Header({ }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handleOpen() {
        if (!isOpen) {
            setIsOpen(true);
        }
        else {
            setIsOpen(false);
        }
    }

    return (
        <>
            <div className={styles.toolbar}>
                <div className={styles.toolbar__wrapper}>
                    <div className={styles.toolbar__left}>
                        <div onClick={handleOpen} className={`${styles.menu} icon`} title='Пуск'>
                            <img src={menuButton} alt="" />
                        </div>
                        <div className={styles.toolbar__opened}></div>
                    </div>
                    <div className={styles.toolbar__right}>
                        <div className={styles.toolbar__info}>123</div>
                    </div>
                </div>
            </div>
            <Menu open={isOpen} />

        </>
    )
}

export default Header