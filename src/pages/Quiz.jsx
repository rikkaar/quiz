import React from 'react';
import styles from '../styles/Form.module.css'
import Questions from "../components/Questions.jsx";

const Quiz = () => {

    return (
        <>
            <h1 className="title">Регистрация на бесплатный индивидуальный разбор</h1>
            <div className="container mx-auto flex justify-center items-center min-[350px]:pt-10 pt-5  w-full">
                <div className="flex items-center justify-center w-full sm:w-2/4 sm:min-w-[350px]">
                    <div className={styles.glass}>
                        <div className="flex flex-col items-center">
                            <Questions/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Quiz;