
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <h1>Weather App</h1>
      <Weather defaultCity="London"/>
      <footer>
      <small>
          <a
            href="https://github.com/Abuk974/fineapp.git"
            target="-blank"
            >Open-source code</a
          > 
         Coded by  Abuk Sedonia 
        </small>
        </footer>
        </div>
    </div>
  );
}

export default App;
