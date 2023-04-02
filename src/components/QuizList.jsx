import React, {useContext} from 'react';
import {Context} from "../store/Context.jsx";

const QuizList = () => {
    const {q} = useContext(Context)
    const {user} = useContext(Context)

    const handleChoice = (e) => {
        user.setUser({...user.user, [q.questions[q.position].field]: e.target.value})
        q.setPosition(q.position + 1)
    }

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
                            className={"bg-gray-300 hover:bg-gray-300 focus:bg-gray-300 flex items-center border-2 px-5 py-3 rounded-xl w-full shadow-sm text-lg focus:outline-none cursor-pointer"}
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