import Day from "./Day/Day";

const Calendar = () => {
    return (
        <div className='Calendar'>
            <Day day={"Lunes"}></Day>
            <Day day={"Martes"}></Day>
            <Day day={"Miércoles"}></Day>
            <Day day={"Jueves"}></Day>
            <Day day={"Viernes"}></Day>
        </div>
    )
}

export default Calendar;