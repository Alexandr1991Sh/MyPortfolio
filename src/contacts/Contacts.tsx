import React from 'react';
import style from './Contacts.module.css'
import styleContainer from './../common/styles/Container.module.css'


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>

            <div className={`${styleContainer.container} ${style.contactsContainer}`}>

                <h2 className={style.title}>Контакты</h2>

                <div className={style.contacts}>

                    <form className={style.contactsForm}>
                        <div><input type="text" placeholder={'Имя'}/></div>
                        <div><input type="text" placeholder={'Фамилия'}/></div>
                        <div><textarea placeholder={'Сообщение'}></textarea></div>
                    </form>



                </div >
                <button>Отправить</button>
            </div>

        </div>
    );
};

