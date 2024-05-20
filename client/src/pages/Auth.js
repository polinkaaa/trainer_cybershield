import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { login, registration } from "../http/userAPI";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

//На всякий случай
//Когда служба доставки соберет все необходимые товары, передаст курьеру, обозначит примерное время доставки и обновит статус заказа — данные на сервер отправятся методом PUT.
//Если служба доставки позволяет отслеживать маршрут движения курьера с заказом на карте, то координаты заказа обновляются методом PATCH.
//Если покупатель передумал сразу после отправки заказа, он может отменить его, отправив запрос DELETE — в этом случае в базе данных не сохранится никакой информации о несостоявшейся покупке. Но если интернет-магазин хочет хранить историю заказов, даже отмененных, он будет использовать метод POST.

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    const click = async () => {
        if (isLogin) {
            const response = await login(email, password)
            console.log(response)
        } else {
            const response = await registration(nickname, email, password)
            console.log(response)
        }
    }
    return (
        <div className="bg">
            {isLogin ?
            <div>
                <h1 className="title_enter">Вход</h1>
                <form className="form_auth_style" action="#" method="post">
                    <input type="email" className="form_login" name="auth_email" placeholder="Введите Ваш email" value={email} onChange={e=>setEmail(e.target.value)} required />
                    <input type="password" className="form_login" name="auth_pass" placeholder="Введите пароль" value={password} onChange={e=>setPassword(e.target.value)} required />
                    <button className="form_auth_button" type="submit" name="form_auth_submit" onClick={click}>Войти</button>
                </form>
                <label className="enter_lable">Нет аккаунта?<NavLink className="enter_link" to={REGISTRATION_ROUTE}>Авторизация</NavLink></label>
            </div>
            : <div>
                <h1 className="title_reg">Регистрация</h1>
                <form className="form_auth_style_reg" action="#" method="post">
                    <div className="flex">
                        <label>Введите имя</label>
                        <input type="text" className="form_login_reg" name="auth_nickname" placeholder="Введите ник" value={nickname} onChange={e=>setNickname(e.target.value)} required />
                    </div>
                    <div className="flex">
                        <label>Введите email</label>
                        <input type="email" className="form_login_reg" name="auth_email" placeholder="Введите email" value={email} onChange={e=>setEmail(e.target.value)} required />
                    </div>
                    <div className="flex">
                        <label>Введите пароль</label>
                        <input type="password" className="form_login_reg" name="auth_pass" placeholder="Введите пароль" value={password} onChange={e=>setPassword(e.target.value)} required />
                    </div>
                    <button className="form_auth_button_reg" type="submit" name="form_auth_submit" onClick={click}>Зарегистрироваться</button>
                </form>
                <label className="enter_lable">Есть аккаунт?<NavLink className="enter_link" to={LOGIN_ROUTE}>Войти</NavLink></label>
            </div>
            }
        </div>
    );
};

export default Auth;