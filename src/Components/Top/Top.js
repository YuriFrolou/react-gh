import React from "react";
import styles from "./Top.module.css";
import topFoto from "../../images/Top.png";

const Top = () => {
    return (
        <div className={styles.topSection} id="topSection">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md d-flex align-items-center">
                        <div className={`${styles.topWrapper}`}>
                            <h1 className={`${styles.topHeading}`}>Белорусское общество симуляционного обучения в
                                медицине</h1>
                            <p className={`${styles.topDescription}`}>БОСОМ объединяет профессионалов в области различных направлений медицины и ставит целью
                                широкое внедрение в медицинскую практику симуляционных технологий в медицинском
                                образовании, повышение квалификации медицинских работников, проведение
                                сертификации и аттестации, внедрение передовых технологий в сфере здравоохранения</p>
                        </div>
                    </div>
                    <div className="col-md p-0">
                        <img src={topFoto} alt="Foto" className={styles.mainFoto}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;