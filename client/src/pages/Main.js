import React from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom"
import {observer} from "mobx-react-lite"
import { CHAT_ROUTE, TASKS_ROUTE, THEORY_ROUTE } from "../utils/consts";

const Main = observer(() => {
    const history = useNavigate()
    return (
        <div>
            <NavBar />
            <div className="menu_flex">
                    <div className="menu_box" onClick={()=>history(THEORY_ROUTE)}>
                        <p className="menu_title">Изучай теорию</p>
                        <div className="menu_photo_1"></div>
                    </div>
                    <div className="menu_box" onClick={()=>history(TASKS_ROUTE)}>
                        <p className="menu_title">Решай задания</p>
                        <div className="menu_photo_2"></div>
                    </div>
                    <div className="menu_box" onClick={()=>history(CHAT_ROUTE)}>
                        <p className="menu_title">Общайся в чате</p>
                        <div className="menu_photo_3"></div>
                    </div>
                </div>
        </div>
    );
});

export default Main;