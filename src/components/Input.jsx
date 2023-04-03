import React, {useContext, useEffect, useState} from 'react';
import styles from "../styles/Form.module.css";
import {Context} from "../store/Context.jsx";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const Input = observer(() => {
    const {q} = useContext(Context)
    const {user} = useContext(Context)
    const [input, setInput] = useState('')
    const {loader} = useContext(Context)
    const navigate = useNavigate();

    useEffect(() => {
        if (user.user[q.questions[q.position].field]) {
            setInput(user.user[q.questions[q.position].field])
        }
        else if (q.questions[q.position].field === "number") {
            setInput('+7 ')
        }
        else setInput('')

    }, [])
    //
    const handleOnBlur = () => {
        user.setUser({...user.user, [q.questions[q.position].field]: input})
    }

    const handleOnChange = (e) => {
        if (q.questions[q.position].field === "number") {
            const phoneFormat = (s, plus = true) => {
                const startsWith = plus ? '+7' : '8';
                let phone = s.slice(2).replace(/[^0-9]/g, '');
                return startsWith + phone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/g, `($1) $2 $3 $4`);
            }
            setInput(phoneFormat(e.target.value))
        }
        else setInput(e.target.value)
    }

    return (
        <input className={styles.textBox}
               value={input}
               onChange={e => handleOnChange(e)}
               type={q.questions[q.position].field === "number" ? "tel" : "text"}
               placeholder={q.questions[q.position].placeholder}
               onBlur={() => handleOnBlur()}
               autoFocus={true}
               onKeyDown={event => {
                   if (event.key === "Enter") {
                       handleOnBlur()
                       q.nextHandler(event, q, user, loader, navigate)
                       event.preventDefault()
                   }
               }}
               onSubmit={() => {console.log('submitted')}}
        />
    );
});

export default Input;