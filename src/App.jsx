import './App.css'
import AppRouter from "./components/AppRouter.jsx";
import {BrowserRouter} from "react-router-dom";
import React, {useContext} from "react";
import { Toaster } from 'react-hot-toast';
import Loader from "./components/UI/Loader/Loader.jsx";
import Modal from "./components/UI/Modal/Modal.jsx";
import {Context} from "./store/Context.jsx";


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
                    <Modal><Loader/></Modal>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
