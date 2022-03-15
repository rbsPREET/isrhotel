import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import classes from '../css/ui/MediaCard.module.css'


export default function MediaCard() {
    return (
        <Card sx={{ maxWidth: 345, maxHeight: 345 }} className={classes.container}>
            <CardMedia
                style={{ objectFit: "cover", width: "100px", height: "100px", margin: "10% 0" }}
                component="img"
                height="240"
                image="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-1/254000/72-512.png"
                alt="props"
            ></CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Find Interesting Place
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Proin dapibus nisl ornare diam varius tempus. Aenean a quam luctus, finibus tellus ut, convallis eros sollicitudin.
                </Typography>
            </CardContent>
        </Card>
    );
}