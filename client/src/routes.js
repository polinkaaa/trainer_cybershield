import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Chat from "./pages/Chat";
import TaskPage from "./pages/TaskPage";
import Tasks from "./pages/Tasks";
import Theory from "./pages/Theory";
import User from "./pages/User";
import Main from "./pages/Main";
import TheoryCiphers from "./pages/TheoryCiphers";
import TheoryAnalisis from "./pages/TheoryAnalisis";
import TheoryAlgoruthms from "./pages/TheoryAlgoruthms";
import TheoryEmbedding from "./pages/TheoryEmbedding";
import TheoryDetection from "./pages/TheoryDetection";
import TheoryApplication from "./pages/TheoryApplication";
import About from "./pages/About";

import { ADMIN_ROUTE, CHAT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, TASKS_ROUTE, THEORY_ROUTE, USER_ROUTE, MAIN_ROUTE, ABOUT_ROUTE, THEORY_CIPHERS_ROUTE, THEORY_ALGORITHMS_ROUTE, THEORY_ANALISIS_ROUTE, THEORY_EMBEDDING_ROUTE, THEORY_DETECTION_ROUTE, THEORY_APPLICATION_ROUTE } from "./utils/consts";

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
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: THEORY_CIPHERS_ROUTE,
        Component: TheoryCiphers
    },
    {
        path: THEORY_ALGORITHMS_ROUTE,
        Component: TheoryAlgoruthms
    },
    {
        path: THEORY_ANALISIS_ROUTE,
        Component: TheoryAnalisis
    },
    {
        path: THEORY_EMBEDDING_ROUTE,
        Component: TheoryEmbedding
    },
    {
        path: THEORY_DETECTION_ROUTE,
        Component: TheoryDetection
    },
    {
        path: THEORY_APPLICATION_ROUTE,
        Component: TheoryApplication
    },
]