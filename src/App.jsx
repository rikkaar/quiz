import './App.css'
import AppRouter from "./components/AppRouter.jsx";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import { Toaster } from 'react-hot-toast';


function App() {
    return (
        <BrowserRouter>
            <div className='container mx-auto flex justify-center items-center py-5'>
                <div className="flex flex-col justify-center items-center w-4/5">
                    <AppRouter/>
                    <Toaster
                        toastOptions={{
                            duration: 3000,
                            style: {
                                background: '#000',
                                color: '#fff',
                            }}}
                    />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
