import styles from './Window.module.scss'
import iconFile from '../../assets/img/notepad-icon.png'

type WindowProps = {
    title: string,
    children: React.ReactNode,
}

function Window({ title, children }: WindowProps) {
    return (
        <div className={styles.window}>
            <div className={styles.window__header}>
                <div className={styles.window__file}>
                    <img src={iconFile} alt="" />{title} - Блокнот
                </div>
                <div className={styles.window__actions}>
                    <div className={`${styles.window__minimize} ${styles.window__action}`}>
                        –
                    </div>
                    <div className={`${styles.window__expand} ${styles.window__action}`}>
                        ◻
                    </div>
                    <div className={`${styles.window__close} ${styles.window__action}`}>
                        ✕
                    </div>
                </div>
            </div>
            <div className={styles.window__info}>
                {children}
            </div>
        </div>
    )
}

export default Window