import useFoods from "./useFoods"

type DayType = {
    day: string
}

const Day = ({ day }: DayType) => {
    const { lunch, dinner, saveLunch, saveDinner } = useFoods(day);

    return (
        <div className='DayOfTheWeek'>
            <p>
                <b>{day}</b>
            </p>
            <p>Almuerzo</p>
            <input
                name="lunch"
                value={lunch}
                onChange={(e) => saveLunch(e.target.value)}
            />
            <p>Cena</p>
            <input
                name="dinner"
                value={dinner}
                onChange={(e) => saveDinner(e.target.value)}
            />
        </div>
    )
}

export default Day;