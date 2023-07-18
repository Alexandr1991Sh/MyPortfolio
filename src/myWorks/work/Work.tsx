import React from 'react';
import style from './Work.module.css'

type SkillTypeProps={
    title: string
    description: string
}

export const Work: React.FC<SkillTypeProps> = ({
                                                    title,
                                                    description,
                                                    ...restProps
}) => {
    return (
                <div className={style.work}>
                    <div className={style.icon}>
                        {/*<a href="#">Посмотреть</a>*/}
                        gssfg
                    </div>
                        <h3>{title}</h3>
                        <span className={style.description}>{description}</span>

                </div>
    );
};


