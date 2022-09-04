import React from 'react';
import Menu from "../component/UI/Menu/Menu";
import "../style/Pages/Home.scss"

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__content">
                    <h1 className="home__title">Hello</h1>
                    <h2 className="home__sub-title">Many functions are implemented in this simple program</h2>
                    <p className="home__text">For example, Hooks, API, Components, Arrays, Modules, Paginations!!!</p>
                    <p className="home__sub-text">Just follow the links below and watch</p>
                    <Menu/>
                    <p className="home__sub-text">If you do not enter the address correctly, you will be redirected to the Error page only tssss 🤫</p>
                </div>
            </div>
        </div>
    );
};

export default Home;