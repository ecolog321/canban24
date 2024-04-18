import { Calendar } from "../../../Calendar/Calendar"

export const PopNewCardCalendar =()=> {
    return (
        <div className="pop-new-card__calendar calendar">
            <p className="calendar__ttl subttl">Даты</p>
            <Calendar/>
        </div>
    )
}