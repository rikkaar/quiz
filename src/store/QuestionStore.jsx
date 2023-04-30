import {makeAutoObservable} from "mobx";
import toast from "react-hot-toast";
import React from "react";
import {validate} from "../utils/validation.js";

export default class UserStore {
    constructor() {
        this._position = 0
        this._questions = [
            {
                title: "Как вас зовут?",
                placeholder: "Фио",
                field: "name",
                validation: ["string"]
            },
            {
                title: "Ваш номер телефона",
                placeholder: "+7 (999) 999-99-99",
                field: "number",
                validation: ["phone"]
            },
            {
                title: 'Как связаться?',
                variants: ['telegram', 'whatsApp', 'viber'],
                field: "messenger"
            },
            {
                title: 'Сколько вам лет?',
                placeholder: 'Возраст',
                field: "age",
                validation: ["number"]
            },
            {
                title: 'У тебя уже был опыт в стилистике?',
                variants: ['да', 'нет'],
                field: "experience"
            },
            // {
            //     title: 'Какие у тебя цели?',
            //     variants: ['Основная работа', 'Дополнительный заработок', 'Xобби'],
            //     field: 'target'
            // },
            // {
            //     title: 'Сколько времени сможешь уделять?',
            //     variants: ['менее 1 часа', '1 - 2 часа', '2 - 4 часа', 'больше 4'],
            //     field: 'time'
            // },
            // {
            //     title: "Сколько ты хочешь зарабатывать в месяц?",
            //     placeholder: "Введите сумму",
            //     field: "money",
            //     validation: ["number"]
            // },
            {
                title: "В каком городе проживаешь?",
                placeholder: "Название города",
                field: "city",
                validation: ["string"]
            }
        ]
        makeAutoObservable(this)
    }

    setQuestions(questions) {
        this._questions = questions
    }

    addQuestion(position, question) {
        const a = this._questions.splice(position + 1, 0, question)
        // console.log(this._questions)
        // this._questions = a
    }

    deleteQuestion(questionField) {
        this._questions = this._questions.filter(quiz => quiz.field !== questionField)
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

    prevHandler(e, q, navigate) {
        e.preventDefault()
        if (q.position >= 1) {
            q.setPosition(q.position - 1)
        } else {
            return navigate('/quiz/')
        }
    }


    async nextHandler(e, q, user, loader, navigate) {
        e.preventDefault()
        if (!user.user[q.questions[q.position].field]) {
            return toast.error('Заполните поле!')
        }


        // validation of fields here
        if (q.questions[q.position].validation) {
            if (q.questions[q.position].validation.includes("tgName")){
                if (!(user.user[q.questions[q.position].field][0] === "@")) {
                    user.setUser({...user.user, [q.questions[q.position].field]: `@${user.user[q.questions[q.position].field]}`})
                }
            }

            let errors = validate(user.user[q.questions[q.position].field], q.questions[q.position].validation)
            if (errors.length) return
        }


        if ((q.questions.length - q.position) > 1) {
            q.setPosition(q.position + 1)
        } else {
            loader.setVisible(true)
            // отправка данных на сервак //
            try {
                console.log({...user.user})
                await fetch(`${import.meta.env.VITE_API_LINK}/login`, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({...user.user})
                })
                loader.setVisible(false)
                toast.success('Спасибо за ответ')
                //return window.location.href = import.meta.env.VITE_REDIRECT_LINK
                return navigate('/result')

            } catch (e) {
                loader.setVisible(false)
                console.log(e)
                return toast.error('Произошла техническая ошибка')
            }
        }
    }
}