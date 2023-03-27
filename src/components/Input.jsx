import React, {useContext, useEffect, useState} from 'react';
import styles from "../styles/Form.module.css";
import {Context} from "../store/Context.jsx";
import {observer} from "mobx-react-lite";

const Input = observer(() => {
    const {q} = useContext(Context)
    const {user} = useContext(Context)
    const [input, setInput] = useState('')

    // console.log(user.user[q.questions[q.position].field])
    useEffect(()=> {
        if (user.user[q.questions[q.position].field]) {
            setInput(user.user[q.questions[q.position].field])
            console.log(`Должно обновиться на ${user.user[q.questions[q.position].field]}`)
        } else setInput('')

    }, [])
    //
    const handleOnBlur = (e) => {
        if (!input) {
            return console.log("ПУСТОЕ ПОЛЕ")
        }
        console.log({...user.user, [q.questions[q.position].field]: input})
        user.setUser({...user.user, [q.questions[q.position].field]: input})
    }

    const handleOnChange = (e) => {
        console.log(e.target.value)
        setInput(e.target.value)
    }

    return (
        <input className={styles.textBox}
               // value={user.user[q.questions[q.position].field]}
               value={input}
               onChange={e => handleOnChange(e)}
               type="text"
               placeholder={q.questions[q.position].placeholder}
               onBlur={e => handleOnBlur(e)}
        />
    );
});

export default Input;