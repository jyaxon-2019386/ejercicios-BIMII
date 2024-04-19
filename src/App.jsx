import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function aumentar() {
    if (count < 200) {
      setCount(count + 1);
    } else {
      alert('limite de 200');
    }
  };

  function dismimuye() {
    if (count > -200) {
      setCount(count - 1);
    } else {
      alert('limite de -200');
    }
  };

  function aumentarEnOcho  ()  {
    if (count + 8 <= 200) {
      setCount(count + 8);
    } else {
      alert('limite de 200');
    }
  };

  function dismimuyeEnOcho() {
    if (count - 8 >= -200) {
      setCount(count - 8);
    } else {
      alert('limite de -200');
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={dismimuyeEnOcho}>Disminuye en 8</button>
        <button onClick={dismimuye}>Disminuye</button>
        <button >
          count is {count}
        </button>
        <button onClick={aumentar}>Aumenta</button>
        <button onClick={aumentarEnOcho}>Aumenta en 8</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
