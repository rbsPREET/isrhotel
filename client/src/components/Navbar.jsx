import React from 'react'
import classes from '../css/Navbar.module.css';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Navbar = () => {
    const handleDropDown = () => {

    }

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.left}>
                    <h1>ISRHOTEL</h1> {/* Will change to a real Logo */}
                    <div onMouseOver={handleDropDown} className={classes.menuItem}>
                        Home
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className={classes.menuItem}>
                        Browse
                        <KeyboardArrowDownIcon />
                        <div className={classes.dropDownContent}>
                            {/* Change to Router later */}
                            <span>Test</span>
                            <span>Testt</span>
                            <span>Testtt</span>
                        </div>
                    </div>
                    <div className={classes.menuItem}>
                        Pages
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className={classes.menuItem}>Contact</div>
                </div>
                <div className={classes.right}>
                    <button className={classes.hostButton}>Become a Host</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar