import React from 'react'
import classes from '../css/Mall.module.css'

const Mall = ({ item }) => {
    console.log(item.title)
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.mallItem}>
                    <h1 className={classes.mallTitle}>{item.title}</h1>
                    <p className={classes.mallDesc}>{item.description}</p>
                    <img className={classes.mallImg} src={item.img} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default Mall