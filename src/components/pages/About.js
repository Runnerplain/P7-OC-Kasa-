import React from 'react';
import Navbar from '../Navbar';
import "../../styles/pages/About.scss";
import Main from '../Main';
import BannerAbout from '../BannerAbout';

const About = () => {
    return (
        <div>
            <Main>
            <Navbar />
            <BannerAbout />
            </Main>       
        </div>
    );
};

export default About;