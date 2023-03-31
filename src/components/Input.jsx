import React, {useContext, useEffect, useState} from 'react';
import styles from "../styles/Form.module.css";
import {Context} from "../store/Context.jsx";
import {observer} from "mobx-react-lite";
import toast from "react-hot-toast";
import loader from "./UI/Loader/Loader.jsx";

const Input = observer(() => {
    const {q} = useContext(Context)
    const {user} = useContext(Context)
    const [input, setInput] = useState('')

    // console.log(user.user[q.questions[q.position].field])
    useEffect(() => {
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (e.key === "Enter") {
            await nextHandler(e)
        }

    }

    const nextHandler = async (e) => {
        e.preventDefault()
        if (!user.user[q.questions[q.position].field]) {
            return toast.error('Заполните поле!')
        }
        if ((q.questions.length - q.position) > 1) {
            q.setPosition(q.position + 1)
        } else {
            console.log({...user.user})
            loader.setVisible(true)
            // отправка данных на сервак //
            try {
                await fetch('http://localhost:8080/user/auth', {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({...user.user})
                })
            } catch (e) {
                console.log(e)
            }
            const redirectLink = 'https://www.google.com/'
            return window.location.href = redirectLink
            // return window.location.replace('https://bobbyhadz.com');
            // return navigate('https://www.youtube.com/watch?v=d0qZhHRsg7w&ab_channel=REDGroup')
            // return navigate('/result')
        }
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
               onBlur={e => handleOnBlur(e)}
               autoFocus={true}
               onKeyDown={async event => {
                   if (event.key === "Enter") {
                       console.log("submi1t")
                       handleOnBlur(event)
                       await nextHandler(event)
                       event.preventDefault()
                   }

               }}

        />
    );
});

export default Input;