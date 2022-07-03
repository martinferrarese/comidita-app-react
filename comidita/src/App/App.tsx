import './App.css';
import Calendar from './Calendar/Calendar';

function App() {
  return (
    <div data-testid="app" className="App">
      <h1 data-testid="appTitle">Comidita</h1>
      <Calendar />
    </div>
  );
}

export default App;
