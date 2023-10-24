import React from 'react';
import {useNavigate} from "react-router-dom";
import Description from "../components/Description.jsx";


const Main = () => {
    let navigate = useNavigate()
    return (
        <div>
            <h1 className="title">Предзапись на курс instaКРЕАТОР</h1>
            <div className="flex justify-center items-center">
                <div className="flex flex-col items-center gap-6">
                    <Description/>
                    <button className={"bg-gray-100 p-3 rounded-xl text-highlight text-lg hover:scale-125 duration-200"} onClick={() => navigate('/quiz')}>Перейти к анкете</button>
                </div>
            </div>
        </div>

    );
};

export default Main;