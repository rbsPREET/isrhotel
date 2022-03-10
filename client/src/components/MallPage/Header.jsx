import React from 'react'
import { Carousel } from "@trendyol-js/react-carousel";
import classes from "../../css/MallPage/Header.module.css";
import Section from '../../ui/Section';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { mallsData } from '../../mockData'
import Mall from '../Mall'

const Header = () => {
    return (
        <div className={classes.container}>
            <Section>
                <Carousel
                    className={classes.carousel}
                    show={3.5} slide={1} transition={0.5} swiping={true}
                    rightArrow={<ArrowForwardIosIcon />}
                    leftArrow={<ArrowBackIosNewIcon />}
                >
                    {mallsData.map((item) => (
                        <Mall key={item} item={item} />
                    ))}
                </Carousel>
            </Section>
        </div>
    )
}

export default Header