
// calendar

const weekdaysBlock = document.querySelectorAll(".month__weekdays");
const container = document.querySelector(".calendar__slider");
const weekdays = ['ПН', "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
const date = new Date;
const nowYear = date.getFullYear();
const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const daysByMonth = getDaysInMonthsNamed();
const monthBlock = document.createElement("div");

function getDaysInMonthsNamed() {
    const year = new Date().getFullYear();
    const result: number[] = [];

    for (let m = 0; m < 12; m++) {
        const daysCount = new Date(year, m + 1, 0).getDate();
        result[monthNames[m]] = Array.from({ length: daysCount }, (_, i) => i + 1);
    }

    return result;
}

export default function returnWeekDays() {
    weekdaysBlock.forEach(item => {
        weekdays.forEach(day => {
            item.innerHTML += `<div class="month__weekday">${day}</div>`;
        })
    })
}
function returnDays() {
    for (const month in daysByMonth) {
        if (daysByMonth.hasOwnProperty(month)) {
            const days = daysByMonth[month];
            container.innerHTML = monthBlock.className = 'month';
            // return `<div>${days}</div>`;
        }
    }
}

returnWeekDays();
returnDays();