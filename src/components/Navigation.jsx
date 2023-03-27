import React, {useContext} from 'react';
import {Context} from "../store/Context.jsx";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const Navigation = observer(() => {
    const {q} = useContext(Context)
    const {user} = useContext(Context)
    const navigate = useNavigate();
    const prevHandler = () => {
        if (q.position >= 1) {
            q.setPosition(q.position - 1)
        } else {
            return navigate('/')
        }
    }

    const nextHandler = () => {
        if ((q.questions.length - q.position) > 1) {
            q.setPosition(q.position + 1)
        } else {
            console.log(user.user)
            return navigate('/result')
        }
    }

    return (
        <div className="flex flex-end justify-between w-full pt-5">
            <button onClick={prevHandler}
                    className="border bg-red-300 w-max px-2 py-1 rounded-lg text-base text-gray-50 shadow-sm text-center hover:bg-red-400 transition-all duration-150">Назад
            </button>
            <button onClick={nextHandler}
                    className="border bg-indigo-300 w-max px-2 py-1 rounded-lg text-base text-gray-50 shadow-sm text-center hover:bg-indigo-400 transition-all duration-150">{(q.questions.length - q.position <= 1) ? "Отправить" : "Далее"}</button>
        </div>
    );
});

export default Navigation;