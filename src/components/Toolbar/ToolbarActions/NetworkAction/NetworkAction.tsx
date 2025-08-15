import styles from './NetworkAction.module.scss';
import icon from '../../../../assets/img/network-icon.png'
import ToolbarPopup from '../../../ToolbarPopup/ToolbarPopup';
import { useRef, useState } from 'react';

type PropsNetworkAction = {}

function NetworkAction({ }: PropsNetworkAction) {

    const [networkIsOpen, setNetworkIsOpen] = useState(false);
    const networkRef = useRef<HTMLDivElement>(null);

    function handleNetworkOpen() {
        setNetworkIsOpen(prev => !prev);
    }

    return (
        <div className={styles.internet}>
            <div onClick={handleNetworkOpen} className={`${styles.internet__icon} icon`}>
                <img src={icon} alt="" />
            </div>
            <ToolbarPopup ref={networkRef} isOpen={networkIsOpen}>
                .{styles.internet}
            </ToolbarPopup>
        </div>
    )
}

export default NetworkAction