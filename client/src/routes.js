import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Chat from "./pages/Chat";
import TaskPage from "./pages/TaskPage";
import Tasks from "./pages/Tasks";
import Theory from "./pages/Theory";
import User from "./pages/User";
import { ADMIN_ROUTE, CHAT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, TASKS_ROUTE, THEORY_ROUTE, USER_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: USER_ROUTE,
        Component: User
    },
    {
        path: CHAT_ROUTE,
        Component: Chat
    },
]
export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: TASKS_ROUTE,
        Component: Tasks
    },
    {
        path: TASKS_ROUTE + '/:id',
        Component: TaskPage
    },
    {
        path: THEORY_ROUTE,
        Component: Theory
    },
]