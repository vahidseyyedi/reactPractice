import { useState } from 'react'
import './App.css'
import Header from './component/header'
import Login from './component/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
      <header><Header /></header>
      <main>
      <div className='mainBox'></div>
      <div className='list'></div>
      </main>
    </body>
  )
}

export default App
