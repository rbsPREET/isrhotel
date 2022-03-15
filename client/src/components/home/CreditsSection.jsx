import React from 'react'
import classes from '../../css/home/CreditsSection.module.css'
import MediaCard from '../../ui/MediaCard';

const CreditsSection = () => {
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