// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Info from './components/Info'
import Buttons from './components/Buttons'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="card">
      <Info />
      <Buttons />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App
