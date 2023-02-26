import React, {useEffect, useState} from "react";
import {
    BrowserRouter,
    HashRouter,
    Route, Routes,
    NavLink
} from 'react-router-dom';

import styles from "./Router.module.css";
import Exit from "../../images/exit.png";
import Header from "../Header/Header";
import Home from "../../Pages/Home/Home";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import BackToTopButton from "../BackToTopButton/BackToTopButton";


function Router() {
    const [authed, setAuthed] = useState(true);
    return (
        // <BrowserRouter>
        <HashRouter>
            <Header/>
            <div style={{minHeight:'100vh'}}>
            <Routes>
                <Route exec path="/" element={<Home/>}/>
                {/*<Route path="/" element={authed?<Chat/>: <Login/>}/>*/}
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<h2 className={styles.h2}>Страница не найдена</h2>}/>
            </Routes>
            </div>
            <BackToTopButton/>
            <Footer/>

        {/* </BrowserRouter> */}
        </HashRouter>
    )
}

export default Router;