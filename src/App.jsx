import { useState } from 'react'
import './index.css'
import { Routes, Route, Link } from 'react-router-dom'
import Blue from './components/Blue'
import Red from './components/Red'
import Home from './components/Home'
import Yellow from './components/Yellow'

function App() {


  return (
    <>
    <div id="container">
      <h1> </h1> 
      <div id="navbar">
        <Link className='home' to="/">Home</Link>
        <Link className='blue' to="/blue">Blue</Link>
        <Link className='red' to="/red">Red</Link>
        <Link className='yellow' to="/yellow">Yellow </Link>
      </div>
      <div id="main-section">
        <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/blue" element={<Blue/>} />
          <Route path="/red" element={<Red/>}/>
          <Route path="/yellow" element={<Yellow/>}/>
        </Routes>
        </div>
        <div className='footer'> 
        <Link className='home' to="/">Home</Link>
        <Link className='blue' to="/blue">Blue</Link>
        <Link className='red' to="/red">Red</Link>
        <Link className='yellow' to="/yellow">Yellow </Link>
        </div>
    </div>
    </>
  )
}

export default App
