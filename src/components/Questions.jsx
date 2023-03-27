import React, {useContext, useRef, useState} from 'react';

import {Context} from "../store/Context.jsx";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import Input from "./Input.jsx";

const Questions = observer(() => {
    const {q} = useContext(Context)
    const {user} = useContext(Context)
    const navigate = useNavigate();

    const handleChoice = (e) => {
        console.log({[q.questions[q.position].field]: e.target.value, ...user.user})
        user.setUser({...user.user, [q.questions[q.position].field]: e.target.value})
        nextHandler()
        // изменить position на 1
    }

    const nextHandler = () => {
        if ((q.questions.length - q.position) > 1) {
            q.setPosition(q.position + 1)
        } else {
            console.log(user.user)
            return navigate('/result')
        }
    }

    console.log(user.user)

    return (
        <div className={"w-full"}>
            <h3 className="text-center text-2xl font-bold">{q.questions[q.position].title}</h3>


            <form action="" className={'py-3 w-full'}>
                <div className="w-full flex flex-col items-center gap-3">
                    {(q.questions[q.position]?.variants)
                        ? q.questions[q.position].variants.map(variant => {
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
                                        ? <label
                                            className={"bg-gray-300 hover:bg-gray-300 flex items-center border-2 px-5 py-3 rounded-xl w-full shadow-sm text-lg focus:outline-none cursor-pointer"}
                                            htmlFor={variant}>{variant}</label>
                                        : <label
                                            className={"bg-white hover:bg-gray-300 flex items-center border-2 px-5 py-3 rounded-xl w-full shadow-sm text-lg focus:outline-none cursor-pointer "}
                                            htmlFor={variant}>{variant}</label>
                                    }
                                </div>
                            )
                        })
                        : <Input key={q.position}/>
                    }
                </div>
            </form>
        </div>
    );
});

export default Questions;