import { useRef, useState } from 'react';
import Menu from '../Menu/Menu'
import styles from './Toolbar.module.scss'
import menuButton from "../../assets/img/menu-button.png"
import ToolbarInfo from './ToolbarInfo/ToolbarInfo';
import ToolbarActions from './ToolbarActions/ToolbarActions';
import { useClickOutside } from '../../hooks/useClickOutside';

type Props = {}

function Header({ }: Props) {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    function handleOpen() {
        setIsOpen(prev => !prev);
    }

    useClickOutside(menuRef, () => { setIsOpen(false) })

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
                        <ToolbarActions />
                        <ToolbarInfo />
                    </div>
                </div>
            </div>
            <Menu ref={menuRef} open={isOpen} />
        </>
    )
}

export default Header