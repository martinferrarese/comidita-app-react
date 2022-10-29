import { ReactChild } from "react";

type CalendarType = {
    children: ReactChild[]
}

const Calendar = ({ children }: CalendarType) => {
    return (
        <div className='Calendar'>
            {children}
        </div>
    )
}

export default Calendar;