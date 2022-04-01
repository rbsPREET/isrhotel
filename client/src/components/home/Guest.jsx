import { useEffect, useRef, useState } from "react";
import Transition from "react-transition-group/Transition";
import FlexColumn from "../../ui/FlexColumn";
import FlexRow from "../../ui/FlexRow";
import { InputWrapper } from "../../ui/InputWrapper";
import GuestModal from "./GuestModal";
import classes from "../../css/home/Guest.module.css";

const Guest = (props) => {
  const [activeModal, setActiveModal] = useState(false);
  const [guestAmount, setGuestsAmount] = useState(1);
  const [amount, setAmount] = useState({
    adults: 1,
    childrens: 0,
    infants: 0,
  });

  useEffect(() => {
    props.dataValue(props.dataValueName, amount);
  }, [amount]);
  const modal = (
    <Transition unmountOnExit in={activeModal} timeout={150}>
      {(state) =>
        state === "entered" && (
          <GuestModal
            setAmount={setAmount}
            amount={amount}
            guestValue={(e) => setGuestsAmount(e)}
          />
        )
      }
    </Transition>
  );
  return (
    <InputWrapper icon={props.icon} mainDiv={classes.mainDiv}>
      {modal}
      <FlexColumn relative onClick={(e) => setActiveModal(!activeModal)}>
        <h4>
          {guestAmount} {guestAmount > 1 ? "Guests" : "Guest"}
        </h4>
        {guestAmount === 1 && <p>Click to add more</p>}
        {guestAmount > 1 && <p>Guest</p>}
      </FlexColumn>
    </InputWrapper>
  );
};

export default Guest;
