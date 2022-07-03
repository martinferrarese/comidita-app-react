import './App.css';
import Calendar from './Calendar/Calendar';

function App() {
  return (
    <div data-testid="app" className="App">
      <p data-testid="appTitle">Comidita</p>
      <Calendar />
    </div>
  );
}

export default App;
