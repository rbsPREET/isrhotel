import React from 'react'
import classes from '../css/Navbar.module.css';

const Navbar = () => {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
            <div className={classes.left}>
                    <h1>ISRHOTEL</h1> {/* Will change to a real Logo */}
                </div>
                <div className={classes.center}>Center</div>
                <div className={classes.right}>Right</div>
            </div>
        </div>
    )
}

export default Navbar