import './App.css';
import Calendar from './Calendar/Calendar';
import Day from './Calendar/Day/Day';
import Header from './Header/Header';

const App = () => {
  return (
    <div className='App'>
      <Header>Comidita</Header>
      <Calendar>
        <Day day={"Lunes"}></Day>
        <Day day={"Martes"}></Day>
        <Day day={"Miércoles"}></Day>
        <Day day={"Jueves"}></Day>
        <Day day={"Viernes"}></Day>
      </Calendar>
    </div>
  );
}

export default App;
