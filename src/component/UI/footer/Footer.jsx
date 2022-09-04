import React from 'react';
import Menu from "../Menu/Menu";
import "./Footer.scss"

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="Footer__container">
                <Menu/>
            </div>
        </footer>
    );
};

export default Footer;