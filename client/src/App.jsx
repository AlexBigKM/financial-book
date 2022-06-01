import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import CreateModal from "./components/Modals/CreateModal";
import {observer} from "mobx-react-lite";
// import './App.css';
import {Context} from "./index";
import {check} from "./http/userAPI";
// import Loader from "./components/Loader/Loader";


const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    // if (loading) {
    //     return <Loader/>
    // }

    return (
        <Router>
            <CreateModal/>
            <NavBar/>
            <AppRouter/>
        </Router>
    );
})

export default App;
