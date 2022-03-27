import { useState } from "react";
import Transition from "react-transition-group/Transition";
import FlexColumn from "../../ui/FlexColumn";
import FlexRow from "../../ui/FlexRow";
import { InputWrapper } from "../../ui/InputWrapper";
import GuestModal from "./GuestModal";
import classes from "../../css/home/Guest.module.css";

const Guest = (props) => {
  const [activeModal, setActiveModal] = useState(false);
  const [guestAmount, setGuestsAmount] = useState(1);
  const openModal = () => {
    setActiveModal(!activeModal);
  };

  const guestValue = (amount) => {
    setGuestsAmount(amount);
  };

  const modal = (
    <Transition unmountOnExit in={activeModal} timeout={150}>
      {(state) => (
        <GuestModal
          guestValue={guestValue}
          activeModal={state === "entered" && activeModal}
          setActiveModal={setActiveModal}
        />
      )}
    </Transition>
  );
  return (
    <InputWrapper icon={props.icon} mainDiv={classes.mainDiv}>
      {modal}
      <FlexColumn relative onClick={openModal}>
        <h4>
          {guestAmount} {guestAmount > 1 ? "Guests" : "Guest"}
        </h4>
        {guestAmount == 1 && <p>Click to add more</p>}
      </FlexColumn>
    </InputWrapper>
  );
};

export default Guest;
