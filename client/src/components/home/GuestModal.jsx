import classes from '../../css/home/GuestModal.module.css'
import FlexColumn from '../../ui/FlexColumn'
import FlexRow from '../../ui/FlexRow'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const GuestModal = props =>{


    return(
        <div className={classes.wrapper}>
            <FlexRow>
                <FlexColumn>
                    <h4>Adults</h4>
                    <p>Ages 13 or above</p>
                </FlexColumn>
                    <AddIcon className={classes.icon}/>
                    <RemoveIcon className={classes.icon} />
            </FlexRow>
        </div>
    )
}

export default GuestModal