import SoundAction from './SoundAction/SoundAction'
import styles from './ToolbarActions.module.scss'

type ToolbarActionsProps = {}

function ToolbarActions({ }: ToolbarActionsProps) {
    return (
        <div className={styles.actions}>
            <SoundAction />
            <div className={styles.actions__network}></div>
            <div className={styles.actions__language}></div>
        </div>
    )
}

export default ToolbarActions