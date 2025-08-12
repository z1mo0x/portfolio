import TextDocument from '../IconsDesktop/TextDocument/TextDocument';
import styles from './Desktop.module.scss';
import bg from '../../assets/img/bg.jpg';

type Props = {}

function Desktop({ }: Props) {

    let wallpaper = bg;

    return (
        <div className={styles.desktop}>
            <img src={wallpaper} alt="" className={styles.desktop__bg} />
            <div className={styles.desktop__wrapper}>
                <TextDocument fileName="README.md" />
                <TextDocument fileName="Важно к прочтению" />
            </div>
        </div >
    )
}

export default Desktop