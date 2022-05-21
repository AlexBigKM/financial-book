import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import UserStore from "./store/UserStore";
import RowsStore from "./store/RowsStore";
import ModalStore from "./store/ModalStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        rowsStore: new RowsStore(),
        modalsStore: new ModalStore(),
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);
