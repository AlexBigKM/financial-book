import DashboardPage from "./pages/DashboardPage/DashboardPage";
import {DASHBOARD_ROUTE, HOMEPAGE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";

export const authRoutes = [
    {
        path: DASHBOARD_ROUTE,
        Component: DashboardPage
    },
]

export const publicRoutes = [
    {
        path: HOMEPAGE_ROUTE,
        Component: HomePage
    },
    {
        path: LOGIN_ROUTE,
        Component: AuthPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: AuthPage
    },
]