import React from 'react';

import Home from './Component/Routes/Home';
import {Route, Routes} from 'react-router-dom';
import { Services } from './Component/Routes/Services';
import { Products } from './Component/Routes/Products';
import SignUp from './Component/Routes/SignUp';

function App() {
  return (
    <>
    <Routes>

    
        
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path='sign-up' element={<SignUp />}/>
        <Route path="/products" element={<Products />} />
        
    </Routes>

    </>
  )
}

export default App;