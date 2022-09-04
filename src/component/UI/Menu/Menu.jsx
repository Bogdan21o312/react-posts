import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {items} from "./MenuItems";
import "./Menu.scss";
import "../header/Header.scss"

const Menu = () => {

    return (
        <nav className="menu__body">
            <ul className="menu__list">
                {items.map((item, index) => (
                    <li className="menu__item">
                        <Link className="menu__link" to={item.itemLink} key={index}>
                            {item.itemText}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;