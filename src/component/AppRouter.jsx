import React, {useContext} from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Login from "./Login";
import {AuthContext} from "../context";
import Loader from "./UI/loanging/Loader";
import Home from "../pages/Home";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                <Route path={"login/"} element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route exact path="/posts" element={<Posts/>}/>
                <Route exact path="/posts/:id" element={<PostIdPage/>}/>
                <Route path="/error" element={<Error/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/error" replace/>}
                />
            </Routes>
            :
            <Routes>
                <Route exact path="/login" element={<Login/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/login" replace/>}
                />
            </Routes>
    )
        ;
};

export default AppRouter;