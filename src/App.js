import React, {useEffect, useState} from "react";
import "./style/App.scss";
import "./style/Style.scss";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./component/AppRouter";
import {AuthContext} from "./context";
import Header from "./component/UI/header/Header";
import Footer from "./component/UI/footer/Footer";

function App() {

    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setLoading(false);
    }, [])

    return (
        <div className="wrapper">
            <AuthContext.Provider value={{isAuth, setIsAuth, isLoading}}>
                <BrowserRouter>
                    <Header isOpen={isOpen} onChange={setIsOpen}/>
                    <main>
                        <AppRouter/>
                    </main>
                    <Footer isOpen={isOpen} onChange={setIsOpen}/>
                </BrowserRouter>
            </AuthContext.Provider>
        </div>
    )
}

export default App;
