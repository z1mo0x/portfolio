import TextDocument from '../IconsDesktop/TextDocument/TextDocument';
import styles from './Desktop.module.scss';
import bg from '../../assets/img/bg.jpg';
import { useState } from 'react';
// import { useState } from 'react';

type Props = {}

interface Document {
    id: number;
    name: string;
    text: string;
    baseActive: boolean;
}

function Desktop({ }: Props) {

    const [selected, setSelected] = useState<HTMLDivElement | null>(null);
    const [zIndex, setZIndex] = useState(20)

    const documents: Document[] = [
        {
            id: 1,
            name: "README.md",
            text: "Сайт начал разработку 01.08.2025",
            baseActive: false,
        },
        {
            id: 2,
            name: "Важно к прочтению",
            text: `На данный момент сайт в разработке. Последняя реализация - управления файлами(открывать блокнот, писать, перемещать, открывать на всю, закрывать)
 
Что предстоит сделать в ближайшее время:
1. Отображение открытых файлов в панели задач
2. Resize окон
3. Подключить БД для файлов, чтобы их можно было менять добавлять и так далее (Redux + Redux Toolkit) для управления данными
4. Добавить функцию смены обоев
5. Выбор языка (думаю он будет через AI переводить информацию в файлах)

Самое крупное - создать окно настроек

Что реализовано:
1. Панель задач(Меню, Календарь, "Попап Интернет", "Попап звука")
2. Файлы
3. Примерное поведения блоков при нажатии мимо - хук useClickOutside()
4. Drag-and-drop файлов
5. "Ручки" для resize (осталось написать функцию)
`,
            baseActive: true
        },
    ]

    let wallpaper = bg;

    return (
        <div className={styles.desktop}>
            <img src={wallpaper} alt="" className={styles.desktop__bg} />
            <div className={styles.desktop__wrapper}>
                {documents.map(doc => (
                    <TextDocument
                        key={doc.id}
                        selected={selected}
                        setSelected={setSelected}
                        baseActive={doc.baseActive}
                        text={doc.text}
                        fileName={doc.name}
                        zIndex={zIndex}
                        setZIndex={setZIndex}
                    />
                ))}
            </div>
        </div >
    )
}

export default Desktop