import { useEffect, useState, useRef } from 'react';
import styles from './Calendar.module.scss'
import months from '../../assets/scripts/months';
import Month from './Month/Month';
import calendarNext from '../../assets/img/calendar-next.png'
import calendarPrev from '../../assets/img/calendar-prev.png'
import { Swiper, SwiperSlide, type SwiperRef } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Импортируйте стили
import { NavLink } from 'react-router-dom';

type CalendarProps = {
    month: number,
}

function Calendar({ month }: CalendarProps) {

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [currentMonth, setCurrentMonth] = useState<number>(month);
    const [currentMonthName, setCurrentMonthName] = useState<string>(months[currentMonth].name);
    const weekdays: string[] = ['Пн', "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    const monthNames: string[] = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const [daysByMonth, setDaysByMonth] = useState<{ [key: string]: number[] }>({});
    const sliderRef = useRef<SwiperRef | null>(null);


    useEffect(() => {
        if (sliderRef.current?.swiper) {
            sliderRef.current.swiper.activeIndex = currentMonth;
        }
        setCurrentMonthName(months[currentMonth].name)
        updateDaysByMonth(currentYear, currentMonth)
    }, [currentMonth, currentYear])


    function updateDaysByMonth(year: number, month: number) {
        let result: { [key: string]: number[] } = {};
        for (let m = 0; m < 12; m++) {
            const daysCount: number = new Date(year, m + 1, 0).getDate();
            result[monthNames[m]] = Array.from({ length: daysCount }, (_, i) => i + 1);
        }
        setDaysByMonth(result)
    }

    function handleNext() {
        sliderRef.current?.swiper.slideNext()
        if (sliderRef.current?.swiper) {

            setCurrentMonth(prevMonth => {
                if (prevMonth < 11) {
                    return prevMonth + 1;
                }
                else {
                    setCurrentYear(prevYear => prevYear + 1);
                    return 0;
                }
            })
            sliderRef.current.swiper.activeIndex = currentMonth;
        }
    }

    function handlePrev() {
        sliderRef.current?.swiper.slidePrev()
        if (sliderRef.current?.swiper) {
            setCurrentMonth(prevMonth => {
                if (prevMonth > 0) {
                    return prevMonth - 1;
                }
                else {
                    setCurrentYear(prevYear => prevYear - 1);
                    return 11;
                }
            })
            sliderRef.current.swiper.activeIndex = currentMonth;
        }
    }


    return (
        <div className={styles.calendar}>
            <div className={styles.calendar__wrapper}>
                <div className={styles.calendar__header}>
                    <div className={styles.calendar__current}>
                        <div className={styles.calendar__month}>
                            {currentMonthName}
                        </div>
                        <div className={styles.calendar__year}>
                            {currentYear}
                        </div>
                    </div>
                    <div className={styles.calendar__arrows}>
                        <div onClick={handlePrev} className={`${styles.calendar__arrow} ${styles.calendar__prev}`}>
                            <img src={calendarPrev} alt="" />
                        </div>
                        <div onClick={handleNext} className={`${styles.calendar__arrow} ${styles.calendar__next}`}>
                            <img src={calendarNext} alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.calendar__wrap}>
                    <div className={styles.calendar__weekdays}>
                        {weekdays.map((day, i) => (
                            <div key={i} className={styles.calendar__weekday}>{day}</div>
                        ))}
                    </div>
                    <div className={styles.slider__wrap}>
                        <Swiper
                            className={styles.slider__slider}
                            ref={sliderRef}
                            direction='vertical'
                            allowTouchMove={false}
                        >
                            {Object.entries(daysByMonth).map(([monthName, day]) => (
                                <SwiperSlide key={monthName} className={styles.slider__slide}>
                                    <Month days={day} name={monthName} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <NavLink to={'#'} className={styles.calendar__settings}>
                        Параметры даты и времени
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Calendar