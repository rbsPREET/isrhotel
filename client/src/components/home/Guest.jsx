import { useState } from "react";
import Transition from "react-transition-group/Transition";
import FlexColumn from "../../ui/FlexColumn";
import FlexRow from "../../ui/FlexRow";
import { InputWrapper } from "../../ui/InputWrapper";
import GuestModal from "./GuestModal";

const Guest = (props) => {

    const [activeModal, setActiveModal] = useState(false);

    const openModal = () => {
      setActiveModal(true);
    };


  const modal = (
    <Transition unmountOnExit in={activeModal} timeout={150}>
      {(state) => (
        <GuestModal
          activeModal={state === "entered" && activeModal}
          setActiveModal={setActiveModal}
        />
      )}
    </Transition>
  );
  return (
    <InputWrapper icon={props.icon} mainDiv={props.mainDiv}>
      <FlexColumn onClick={()=>setActiveModal(!activeModal)}>
      {modal}
        <h4>1 Guest</h4>
        <p>Click to add more</p>
      </FlexColumn>
    </InputWrapper>
  );
};

export default Guest;
