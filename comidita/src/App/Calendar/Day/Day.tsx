import { useEffect, useState } from "react"

type DayType = {
    day: string
}

const Day = ({ day }: DayType) => {
    const [lunch, setLunch] = useState<string>("");
    const [dinner, setDinner] = useState<string>("");

    const saveDinner = (newDinner: string) => {
        localStorage.setItem("dinner", newDinner);
        setDinner(newDinner);
    }

    useEffect(() => {
        const localStorageDinnerValue = localStorage.getItem("dinner")
        if (!localStorageDinnerValue) {
            localStorage.setItem("dinner", "N/A");
        } else {
            setDinner(localStorageDinnerValue);
        }
    }, []);

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
                onChange={(e) => saveDinner(e.target.value)}
            />
        </div>
    )
}

export default Day;