import React, {useContext} from 'react';
import classes from "./modal.module.css";
import {observer} from "mobx-react-lite";
import {Context} from "../../../store/Context.jsx";



const Modal = observer(({children}) => {
    const rootClasses = [classes.modal]
    const {loader} = useContext(Context)

    if (loader.visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => loader.setVisible(false)}>
            <div className={classes.modalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
});

export default Modal;
