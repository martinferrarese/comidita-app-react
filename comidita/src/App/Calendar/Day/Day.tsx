import { useEffect, useState } from "react"

type DayType = {
    day: string
}

const Day = ({ day }: DayType) => {
    const [lunch, setLunch] = useState<string>("");
    const [dinner, setDinner] = useState<string>("");

    const saveLunch = (newLunch: string) => {
        localStorage.setItem(`${day}-lunch`, newLunch);
        setLunch(newLunch);
    }

    const saveDinner = (newDinner: string) => {
        localStorage.setItem(`${day}-dinner`, newDinner);
        setDinner(newDinner);
    }

    const getLunch = () => {
        const localStorageLunchValue = localStorage.getItem(`${day}-lunch`);
        if (!localStorageLunchValue) {
            localStorage.setItem(`${day}-lunch`, "");
        } else {
            setLunch(localStorageLunchValue);
        }
    }

    const getDinner = () => {
        const localStorageDinnerValue = localStorage.getItem(`${day}-dinner`);

        if (!localStorageDinnerValue) {
            localStorage.setItem(`${day}-dinner`, "");
        } else {
            setDinner(localStorageDinnerValue);
        }
    }

    useEffect(() => {
        getLunch();
        getDinner();
    });

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