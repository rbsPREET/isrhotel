import Carousel from "../../ui/Carousel";

const MallSection = (props) => {
  return (
    <Carousel data={props.data} borderRadius={false} template="home-hotels" />
  );
};

export default MallSection
