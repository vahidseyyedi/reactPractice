import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { About } from './pages/about'
import { Home } from './pages/home'
import {Header} from './component/header'
import { Footer } from './component/footer'
import {BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
