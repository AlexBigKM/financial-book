import React, {useContext} from 'react';
import {NavLink, useLocation} from "react-router-dom";
import ContentContainer from "../ContentContainer/ContentContainer";
import {DASHBOARD_ROUTE, HOMEPAGE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";
import {Context} from "../../index";
import "./NavBar.css";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    // const matchUrl = location.pathname === (LOGIN_ROUTE || REGISTRATION_ROUTE || DASHBOARD_ROUTE);

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.clear()
    }

    function renderNavBar() {
        switch (location.pathname) {
            case LOGIN_ROUTE:
                return <NavLink className={"navBar"} to={HOMEPAGE_ROUTE}>Back</NavLink>
                break;
            case REGISTRATION_ROUTE:
                return <NavLink className={"navBar"} to={HOMEPAGE_ROUTE}>Back</NavLink>
                break;
            case DASHBOARD_ROUTE:
                return <NavLink className={"navBar"} to={HOMEPAGE_ROUTE}>Exit</NavLink>
                break;
            default:
                return <NavLink className={"navBar"} to={LOGIN_ROUTE}>Login</NavLink>
        }
    }

    return (
        <div className={"navBarWrapper"}>
            <ContentContainer>
                {user.isAuth ?
                    <>
                        <NavLink className={"navBar"} to={HOMEPAGE_ROUTE}>Home</NavLink>
                        <NavLink className={"navBar"} to={DASHBOARD_ROUTE}>Dashboard</NavLink>
                        <NavLink className={"navBar"} to={HOMEPAGE_ROUTE} onClick={() => logOut()}>Exit</NavLink>
                    </> :
                        <NavLink className={"navBar"} to={LOGIN_ROUTE}>Login</NavLink>
                }
                {/*{renderNavBar()}*/}
                {/*{!matchUrl ?*/}
                {/*    <NavLink className={"navBar"} to={LOGIN_ROUTE}>Login</NavLink>*/}
                {/*    :*/}
                {/*    <NavLink className={"navBar"} to={HOMEPAGE_ROUTE}>Back</NavLink>*/}
                {/*}*/}
            </ContentContainer>
        </div>
    );
});

export default NavBar;