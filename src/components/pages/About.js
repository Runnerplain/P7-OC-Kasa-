import React from 'react';
import Navbar from '../Navbar';
import "../../styles/pages/About.scss";
import Main from '../Main';
import BannerAbout from '../BannerAbout';
import Footer from '../Footer';

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