import React, {useContext, useEffect, useState} from 'react';
import styles from "../styles/Form.module.css";
import {Context} from "../store/Context.jsx";
import {observer} from "mobx-react-lite";
import loader from "./UI/Loader/Loader.jsx";

const Input = observer(() => {
    const {q} = useContext(Context)
    const {user} = useContext(Context)
    const [input, setInput] = useState('')

    useEffect(() => {
        if (user.user[q.questions[q.position].field]) {
            setInput(user.user[q.questions[q.position].field])
        } else setInput('')

    }, [])
    //
    const handleOnBlur = () => {
        user.setUser({...user.user, [q.questions[q.position].field]: input})
    }

    const handleOnChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <input className={styles.textBox}
            // value={user.user[q.questions[q.position].field]}
               value={input}
               onChange={e => handleOnChange(e)}
               type="text"
               placeholder={q.questions[q.position].placeholder}
               onBlur={() => handleOnBlur()}
               autoFocus={true}
               onKeyDown={async event => {
                   if (event.key === "Enter") {
                       handleOnBlur()
                       await q.nextHandler(event, q, user, loader)
                       event.preventDefault()
                   }
               }}
               onSubmit={() => {console.log('submitted')}}
        />
    );
});

export default Input;