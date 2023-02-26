import React from 'react';
import styles from "./News.module.css";
import NewsInMedicine from "../../images/newInMedicine.jpg";
import Relations from "../../images/relations.jpg";
import Digital from "../../images/digital.jpg";
import MyCarousel from '../MyCarousel/MyCarousel';
import {Link} from "react-router-dom";
import Cards from "../Cards/Cards";

const data = [
    {
        image: NewsInMedicine,
        title: "Новые технологии в медицине",
        description: "Подробнее...",
        date:'12.02.2023',
    },
    {
        image: Relations,
        title: "Новые технологии в медицине",
        description: "Подробнее...",
        date:'12.02.2023',
    },
    {
        image: Digital,
        title: "Новые технологии в медицине",
        description: "Подробнее...",
        date:'12.02.2023',
    }
];


const News = () => {
    return (
        <div className={styles.news} id="news">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h2 className={styles.newsHeading}>Новости и события</h2>
                    </div>
                </div>
                <div className="row">
                        <Cards data={data} />
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="/" className={styles.allNews}>Все новости</Link>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default News;








