import React, {useContext} from 'react';
import {NavLink, useLocation} from "react-router-dom";
import ContentContainer from "../ContentContainer/ContentContainer";
import {DASHBOARD_ROUTE, HOMEPAGE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";
import {Context} from "../../index";
import styles from "./NavBar.css";
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
                return <NavLink className={styles.navBar} to={HOMEPAGE_ROUTE}>Back</NavLink>
                break;
            case HOMEPAGE_ROUTE:
                return <NavLink className={styles.navBar} to={LOGIN_ROUTE}>Login</NavLink>
        }
    }

    return (
        <div className={styles.navBarWrapper}>
            <ContentContainer>
                {user.isAuth ?
                    <>
                        <NavLink className={styles.navBar} to={HOMEPAGE_ROUTE}>Home</NavLink>
                        <NavLink className={styles.navBar} to={DASHBOARD_ROUTE}>Dashboard</NavLink>
                        <NavLink className={styles.navBar} to={HOMEPAGE_ROUTE} onClick={() => logOut()}>Exit</NavLink>
                    </> :
                    // <NavLink className={styles.navBar} to={LOGIN_ROUTE}>Login</NavLink>
                    renderNavBar()
                }
            </ContentContainer>
        </div>
    );
});

export default NavBar;