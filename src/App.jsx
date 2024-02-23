import { useState } from 'react'
import './App.css'
import './index.css'
import { Routes, Route, Link } from 'react-router-dom'
import Blue from './components/Blue'
import Red from './components/Red'
import Home from './components/Home'

function App() {


  return (
    <>
    <div id="container">
      <h1> </h1> 
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">This is blue</Link>
        <Link to="/red">This is red</Link>
      </div>
      <div id="main-section">
        <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/blue" element={<Blue/>} />
          <Route path="/red" element={<Red/>}/>
        </Routes>
        </div>
    </div>
    </>
  )
}

export default App
