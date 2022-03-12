import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import DateTimePicker from './ResponsiveDateTimePickers';
import ResponsiveDateTimePickers from './ResponsiveDateTimePickers';
import TextField from '@mui/material/TextField';


export default function CardTemp(props) {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ alignContent: "center" }}>
                        <EventAvailableIcon />Booking
                    </Typography>
                    <hr />
                    <Typography variant="body2" color="text.secondary">
                        {/* Card Content */}
                        <div>
                            <ResponsiveDateTimePickers />
                        </div>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button fullWidth="100%" style={{ backgroundColor: "red", color: "white" }} size="large" color="warning">
                    Share
                </Button>
            </CardActions>
        </Card >
    );
}