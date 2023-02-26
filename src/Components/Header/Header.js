import React from "react";
import Bosom from "../../images/Bosom.png";
import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";
import Search from "../../images/search.png";
import User from "../../images/user.png";
import Exit from "../../images/exit.png";

const Header = ({authed}) => {
    return (
        <header className={styles.header} id="header">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink to="/" className={`navbar-brand ${styles.logo}`}><img src={Bosom} alt="Bosom"/></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-lg-flex justify-content-lg-between" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-2 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" aria-current="page">Главная</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                         aria-expanded="false">
                                    Общество
                                </div>
                                <ul className="dropdown-menu">
                                    <li><NavLink to="/" className="dropdown-item">Устав</NavLink></li>
                                    <li><NavLink to="/" className="dropdown-item">Структура</NavLink></li>
                                    <li><NavLink to="/" className="dropdown-item">Нормативные документы</NavLink></li>
                                    <li><NavLink to="/" className="dropdown-item">Компании-партнеры</NavLink></li>
                                    <li><NavLink to="/" className="dropdown-item">Вступить в общество</NavLink></li>
                                    <li><NavLink to="/" className="dropdown-item">Оплатить взносы</NavLink></li>
                                    <li><NavLink to="/" className="dropdown-item">Фотогалерея</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                         aria-expanded="false">
                                    Обучение
                                </div>
                                <ul className="dropdown-menu">
                                    <li><NavLink to="/" className="dropdown-item">Центры</NavLink></li>
                                    <li><NavLink to="/" className="dropdown-item">Курсы</NavLink></li>
                                    <li><NavLink to="/" className="dropdown-item">Учебные материалы</NavLink></li>
                                    <li><NavLink to="/" className="dropdown-item">Сертификаты</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" aria-current="page">Новости</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link" aria-current="page">Контакты</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex ms-2 mb-2" role="search">
                            <input className={`me-2 ${styles.headerSearchInput}`} type="search" placeholder="Поиск" aria-label="Search"/>
                                <button className={`btn ${styles.headerSearchBtn}`} type="submit"><img src={Search} alt="search"/></button>
                        </form>
                        <div className={`nav-item ms-2 mb-2 ${styles.headerAccountIcon}`}>
                            <NavLink to="/" className="nav-link" aria-current="page" ><img src={authed?User:Exit} alt="account"/></NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;