import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom' ; 
import Home from './pages/Home' ;
import About from './pages/About' ;
import Profile from './pages/Profile' ;
import Signin from './pages/signin' ;
import Signup from './pages/signup' ;
import Header from './component/header';


function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home /> } />
    <Route path="/about" element={<About /> } />
    <Route path="/home" element={<Home /> } />
    <Route path="/profile" element={<Profile /> } />
    <Route path="/signin" element={<Signin /> } />
    <Route path="/signup" element={<Signup /> } />

  </Routes>
  </BrowserRouter>;
}

export default App
