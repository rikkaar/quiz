import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {Context} from "./store/Context.jsx";
import UserStore from "./store/UserStore.jsx";
import QuestionStore from "./store/QuestionStore.jsx";
import LoaderStore from "./store/LoaderStore.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Context.Provider value={{
        user: new UserStore(),
        q: new QuestionStore(),
        loader: new LoaderStore(),
    }}>
    <App/>
    </Context.Provider>
);
