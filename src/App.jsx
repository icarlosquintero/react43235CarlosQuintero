import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <a>
          <img src='../img/Logo.jpg' className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Ecommerce</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Agregado {count}
        </button>
      </div>
      <p className="read-the-docs">
        ¡Muchas gracias por tu visita!
      </p>
    </>
  )
}

export default App
