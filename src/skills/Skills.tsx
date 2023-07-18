import React from 'react';
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>

            <div className={`${styleContainer.container} ${style.skillsContainer}`}>

                <h2 className={style.title}>Мои скиллы</h2>

                <div className={style.skills}>
                    <Skill title={'React'}description={'The search term ' +
                        '"loren 10" does not provide ' +
                        'enough context to give' +
                        'for or referring to with this term.'}/>
                    <Skill title={'Java Script'}description={'The search term ' +
                        '"loren 10" does not provide ' +
                        'enough context to give ' +
                        'for or referring to with this term.'}/>
                    <Skill title={'Html'}description={'The search term ' +
                        '"loren 10" does not provide ' +
                        'enough context to give ' +
                        ' for or referring to with this term.'}/>
                </div>

            </div>

        </div>
    );
};

