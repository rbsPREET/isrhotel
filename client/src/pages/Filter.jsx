import { Fragment, useEffect } from "react";
import SearchBar from "../components/home/SerachBar";
import { mallsData } from "../mockData";
import Cards from "../ui/Cards";
import FlexColumn from "../ui/FlexColumn";
import FlexRow from "../ui/FlexRow";
import Section from "../ui/Section";

const Filter = (props) => {
  const href = window.location.href;

  useEffect(()=>{
    const splits = href.split('/').splice(3);
    const location = splits[0];
    const dates = splits[1].split('+');
    const guests = splits[2];
    let guestsDetails= {
      adults: guests.split('a').join('').split('')[0],
      childrens:guests.split('c').splice(1).join('').split('')[0],
      infants:guests.split('i').splice(1).join('').split('')[0],
    }

  },[href])
  return (
    <Fragment>
      <Section title="Filter" />
      <FlexColumn center>
        <SearchBar customWidth={1320} />
        <FlexRow wrap customWidth={65}>
          <Cards
            borderRadius={false}
            customWidth={33}
            data={mallsData}
            template="home-hotels"
          />
        </FlexRow>
      </FlexColumn>
    </Fragment>
  );
};

export default Filter;
