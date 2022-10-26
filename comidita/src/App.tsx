import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <p className='title'><b>Comidita</b></p>
      </div>
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
