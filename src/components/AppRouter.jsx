import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "../router/index.jsx";


const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route => {
                return (<Route key={route.path} path={route.path} element={route.element()}/>)
            })}
        </Routes>
    );
};

export default AppRouter;
