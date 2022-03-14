import React from 'react'
import classes from '../../css/home/CreditsSection.module.css'
import MediaCard from '../../ui/MediaCard';

const CreditsSection = () => {
    const bookingTimes = [
        {
            value: "9:00 am - 9:30 am",
        },
        {
            value: "10:00 am - 10:30 am",
        },
        {
            value: "11:00 am - 11:30 am",
        },
        {
            value: "13:00 pm - 13:30 pm",
        },
    ];

    return (
        <>
            <div className={classes.container}>
                <MediaCard />
                <MediaCard />
                <MediaCard />
            </div>
        </>
    )
}

export default CreditsSection