import {makeAutoObservable} from "mobx";
import toast from "react-hot-toast";
import React from "react";
import {validate} from "../utils/validation.js";

export default class UserStore {
    constructor() {
        this._position = 0
        this._questions = [
            {
                title: 'Сколько вам лет?',
                variants: ["До 18 лет", "От 18-25лет", "От 25-35лет", "От 35лет +"],
                field: "age",
            },
            {
                title: "Из Какого Вы города?",
                variants: ["Москва", "Другое"],
                field: "city",
            },
            {
                title: 'Чему бы Вы хотели обучится?',
                variants: ['Написанию рилсов', 'Упаковоке профиля', 'Вести контент', "Красивой фотографии", "Другое"],
                field: 'target'
            },
            {
                title: "Кем Вы сейчас работаете?",
                variants: ["Не работаю", "В декрете", "в офисе", "в онлайне", "Другое"],
                field: 'work'
            },
            {
                title: "Что у Вас сейчас в приоритете?",
                variants: ["Увеличить доход", "Стать уверенным в себе", "Начать вести инстраграмм", "Найти любимое дело и зарабатывать на нем", "Другое"],
                field: "priority"
            },
            {
                title: "Какой у Вас средний доход в месяц?",
                variants: ["Не зарабатываю", "От 10.000-20.000", "От 20.000-40.000", "От 40.0000-60.000", "От 60.000-100.000", "Свыше 100.000"],
                field: "salary"
            }
            // {
            //     title: "Как вас зовут?",
            //     placeholder: "Фио",
            //     field: "name",
            //     validation: ["string"]
            // },
            // {
            //     title: "Ваш номер телефона",
            //     placeholder: "+7 (999) 999-99-99",
            //     field: "number",
            //     validation: ["phone"]
            // },
            // {
            //     title: 'Как связаться?',
            //     variants: ['telegram', 'whatsApp', 'viber'],
            //     field: "messenger"
            // },
            // {
            //     title: 'У тебя уже был опыт в стилистике?',
            //     variants: ['да', 'нет'],
            //     field: "experience"
            // },
            // variants: ["вариант 1", "вариант 2", {title, validation}]
            // {
            //     title: 'Чему бы Вы хотели обучится?',
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
            // {
            //     title: "В каком городе проживаешь?",
            //     placeholder: "Название города",
            //     field: "city",
            //     validation: ["string"]
            // }
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
            return navigate('/')
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