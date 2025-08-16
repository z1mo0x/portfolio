import { useEffect, useState } from 'react';
import styles from './Month.module.scss';
import months from '../../../assets/scripts/months';

type MonthProps = {
    days: number[],
    name: string,
}

function Month({ days, name }: MonthProps) {

    const date = new Date();
    const todayDay = date.getDate();
    const todayMonth = date.getMonth();
    const [activeDay, setActiveDay] = useState<number>();


    useEffect(() => {
        days.forEach(day => {
            if (day === todayDay && months[todayMonth].name === name) {
                setActiveDay(day);
            }
        })
    }, [])


    // function handleHoverDays() {
    //     window.addEventListener("mousemove", (e) => {
    //         const mouseX = e.clientX;
    //         const mouseY = e.clientY;
    //     })
    // }


    return (
        <>
            <div className={styles.month} >
                {
                    days.map((day, i) => (
                        <div
                            key={i}
                            className={`${styles.month__day} ${activeDay === day ? styles.active : ''}`}
                            onClick={() => { setActiveDay(day) }}
                        >{day}</div>
                    ))
                }
            </div >
        </>
    )
}

export default Month