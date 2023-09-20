import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import Card  from '../Card';
import Footer from '../Footer';
function Home(){
    return(
        <>
        <Navbar />
        <HeroSection />
        <Card />
        <Footer />
        </>
    );
}

export default Home;