import React from 'react'
import classes from '../css/Footer.module.css'
import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room } from '@material-ui/icons'

const Footer = () => {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.left}>
                    <h1 className={classes.logo}>ISRHOTEL</h1>
                    <div className={classes.contactItem}>
                        <div className={classes.title}>Email:</div>
                        <span className={classes.email}>555 Tel Aviv, Rothschild 5</span>
                    </div>
                    <div className={classes.contactItem}>
                        <div className={classes.title}>Call:</div>
                        +972 834 2342
                    </div>
                    <div className={classes.socialContainer}>
                        <div className={classes.socialIcon} style={{ color: "#3B5999" }}>
                            <Facebook />
                        </div>
                        <div className={classes.socialIcon} style={{ color: "#E4405F" }}>
                            <Instagram />
                        </div>
                        <div className={classes.socialIcon} style={{ color: "#55ACEE" }}>
                            <LinkedIn />
                        </div>
                    </div>
                </div>
                <div className={classes.center}>
                    <h3 className={classes.subTitle}>Useful Links</h3>
                    <ul className={classes.list}>
                        <li className={classes.listItem}>Video Home Page</li>
                        <li className={classes.listItem}>Browse Candi</li>
                        <li className={classes.listItem}>Browse Emps</li>
                        <li className={classes.listItem}>Advance Search</li>
                        <li className={classes.listItem}>Job with Map</li>
                    </ul>
                </div>
                <div className={classes.center}>
                    <h3 className={classes.subTitle}>The Highlights</h3>
                    <ul className={classes.list}>
                        <li className={classes.listItem}>Video Home Page</li>
                        <li className={classes.listItem}>Browse Candi</li>
                        <li className={classes.listItem}>Browse Emps</li>
                        <li className={classes.listItem}>Advance Search</li>
                        <li className={classes.listItem}>Job with Map</li>
                    </ul>
                </div>
                <div className={classes.center}>
                    <h3 className={classes.subTitle}>My Account</h3>
                    <ul className={classes.list}>
                        <li className={classes.listItem}>Video Home Page</li>
                        <li className={classes.listItem}>Browse Candi</li>
                        <li className={classes.listItem}>Browse Emps</li>
                        <li className={classes.listItem}>Advance Search</li>
                        <li className={classes.listItem}>Job with Map</li>
                    </ul>
                </div>
                <div className={classes.right}>
                    <h3 className={classes.subTitle}>Download Apps</h3>
                    <div className={classes.appItem}>
                        <MailOutline style={{ marginRight: "10px" }} />
                        <div className={classes.title}>Google Play</div>
                        Get It Now
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer