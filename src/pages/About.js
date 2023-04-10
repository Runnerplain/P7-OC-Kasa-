import React from 'react';
import Navbar from '../components/Navbar';
import "../styles/pages/About.scss"
import Main from '../components/Main';
import BannerAbout from '../components/BannerAbout';
import DescriptionPan from '../components/layout/DescriptionPan';
import Footer from '../components/Footer';

const About = (props) => {
    return (
        <div>
            <Main>
            <Navbar />
            <BannerAbout />
            <DescriptionPan title='Fiabilité' content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
            <DescriptionPan title='Respect' content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
            <DescriptionPan title='Service' content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
            <DescriptionPan title='Sécurité' content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </Main>
            <Footer />    
        </div>
    );
};

export default About;