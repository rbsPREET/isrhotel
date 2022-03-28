import SearchBarButton from "../../ui/SearchBarButton";
import classes from "../../css/home/SearchBar.module.css";
import LocationIcon from "@material-ui/icons/LocationOnOutlined";
import DatesIcon from "@material-ui/icons/DateRangeOutlined";
import PeopleIcon from "@material-ui/icons/EmojiPeopleOutlined";
import ResponsiveDateTimePickers from "../../ui/ResponsiveDateTimePickers";

import Country from "../Country";
import InputRangeDates from "../../ui/InputRangeDates";
import { useEffect, useRef, useState } from "react";
import Form from "../../ui/Form";
import Section from "../../ui/Section";
import { InputWrapper } from "../../ui/InputWrapper";
import Transition from "react-transition-group/Transition";
import GuestModal from "./GuestModal";
import Guest from "./Guest";

const SearchBar = (props) => {
  const location = useRef();
  const dates = useRef();
  const guests = useRef();

  const [details, setDetails] = useState({
    location: location.current,
    dates: dates.current,
    guests: guests.current,
  });

  const [activeModal, setActiveModal] = useState(false);

  const openModal = () => {
    setActiveModal(true);
  };

  const getDetails = (name, value) => {
    switch (name) {
      case "guests":
        setDetails((prev) => {
          return {
            ...prev,
            guests: value,
          };
        });
        break;
      case "location":
        setDetails((prev) => {
          return {
            ...prev,
            location: value,
          };
        });
        break;
      case "dates":
        setDetails((prev) => {
          return {
            ...prev,
            dates: value,
          };
        });
        break;
      default:
        break;
    }
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

  useEffect(() => {
    console.log(details);
  }, [details]);

  return (
    <Section customWidth={props.customWidth} className={classes.container}>
      <Form className={classes.wrapper}>
        <Country
          dataValue={getDetails}
          dataValueName="location"
          noBorders
          ref={location}
          icon={<LocationIcon />}
          type="select"
          label="Choose your location"
          nameId="location"
          mainDiv={classes.border__right}
        />
        <InputWrapper
          className={classes.border__right}
          icon={<DatesIcon />}
          left
        >
          <ResponsiveDateTimePickers className={classes.inputTime} row />
        </InputWrapper>
        <Guest icon={<PeopleIcon />} />

        <SearchBarButton>Book Now</SearchBarButton>
      </Form>
    </Section>
  );
};

export default SearchBar;
