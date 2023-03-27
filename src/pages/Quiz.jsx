import React from 'react';
import styles from '../styles/Form.module.css'
import Questions from "../components/Questions.jsx";
import Navigation from "../components/Navigation.jsx";

const Quiz = () => {

    return (
        <div>
            <h1 className="text-lg text-center">Регистрация на бесплатный индивидуальный разбор</h1>
            <div className="container mx-auto flex justify-center items-center pt-10">
                <div className="flex items-center justify-center">
                    <div className={styles.glass}>
                        <div className="title flex flex-col items-center">
                            <Questions/>
                            <Navigation/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Quiz;