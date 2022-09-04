import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context";
import NavbarButton from "../button/NavbarButton";
import "../header/Header.scss"
import Menu from "../Menu/Menu";

const Header = ({isOpen, onChange}) => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__logo">
                    LOGO
                </Link>
                <div className="header__menu menu">
                    <Menu/>
                </div>
                <div className="header__button">
                    <NavbarButton onClick={logout} className="button button_blue">Exit</NavbarButton>
                </div>
            </div>
        </header>
    );
};

export default Header;