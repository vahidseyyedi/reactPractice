import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
const [increase , setIncrease] = useState(0);

const handel = () =>{
  setIncrease(increase +1)
}

const handelDecrease = () =>{
  setIncrease(increase - 1)

}
  return (
    <div className="App">
      <p>{increase}</p>
      <button onClick={handel}>Increase</button>
      <button onClick={handelDecrease}>Decrease</button>
    </div>
  )
}

export default App
