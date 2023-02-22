import useFoods from './useFoods'
import './Day.css'

type DayType = {
  day: string
}

const Day = ({ day }: DayType) => {
  const { lunch, dinner, saveLunch, saveDinner } = useFoods(day)

  return (
    <div className='DayOfTheWeek'>
      <h3>{day}</h3>
      <p>Almuerzo</p>
      <input name='lunch' value={lunch} onChange={(e) => saveLunch(e.target.value)} />
      <p>Cena</p>
      <input
        name='dinner'
        value={dinner}
        onChange={(e) => saveDinner(e.target.value)}
        className='dinner-input'
      />
    </div>
  )
}

export default Day
