import React from 'react';
import style from './Works.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Work} from "./work/Work";


export const MyWorks = () => {

    return (
        <div className={style.worksBlock}>

            <div className={`${styleContainer.container} ${style.worksContainer}`}>

                <h2 className={style.title}>Мои работы</h2>

                <div className={style.worksWrapper}>
                    {/*<Work title={'Social Network'} description={'Project description'}/>*/}

                    {/*<Work title={'Todo List'} description={'Project description'}/>*/}

                    <div className={style.work}>
                        <div className={style.imgContainer}>
                            <a href="#">Посмотреть</a>
                        </div>
                        <h3>Social Network</h3>
                        <span className={style.description}>description</span>
                    </div>

                    <div className={style.work}>
                        <div className={style.imgContainer}>
                            <a href="#">Посмотреть</a>
                        </div>
                        <h3>Todo List</h3>
                        <span className={style.description}>description</span>
                    </div>

                </div>

            </div>

        </div>
    );
};

