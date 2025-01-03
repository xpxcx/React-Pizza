import React from "react";

import styles from './NotFoundBlock.module.scss'

const NotFound = () => {
    return  (
        <div className={styles.root}> 
            <h1>
                Ничего не найдено :(
            </h1>
            <p className={styles.description}>
                К сожалению, такой странице не существует в Нашем Интернет - Магазине
            </p>
        </div>
    );
};


export default NotFound;