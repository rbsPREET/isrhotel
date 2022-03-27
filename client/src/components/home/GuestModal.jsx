import classes from "../../css/home/GuestModal.module.css";
import FlexColumn from "../../ui/FlexColumn";
import FlexRow from "../../ui/FlexRow";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useEffect, useState } from "react";

const GuestModal = (props) => {
  const [amount, setAmount] = useState({
    adults: 1,
    childrens: 0,
    infants: 0,
  });
  const increaseHandler = (amountName) => {
    let newAmount = {};
    Object.entries(amount).filter((a) => {
      if (a[0] === amountName) {
        newAmount[`${amountName}`] = a[1] + 1;
      }
    });
    setAmount((prev) => {
      return {
        ...prev,
        ...newAmount,
      };
    });
  };

  useEffect(() => {
    let newAmount = Object.values(amount).reduce((a, b) => +a + +b);
    props.guestValue(newAmount);
    return () => {
      newAmount = 0;
    };
  }, [increaseHandler]);
  return (
    <div className={classes.wrapper}>
      <FlexRow justifyBetween>
        <FlexColumn>
          <h4>Adults</h4>
          <p>Ages 13 or above</p>
        </FlexColumn>
        <FlexRow centerColumn>
          <AddIcon
            onClick={increaseHandler.bind(null, "adults")}
            className={classes.icon}
          />
          <p className={classes.amount}>{amount.adults}</p>
          <RemoveIcon className={classes.icon} />
        </FlexRow>
      </FlexRow>
      <FlexRow className={classes.mt24} justifyBetween>
        <FlexColumn>
          <h4>Children</h4>
          <p>Ages 2–12</p>
        </FlexColumn>
        <FlexRow centerColumn>
          <AddIcon
            onClick={increaseHandler.bind(null, "childrens")}
            className={classes.icon}
          />
          <p className={classes.amount}>{amount.childrens}</p>
          <RemoveIcon className={classes.icon} />
        </FlexRow>
      </FlexRow>
      <FlexRow className={classes.mt24} justifyBetween>
        <FlexColumn>
          <h4>Infants</h4>
          <p>Ages 0–2</p>
        </FlexColumn>
        <FlexRow centerColumn>
          <AddIcon
            onClick={increaseHandler.bind(null, "infants")}
            className={classes.icon}
          />
          <p className={classes.amount}>{amount.infants}</p>
          <RemoveIcon className={classes.icon} />
        </FlexRow>
      </FlexRow>
    </div>
  );
};

export default GuestModal;
