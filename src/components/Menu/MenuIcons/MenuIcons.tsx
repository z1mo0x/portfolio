import styles from '../Menu.module.scss';
import textDocumentIcon from '../../../assets/img/text-file.svg';
import { useRef } from 'react';
import useHoverFile from '../../../hooks/useHoverFile';

type MenuIconsProps = {
    type: string;
    name: string;
};

function MenuIcons({ name }: MenuIconsProps) {
    const iconRef = useRef<HTMLDivElement>(null);

    useHoverFile(iconRef);


    return (
        <div ref={iconRef} className={styles.menu__icon}>
            <img src={textDocumentIcon} alt="" />
            <p>{name}</p>
        </div>
    );
}

export default MenuIcons;
