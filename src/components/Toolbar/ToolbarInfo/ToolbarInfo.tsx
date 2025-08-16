import { useEffect, useRef, useState } from 'react';
import messageIcon from "../../../assets/img/message-icon.png"
import styles from './ToolbarInfo.module.scss'
import ToolbarPopup from '../../ToolbarPopup/ToolbarPopup';
import { useClickOutside } from '../../../hooks/useClickOutside';
import Calendar from '../../Calendar/Calendar';
import months from '../../../assets/scripts/months';

type Props = {}

function ToolbarInfo({ }: Props) {

    const [time, setTime] = useState<string>();
    const [date, setDate] = useState<string>();
    const [fullTime, setFullTime] = useState<string>();
    const [fullDate, setFullDate] = useState<string>();
    const [calendarOpen, setCalendarOpen] = useState(false);
    let clearMonth = new Date().getMonth();
    const calendarRef = useRef<HTMLDivElement>(null);



    useClickOutside(calendarRef, () => { setCalendarOpen(false); });

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
        let seconds = (nowDate.getSeconds()).toString().padStart(2, "0");
        let time = hours + ':' + minutes;
        let fullTime = hours + ':' + minutes + ':' + seconds;
        setTime(time);
        setFullTime(fullTime);

    }

    function handleDate(date: Date) {
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        setDate(`${day}.${month}.${year}`)


        setFullDate(`${day} ${months[clearMonth].genitive} ${year} г.`)
    }

    function handleOpenCalendar() {
        setCalendarOpen(!calendarOpen);
    }

    return (
        <>
            <div onClick={handleOpenCalendar} className={styles.toolbar__info}>
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

            <ToolbarPopup isOpen={calendarOpen} ref={calendarRef}>
                <div className={styles.time}>
                    <div className={styles.time__wrapper}>
                        <div className={styles.time__clocks}>{fullTime}</div>
                        <div className={styles.date}>
                            {fullDate}
                        </div>
                    </div>
                </div>
                <Calendar month={clearMonth} />
            </ToolbarPopup >
        </>
    )
}

export default ToolbarInfo