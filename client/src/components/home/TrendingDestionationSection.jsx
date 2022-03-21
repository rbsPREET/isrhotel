import FlexRow from "../../ui/FlexRow";
import classes from "../../css/home/TrendingDestionationSection.module.css";
import Cards from "../../ui/Cards";
const TrendingDestionationSection = (props) => {
  const fakeData = [
    { src: "/assets/images/trending1.jpg", cityName: "Tel Aviv", listing: 15 },
    {
      src: "/assets/images/trending1.jpg",
      cityName: "Eilat",
      listing: 12,
    },
  ];

  const fakeData2 = [
    { src: "/assets/images/trending1.jpg", cityName: "Herzelia", listing: 8 },
    { src: "/assets/images/trending1.jpg", cityName: "Haifa", listing: 8 },
    { src: "/assets/images/trending1.jpg", cityName: "Jerusalem", listing: 8 },
  ];
  return (
    <>
      <FlexRow className={classes.top2Destinations}>
        <Cards data={fakeData} template="trending-destination" />
      </FlexRow>
      <FlexRow className={classes.top3Destinations}>
        <Cards data={fakeData2} template="trending-destination" />
      </FlexRow>
    </>
  );
};
export default TrendingDestionationSection;
