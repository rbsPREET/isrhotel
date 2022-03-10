import React from 'react'
import Mall from './Mall'
import classes from '../css/MallsList.module.css'
import { mallsData } from '../mockData'

const MallsList = () => {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                {mallsData.map(item => (
                    <Mall key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default MallsList