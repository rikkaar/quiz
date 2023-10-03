import React, {useContext} from 'react';
import {Context} from "../store/Context.jsx";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import Input from "./Input.jsx";
import QuizList from "./QuizList.jsx";


const Questions = observer(() => {
    const {q} = useContext(Context)
    const {user} = useContext(Context)
    const {loader} = useContext(Context)
    const navigate = useNavigate();
    return (
        <div className={"w-full relative"}>
            <h3 className="text-center text-xl min-[350px]:text-2xl font-bold">{q.questions[q.position].title}</h3>

            <form
                className={'pt-3 pb-1 w-full'}>
                <div className="w-full flex flex-col items-center gap-3">
                    {(q.questions[q.position]?.variants)
                        ? <QuizList key={q.position}/>
                        : <Input key={q.position}Это/>
                    }
                </div>
                <div className="flex flex-end justify-between w-full pt-5">
                    <button onClick={e => q.prevHandler(e, q, navigate)}
                            className="border bg-red-300 w-max px-2 py-1 rounded-lg text-base text-gray-50 shadow-sm text-center hover:bg-red-400 transition-all duration-150">Назад
                    </button>
                    <button onClick={e => q.nextHandler(e, q, user, loader, navigate)}
                            className="border bg-indigo-300 w-max px-2 py-1 rounded-lg text-base text-gray-50 shadow-sm text-center hover:bg-indigo-400 transition-all duration-150">{(q.questions.length - q.position <= 1) ? "Отправить" : "Далее"}</button>
                </div>
            </form>
        </div>
    );
});

export default Questions;