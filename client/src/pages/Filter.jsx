import { Fragment } from "react";
import SearchBar from "../components/home/SerachBar";
import { mallsData } from "../mockData";
import Cards from "../ui/Cards";
import FlexColumn from "../ui/FlexColumn";
import FlexRow from "../ui/FlexRow";
import Section from "../ui/Section";

const Filter = (props) => {
  return (
    <Fragment>
      <Section title="Filter" />
      <FlexColumn center>
        <SearchBar dates="Dates" guests="Guests" customWidth={1320} />
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
