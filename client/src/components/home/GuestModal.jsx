import classes from "../../css/home/GuestModal.module.css";
import FlexColumn from "../../ui/FlexColumn";
import FlexRow from "../../ui/FlexRow";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const GuestModal = (props) => {
  return (
    <div className={classes.wrapper}>
      <FlexRow className={classes.row} justifyBetween>
        <FlexColumn>
          <h4>Adults</h4>
          <p>Ages 13 or above</p>
        </FlexColumn>
        <FlexRow centerColumn>
          <AddIcon className={classes.icon} />
          <p className={classes.amount}>0</p>
          <RemoveIcon className={classes.icon} />
        </FlexRow>
      </FlexRow>
      <FlexRow className={classes.row} justifyBetween>
        <FlexColumn>
          <h4>Children</h4>
          <p>Ages 2–12</p>
        </FlexColumn>
        <FlexRow centerColumn>
          <AddIcon className={classes.icon} />
          <p className={classes.amount}>0</p>
          <RemoveIcon className={classes.icon} />
        </FlexRow>
      </FlexRow>
      <FlexRow className={classes.row} justifyBetween>
        <FlexColumn>
          <h4>Infants</h4>
          <p>Ages 0–2</p>
        </FlexColumn>
        <FlexRow centerColumn>
          <AddIcon className={classes.icon} />
          <p className={classes.amount}>0</p>
          <RemoveIcon className={classes.icon} />
        </FlexRow>
      </FlexRow>
    </div>
  );
};

export default GuestModal;
