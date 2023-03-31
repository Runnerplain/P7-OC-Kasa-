import React from 'react';
import Navbar from '../components/Navbar';
import "../styles/pages/About.scss"
import Main from '../components/Main';
import BannerAbout from '../components/BannerAbout';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <Main>
            <Navbar />
            <BannerAbout />
            </Main>
            <Footer />    
        </div>
    );
};

export default About;