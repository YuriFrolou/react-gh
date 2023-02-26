import React from 'react';
import styles from "./Footer.module.css";
import Bosom from "../../images/Bosom.png";
import {Link, NavLink} from "react-router-dom";
import Facebook from "../../images/facebook.png";
import Instagram from "../../images/instagram.png";
import Youtube from "../../images/youtube.png";
import Phone from "../../images/telephone.png";
import Mail from "../../images/envelope.png";

const Footer = () => {
    return (
        <footer className={styles.footer} id="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-2">
                        <NavLink to="/" className={styles.footerLogo}><img src={Bosom} alt="Bosom"/></NavLink>
                    </div>
                    <div className="col-12 col-md-3 offset-md-1">
                        <h5 className="footer-heading">Общество</h5>
                        <ul className="footer-list">
                            <li className="footer-list__item"><NavLink to="/">Устав</NavLink></li>
                            <li className="footer-list__item"><NavLink to="/">Структура</NavLink></li>
                            <li className="footer-list__item"><NavLink to="/"> Нормативные документы</NavLink></li>
                            <li className="footer-list__item"><NavLink>Вступить в общество</NavLink></li>
                            <li className="footer-list__item"><NavLink>Оплатить взносы</NavLink></li>
                            <li className="footer-list__item"><NavLink>Фотогалерея</NavLink></li>
                        </ul>
                    </div>

                    <div className="col-12  col-md-3">
                        <h5 className="footer-heading">Обучение</h5>
                        <ul className={styles.footerList}>
                            <li className="footer-list__item"><NavLink to="/">Центры</NavLink></li>
                            <li className="footer-list__item"><NavLink to="/">Курсы</NavLink></li>
                            <li className="footer-list__item"><NavLink to="/"> Учебные материалы</NavLink></li>
                            <li className="footer-list__item"><NavLink>Сертификаты</NavLink></li>
                        </ul>
                    </div>

                    <div className="col-12  col-md-3">
                        <h5 className="footer-heading">Контакты</h5>
                        <ul className={styles.footerList}>
                            <li className="footer-list__item mb-2">
                                <Link to="tel:+375(17)6543210" className="d-flex"><img src={Phone} alt="phone"/>+375(17)6543210</Link>
                            </li>
                            <li className="footer-list__item mb-3 d-flex">
                                <Link to="mailto:test@mail.ru" className="d-flex"><img src={Mail} alt="email"/>test@mail.ru</Link>
                            </li>
                            <li className="footer-list__item d-flex justify-content-center justify-content-md-start">

                                <Link to="https://www.instagram.com/" rel="nofollow noopener noreferrer" target="_blank"
                                      class="everywhere-button">
                                    <img src={Instagram} alt="Instagram"/>
                                </Link>

                                <Link to="https://www.facebook.com/" rel="nofollow noopener noreferrer" target="_blank"
                                      class="everywhere-button">
                                    <img src={Facebook} alt="Facebook"/>
                                </Link>

                                <Link to="https://www.youtube.com/" rel="nofollow noopener noreferrer" target="_blank"
                                      class="everywhere-button">
                                    <img src={Youtube} alt="Youtube"/>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;