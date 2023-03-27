import './App.css'
import AppRouter from "./components/AppRouter.jsx";
import {BrowserRouter} from "react-router-dom";
import React from "react";


function App() {
    return (
        <BrowserRouter>
            <div className='container mx-auto flex justify-center items-center py-5'>
                <div className="flex flex-col justify-center items-center">
                    <AppRouter/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
