import React, {useContext, useState} from 'react';
import {DASHBOARD_ROUTE, HOMEPAGE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {login, registration} from "../../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

import styles from './AuthPage.css';

const AuthPage = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('b@mail.com');
    const [password, setPassword] = useState('1111');

    const click = async (e) => {
        e.preventDefault()
        try {
            let data;
            if(isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(DASHBOARD_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <div className={styles.authWrapper}>
            <div className={styles.authModalWrapper}>
                <form className={styles.authModalForm} onSubmit={click}>
                    <div className={styles.inputWrapper}>
                        <label className={styles.authInputLabel}>Email
                        <input
                            className={styles.authInput}
                            type={"email"}
                            autoComplete={"off"}
                            placeholder={"abc@gmail.com"}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        </label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <label className={styles.authInputLabel}>Password
                        <input
                            className={styles.authInput}
                            type={"password"}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        </label>
                    </div>
                    {isLogin ?
                        <NavLink className={styles.authRegistrationLink} to={REGISTRATION_ROUTE}>Registration</NavLink> :
                        <NavLink className={styles.authRegistrationLink} to={LOGIN_ROUTE}>Log in</NavLink>
                    }

                    <button
                        className={styles.authBtn}
                        type={"submit"}
                    >
                        {isLogin ? 'Log In' : 'Registration'}
                    </button>
                </form>
            </div>
        </div>
    );
});

export default AuthPage;