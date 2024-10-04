import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './assets/Component/Nav'
import Home from './assets/Component/Home'
import User from './assets/Component/User'
import About from './assets/Component/About'

function App() {
  return (
    <>  
       <Nav/>
       <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/User' element={<User/>}/>
          <Route path='/About' element={<About/>}/>
       </Routes>
    </>
  )
}

export default App
