import React from 'react';
import {Link} from "react-router-dom";
import Description from "../components/Description.jsx";

const Main = () => {
    return (
        <div>
            <h1 className="text-lg text-center">Регистрация на бесплатный индивидуальный разбор</h1>
            <div className="flex justify-center items-center">
                <div className="title flex flex-col items-center gap-6">
                    <Description/>
                    <h1 className="text-center mt-10 text-2xl font-bold max-w-[350px]">Сюда по хорошему сделать бы небольшое описание</h1>
                    <Link className={"text-highlight hover:scale-125 duration-200"} to={"quiz"}>Перейти к регистрации</Link>
                </div>
            </div>
        </div>

    );
};

export default Main;