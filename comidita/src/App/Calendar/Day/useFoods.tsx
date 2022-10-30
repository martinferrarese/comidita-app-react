import { useEffect, useState } from "react";

const useFoods = (day: string) => {
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
    })

    return {
        lunch,
        dinner,
        saveLunch,
        saveDinner
    }

}

export default useFoods;