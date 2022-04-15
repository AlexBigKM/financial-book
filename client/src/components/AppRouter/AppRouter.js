import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../../routes";
import {Context} from "../../index";

const AppRouter = () => {
    const {user} = useContext(Context);
    return (
        <>
            <Switch>
                {user.isAuth && authRoutes.map(({path, Component}) =>
                    <Route key={path} exact path={path} component={Component} />
                )}
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} exact path={path} component={Component} />
                )}
            </Switch>
        </>
    );
};

export default AppRouter;