import React from 'react';
import style from './Main.module.css'
import styleContainer from './../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>

                <div className={style.aboutMe}>
                    <span>Hi there</span>
                    <h1>I am Alexander Schukin</h1>
                    <p>Frontend Developer.</p>
                </div>

                <div className={style.photo}>
                    <img src="" alt="My Photo"/>
                </div>

            </div>
        </div>
    );
};

