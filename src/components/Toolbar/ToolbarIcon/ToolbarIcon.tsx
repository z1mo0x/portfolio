import styles from './ToolbarIcon.module.scss'
import textDocumentIcon from '../../../assets/img/text-file.svg'

type ToolbarIconProps = {
    type: string,
    inMenu: boolean,
}

function ToolbarIcon({ type, inMenu }: ToolbarIconProps) {

    return (
        <div className={`${styles.icon} ${inMenu ? styles.active : ''}`}>
            {type === "notepad" ?
                <img src={textDocumentIcon} alt="" />
                :
                ''
            }
        </div>
    )
}

export default ToolbarIcon