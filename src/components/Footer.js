import React from 'react';
import "../styles/layout/Footer.scss";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__logo">
                <img src="./LogoFooter.webp" alt="" />
            </div>
            <div className="footer__txt">
                2020 Kasa. © All rights reserved</div>
        </div>
    );
};

export default Footer;