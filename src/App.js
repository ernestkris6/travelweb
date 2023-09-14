import React from 'react';
import Navbar from './Component/Navbar';

import Home from './Routes/Home';
import About from './Routes/About';

import {Route, Routes} from 'react-router-dom';

const App = ()=> {
  return (
    <>
    <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        
        
    </Routes>

    </>
  )
}

export default App;