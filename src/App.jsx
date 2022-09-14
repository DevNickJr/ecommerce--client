import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Products from './pages/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Products />
    </div>
  )
}

export default App
