import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Navbarcomp from './Components/Navbarcomp';
import Count from './Components/Count';

const App = () => {
  return (
    <>
      <Router>
        <Navbarcomp/>
        <Count/>
        <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About />} />
<Route path='/skills' element={<Skills />} />
<Route path='/project' element={<Project />} />
<Route path='/contact' element={<Contact />} />
<Route path='/Navbarcomp' element={<Navbarcomp />} />
        </Routes>
        </Router>
    </>
  )
}

export default App
