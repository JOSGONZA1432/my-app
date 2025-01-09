import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import login from './login.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div classNamd='App'>
      hola 
<login />
    </div>
  )
}

export default App
