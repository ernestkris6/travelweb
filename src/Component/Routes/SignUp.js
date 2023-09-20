import React from 'react';
import '../../App.css';

import Footer from '../Footer';
import Navbar from '../Navbar';

export const SignUp = () => {
  return (

    <div>

      <Navbar />
          <div className='sign-up'>Sign Up</div>

          <div>
            <Footer />
          </div>
    </div>
    
  )
}

export default SignUp;
