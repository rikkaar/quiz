import React, {useContext} from 'react';
import {Context} from "../store/Context.jsx";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

const QuizList = () => {
    const {q} = useContext(Context)
    const {user} = useContext(Context)
    const {loader} = useContext(Context)
    const navigate = useNavigate();

    const handleChoice = (e) => {
        user.setUser({...user.user, [q.questions[q.position].field]: e.target.value})
        const telegramName = {
            title: "Какой у вас ник в tg?",
            placeholder: "@example",
            field: "telegramName",
            validation: ["string", "tgName"]
        }
        if (e.target.value === "telegram" && q.questions[q.position].field === "messenger") {
            q.addQuestion(q.position, telegramName)
        }
        else if (e.target.value !== "telegram"
            && q.questions[q.position].field === "messenger") {
            q.deleteQuestion("telegramName")
            user.deleteAnswer("telegramName")
        }

        q.nextHandler(e, q, user, loader, navigate)
    }

    // отобразить все варианты
    // если наткнулись на вариант типа {input, placeholder}
    return (
        q.questions[q.position].variants.map(variant => {
            return (
                <div className={'w-full flex items-center'} key={variant}>
                    <input
                        checked={user.user[q.questions[q.position].field] === variant}
                        type="radio"
                        value={variant}
                        name={q.position}
                        id={variant}
                        className={"hidden"}
                        onChange={e => handleChoice(e)}
                    />
                    {user.user[q.questions[q.position].field] === variant
                        ? <label tabIndex={0}
                                 className={"bg-slate-300 hover:bg-gray-300 focus:bg-gray-300 flex items-center border-2 px-5 py-3 rounded-xl w-full shadow-sm text-lg focus:outline-none cursor-pointer"}
                                 htmlFor={variant}

                        >{variant}</label>

                        : <label tabIndex={0}
                                 className={"bg-white hover:bg-gray-300 focus:bg-gray-300 flex items-center border-2 px-5 py-3 rounded-xl w-full shadow-sm text-lg focus:outline-none cursor-pointer "}
                                 htmlFor={variant}
                        >{variant}</label>
                    }
                </div>
            )
        })
    );
};

export default QuizList;