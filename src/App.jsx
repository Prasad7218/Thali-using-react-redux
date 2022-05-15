import React from 'react'
import './App.css'
import Thali from './Thali'
import Checkout from './Checkout'

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <nav className="Thali">
        <Link to="/home"><h1><b>Home</b></h1></Link>
        <Link to="/checkout"><h2><b>Check Out</b></h2></Link>
      </nav>
      <Routes>
      <Route path="/" element={<Thali/>}/>
      <Route path="/checkout" element={<Checkout />}/>
      <Route path="/home" element={<Thali />}/>
        </Routes>


    </div>
    </BrowserRouter>
  )
}

export default App
