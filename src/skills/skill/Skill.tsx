import React from 'react';
import style from './Skill.module.css'

type SkillTypeProps={
    title: string
    description: string
}

export const Skill: React.FC<SkillTypeProps> = ({
                                                    title,
                                                    description,
                                                    ...restProps
}) => {
    return (
                <div className={style.skill}>
                    <div className={style.icon}></div>
                        <h3>{title}</h3>
                        <span className={style.description}>{description}</span>
                </div>
    );
};

