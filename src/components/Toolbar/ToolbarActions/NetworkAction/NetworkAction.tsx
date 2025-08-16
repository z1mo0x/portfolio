import styles from './NetworkAction.module.scss';
import icon from '../../../../assets/img/network-icon.png'
import ToolbarPopup from '../../../ToolbarPopup/ToolbarPopup';
import { useRef, useState } from 'react';
import { useClickOutside } from '../../../../hooks/useClickOutside';
import { NavLink } from 'react-router-dom';

type PropsNetworkAction = {}

function NetworkAction({ }: PropsNetworkAction) {

    const [networkIsOpen, setNetworkIsOpen] = useState(false);
    const networkRef = useRef<HTMLDivElement>(null);

    function handleNetworkOpen() {
        setNetworkIsOpen(prev => !prev);
    }

    useClickOutside(networkRef, () => { setNetworkIsOpen(false); });

    return (
        <div className={styles.internet}>
            <div onClick={handleNetworkOpen} className={`${styles.internet__icon} icon`}>
                <img src={icon} alt="" />
            </div>
            <ToolbarPopup ref={networkRef} isOpen={networkIsOpen}>
                <div className={styles.network}>
                    <div className={styles.network__wrapper}>
                        <div className={styles.network__items}>
                            <div className={styles.network__item}>
                                <div className={`${styles.network__icon}`}>
                                    <img src={icon} alt="" />
                                </div>
                                <div className={styles.network__info}>
                                    <div className={styles.network__name}>
                                        Network 1
                                    </div>
                                    <div className={styles.network__status}>
                                        Подключено
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.network__setting}>
                            <NavLink to={'#'} className={styles.network__link}>Параметры сети и Интернет</NavLink>
                            <div className={styles.network__descr}>Изменение параметров, таких как установление для подключения значения "лимитное". </div>
                        </div>
                    </div>
                </div>
            </ToolbarPopup>
        </div>
    )
}

export default NetworkAction