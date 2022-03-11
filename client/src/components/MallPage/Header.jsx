import React from 'react'
import classes from "../../css/MallPage/Header.module.css";
import Section from '../../ui/Section';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { mallsData } from '../../mockData'
import Mall from '../Mall'
import Carousel from '../../ui/Carousel';

const Header = () => {
    return (
        <div className={classes.container}>
            <Carousel/>
        </div>
    )
}

export default Header