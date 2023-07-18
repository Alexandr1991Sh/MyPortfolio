import React from 'react';
import style from './Footer.module.css'
import styleContainer from './../common/styles/Container.module.css'


export const Footer = () => {
    return (
        <div className={style.footerBlock}>

            <div className={`${styleContainer.container} ${style.footerContainer}`}>

                <h2 className={style.title}>Александр Щукин</h2>

                <div className={style.footer}>

                    <div className={style.footers}>
                        <div className={style.icon}></div>
                    </div>

                    <div className={style.footers}>
                        <div className={style.icon}></div>
                    </div>

                    <div className={style.footers}>
                        <div className={style.icon}></div>
                    </div>

                    <div className={style.footers}>
                        <div className={style.icon}></div>
                    </div>

                </div>

                <h2 className={style.title}>2023 Все права защищены</h2>

            </div>

        </div>
    );
};

