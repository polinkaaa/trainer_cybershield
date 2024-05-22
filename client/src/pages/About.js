import React from "react";
import NavBar from "../components/NavBar";
import '../assets/main.css'

const About = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
                <h2 className="programmer">Разработчик: Кондратьева Полина</h2>
                <div className="my_photo"></div>
                <h3>Студентка 4 курса Ярославского государственного технического университета.</h3>
                <h3>Данный веб-сайт разработан в рамках дипломной работы.</h3>
                <h3 className="info_ispring">Для обеспечения возможности проходить цельный курс по криптографии и стеганографии, например, при поточном обучении, был разработан аналогичный тренажер CyberShield на iSpring в рамках олимпиады ИТ-Планета: <a href="https://polinkaaa.github.io/CyberShield_iSpring/index.html">CyberShield iSpring</a></h3>
            </div>
        </div>
    );
};

export default About;