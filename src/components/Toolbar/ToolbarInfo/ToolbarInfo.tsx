import { useEffect, useState } from 'react';
import messageIcon from "../../../assets/img/message-icon.png"
import styles from './ToolbarInfo.module.scss'

type Props = {}

function ToolbarInfo({ }: Props) {
    const [time, setTime] = useState<string>();
    const [date, setDate] = useState<string>();

    useEffect(() => {
        const timer = setInterval(() => {
            timeUpdate()
        }, 1000)

        timeUpdate()
        handleDate(new Date())

        return () => clearInterval(timer);
    }, [])


    function timeUpdate() {
        let nowDate = new Date();
        let hours = (nowDate.getHours()).toString().padStart(2, "0");
        let minutes = (nowDate.getMinutes()).toString().padStart(2, "0");
        let fullTime = hours + ':' + minutes;
        setTime(fullTime);
    }

    function handleDate(date: Date) {
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        setDate(`${day}.${month}.${year}`)
    }
    return (
        <>
            <div className={styles.toolbar__info}>
                <div className={styles.toolbar__time}>
                    {time}
                </div>
                <div className={styles.toolbar__date}>
                    {date}
                </div>
            </div>
            <div className={styles.toolbar__notifications}>
                <img src={messageIcon} alt="" />
            </div>
        </>
    )
}

export default ToolbarInfo