import { useState } from "react"

type DayType = {
    day: string
}

const Day = ({ day }: DayType) => {
    const [lunch, setLunch] = useState<string>("");
    const [dinner, setDinner] = useState<string>("");

    return (
        <div className='DayOfTheWeek'>
            <p>
                <b>{day}</b>
            </p>
            <p>Almuerzo</p>
            <input
                name="lunch"
                value={lunch}
                onChange={(e) => setLunch(e.target.value)}
            />
            <p>Cena</p>
            <input
                name="dinner"
                value={dinner}
                onChange={(e) => setDinner(e.target.value)}
            />
        </div>
    )
}

export default Day;