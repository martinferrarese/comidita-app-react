type DayType = {
    day: string
}

const Day = ({ day }: DayType) => {
    return (
        <div className='DayOfTheWeek'>
            <p><b>{day}</b></p>
            <p>Almuerzo</p>
            <p>Cena</p>
        </div>
    )
}

export default Day;