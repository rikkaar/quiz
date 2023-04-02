import {makeAutoObservable} from "mobx";
import toast from "react-hot-toast";
import React from "react";

export default class UserStore {
    constructor() {
        this._position = 0
        this._questions = [
            {
                title: "Как вас зовут?",
                placeholder: "Фио",
                field: "name"
            },
            {
                title: "Ваш номер телефона",
                placeholder: "+7 (999) 999-99-99",
                field: "number"
            },
            {
                title: 'Как связаться?',
                variants: [ 'telegram', 'whatsApp', 'viber' ],
                field: "messenger"
            },
            {
                title: 'Сколько вам лет?',
                placeholder: 'Возраст',
                field: "age"
            },
            {
                title: 'У тебя уже был опыт в стилистике?',
                variants: [ 'да', 'нет' ],
                field: "experience"
            },
            {
                title: 'Какие у тебя цели?',
                variants: ['Основная работа', 'Дополнительный заработок', 'Xобби'],
                field: 'target'
            },
            {
                title: 'Сколько времени сможешь уделять?',
                variants: ['менее 1 часа', '1 - 2 часа', '2 - 4 часа', 'больше 4'],
                field: 'time'
            },
            {
                title: "Сколько ты хочешь зарабатывать в месяц?",
                placeholder: "Введите сумму",
                field: "money"
            },
            {
                title: "В каком городе проживаешь?",
                placeholder: "Название города",
                field: "city"
            }
        ]
        makeAutoObservable(this)
    }

    setQuestions(questions) {
        this._questions = questions
    }

    get questions() {
        return this._questions
    }

    setPosition(position) {
        this._position = position
    }

    get position() {
        return this._position
    }

    prevHandler (e, q, navigate) {
        e.preventDefault()
        if (q.position >= 1) {
            q.setPosition(q.position - 1)
        } else {
            return navigate('/')
        }
    }


    async nextHandler (e, q, user, loader){
        e.preventDefault()
        if (!user.user[q.questions[q.position].field]) {
            return toast.error('Заполните поле!')
        }
        if ((q.questions.length - q.position) > 1) {
            q.setPosition(q.position + 1)
        } else {
            loader.setVisible(true)
            // отправка данных на сервак //
            try {
                await fetch(`${import.meta.env.VITE_API_LINK}/login`, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({...user.user})
                }).then(() => {
                    toast.success('Спасибо за ответ')
                    return window.location.href = import.meta.env.VITE_REDIRECT_LINK
                })
            } catch (e) {
                loader.setVisible(false)
                console.log(e)
                return toast.error('Произошла техническая ошибка')
            }
        }
    }
}