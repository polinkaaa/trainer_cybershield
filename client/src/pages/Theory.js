import React from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom"
import {observer} from "mobx-react-lite"
import { THEORY_ALGORITHMS_ROUTE, THEORY_ANALISIS_ROUTE, THEORY_APPLICATION_ROUTE, THEORY_CIPHERS_ROUTE, THEORY_DETECTION_ROUTE, THEORY_EMBEDDING_ROUTE } from "../utils/consts";

const Theory = observer(() => {
    const history = useNavigate()
    return (
        <div>
            <NavBar />
            <div className="container">
                <h1>Теория</h1>
                <h3 className="theory_themes">Криптография</h3>
                <div className="theory_flex">
                    <div className="theory_box" onClick={()=>history(THEORY_CIPHERS_ROUTE)}>
                        <p>Шифры</p>
                        <div className="theory_photo_1"></div>
                    </div>
                    <div className="theory_box" onClick={()=>history(THEORY_ALGORITHMS_ROUTE)}>
                        <p>Математические алгоритмы</p>
                        <div className="theory_photo_2"></div>
                    </div>
                    <div className="theory_box" onClick={()=>history(THEORY_ANALISIS_ROUTE)}>
                        <p>Криптографический анализ</p>
                        <div className="theory_photo_3"></div>
                    </div>
                </div>
                <h3 className="theory_themes">Стеганография</h3>
                <div className="theory_flex bottom">
                    <div className="theory_box" onClick={()=>history(THEORY_EMBEDDING_ROUTE)}>
                        <p>Техники встраивания</p>
                        <div className="theory_photo_4"></div>
                    </div>
                    <div className="theory_box" onClick={()=>history(THEORY_DETECTION_ROUTE)}>
                        <p>Методы обнаружения</p>
                        <div className="theory_photo_5"></div>
                    </div>
                    <div className="theory_box" onClick={()=>history(THEORY_APPLICATION_ROUTE)}>
                        <p>Применение</p>
                        <div className="theory_photo_6"></div>
                    </div>
                </div>
                
            </div>
        </div>
    );
});

export default Theory;