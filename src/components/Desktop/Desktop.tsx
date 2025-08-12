import TextDocument from '../IconsDesktop/TextDocument/TextDocument';
import styles from './Desktop.module.scss';

type Props = {}

function Desktop({ }: Props) {
    return (
        <div className={styles.desktop}>
            <div className={styles.desktop__wrapper}>
                <TextDocument fileName="README.md" />
                <TextDocument fileName="Важно к прочтению" />
            </div>
        </div >
    )
}

export default Desktop