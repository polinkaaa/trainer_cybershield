import { useContext } from "react"
import { Context } from ".."
import '../assets/main.css'
import { ADMIN_ROUTE, CHAT_ROUTE, LOGIN_ROUTE, TASKS_ROUTE, THEORY_ROUTE, USER_ROUTE } from "../utils/consts"
import {observer} from "mobx-react-lite"
import { useNavigate } from "react-router-dom"

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()
    return (
        <header className="header">
            <nav>
                <ul className="header-nav">
                    <li><a href={USER_ROUTE} className="logo"></a></li>
                    <li onClick={()=>history(USER_ROUTE)}>Профиль</li>
                    <li onClick={()=>history(THEORY_ROUTE)}>Теория</li>
                    <li onClick={()=>history(TASKS_ROUTE)}>Задачи</li>
                    <li onClick={()=>history()}>Кроссворд</li>
                    <li onClick={()=>history(CHAT_ROUTE)}>Чат</li>
                    <li onClick={()=>history()}>О нас</li>
                    <li><a onClick={()=>history(LOGIN_ROUTE)}>Выйти</a></li>
                    {(user.isAuth) ? <li><a onClick={()=>history(ADMIN_ROUTE)}>Админ панель</a></li>:<div></div>}
                </ul>
            </nav>
        </header>
    )
})

export default NavBar