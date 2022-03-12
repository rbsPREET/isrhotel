import React from 'react'
import Section from '../../ui/Section'
import classes from "../../css/malls/Body.module.css";
import LocationIcon from "@material-ui/icons/LocationOnOutlined";
import FlexRow from '../../ui/FlexRow';

const Body = () => {
    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <h1 className={classes.title}>Zona Hotel</h1>
                <FlexRow>
                    <LocationIcon />&nbsp;
                    <p className={classes.addressTitle}>5555 Sharmuta Street, Tel-Aviv</p>
                </FlexRow>
            </div>
            <div className={classes.right}>
                <h1 className={classes.title}>Zona Hotel</h1>
            </div>
        </div>

    )
}

export default Body