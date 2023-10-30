
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setContador] = useState(0);

  const manejarCick = () => {
    console.log('Click');
    setContador(numClics + 1);
  }

  const manejarReinicio = () => {
    console.log('Reinicio');
    setContador(0);
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1 className='App-title'>Contador de Clics</h1>
      </div>
      <div className='App-container'>
        <Contador 
          numClics={numClics}
        />
        <Boton 
          texto='Clic'
          esBotonClick={true}
          manejarCick={manejarCick}
        />
        <Boton 
          texto='Reiniciar'
          esBotonClick={false}
          manejarCick={manejarReinicio}
        />
      </div>
    </div>
  );
}

export default App;
