import './App.css';
import Header from './Header/Header';

const App = () => {
  return (
    <div className='App'>
      <Header>Comidita</Header>
      <div className='Calendar'>
        <div className='DayOfTheWeek'>
          <p><b>Lunes</b></p>
          <p>Almuerzo</p>
          <p>Cena</p>
        </div>
        <div className='DayOfTheWeek'>
          <p><b>Martes</b></p>
          <p>Almuerzo</p>
          <p>Cena</p>
        </div>
        <div className='DayOfTheWeek'>
          <p><b>Miércoles</b></p>
          <p>Almuerzo</p>
          <p>Cena</p>
        </div>
        <div className='DayOfTheWeek'>
          <p><b>Jueves</b></p>
          <p>Almuerzo</p>
          <p>Cena</p>
        </div>
        <div className='DayOfTheWeek'>
          <p><b>Viernes</b></p>
          <p>Almuerzo</p>
          <p>Cena</p>
        </div>
      </div>
    </div>
  );
}

export default App;
