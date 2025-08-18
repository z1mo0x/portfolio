import styles from './ToolbarPopup.module.scss';

type ToolbarPopupProps = {
    isOpen: boolean,
    children: React.ReactNode,
    ref: React.RefObject<HTMLDivElement | null>,
    className?: string,
}

function ToolbarPopup({ isOpen, className, children, ref }: ToolbarPopupProps) {

    return (
        <div ref={ref} className={`${className} ${styles.popup}  ${isOpen ? styles.active : ''}`}>
            <div className={styles.popup__wrapper}>
                {children}
            </div>
        </div>
    )
}

export default ToolbarPopup