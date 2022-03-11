import { mallsData } from "../../mockData";
import Carousel from "../../ui/Carousel";

const MallSection = () => {
  return (
    <Carousel data={mallsData} borderRadius={true} template="home-hotels" />
  );
};

export default MallSection
