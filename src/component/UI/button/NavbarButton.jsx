import React from "react";
import classes from './MyButton.module.scss';

const NavbarButton = ({children, ...props}) => {

    return (
        <button {...props} className={classes.navBarButton}>
            {children}
        </button>
    );

};

export default NavbarButton;