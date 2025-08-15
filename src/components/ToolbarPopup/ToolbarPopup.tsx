import styles from './ToolbarPopup.module.scss';

type ToolbarPopupProps = {
    isOpen: boolean,
    children: React.ReactNode,
    ref: React.RefObject<HTMLDivElement | null>,
}

function ToolbarPopup({ isOpen, children, ref }: ToolbarPopupProps) {

    return (
        <div ref={ref} className={`${styles.popup} ${isOpen ? styles.active : ''}`}>
            <div className={styles.popup__wrapper}>
                {children}
            </div>
        </div>
    )
}

export default ToolbarPopup