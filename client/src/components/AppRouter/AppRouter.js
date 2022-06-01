import React, {useContext, useEffect,} from 'react';
import {Switch, Route} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../../routes";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
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
});

export default AppRouter;