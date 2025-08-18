import { useEffect, useState } from 'react';
import styles from './Month.module.scss';
import months from '../../../assets/scripts/months';

type MonthProps = {
    days: number[],
    name: string,
    activeDay: number | undefined,
    setActiveDay: (day: number) => void,
}

function Month({ days, name, activeDay, setActiveDay }: MonthProps) {

    const date = new Date();
    const todayDay = date.getDate();
    const todayMonth = date.getMonth();
    const [today, setToday] = useState<number>();


    useEffect(() => {
        days.forEach(day => {
            if (day === todayDay && months[todayMonth].name === name) {
                setToday(day);
            }
        })
    }, [])

    return (
        <>
            <div className={styles.month} >
                {
                    days.map((day, i) => (
                        <div
                            key={i}
                            className={
                                `${styles.month__day}
                                 ${today === day ? styles.today : ''}
                                 ${activeDay === day ? styles.active : ''}
                                 `}
                            onClick={() => { setActiveDay(day) }}
                        >{day}</div>
                    ))
                }
            </div >
        </>
    )
}

export default Month