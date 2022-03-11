import SingleHotelRoomCarousel from "../components/home/SingleHotelRoomCarousel";
import SingleTrendingDestinationCard from "../components/home/SingleTrendingDestinationCard";

const SingleCard = (props) => {
  let template = "";
  switch (props.template) {
    case "trending-destination":
      template = <SingleTrendingDestinationCard card={props.card} />;
      break;
    case "home-hotels":
      template = (
        <SingleHotelRoomCarousel item={props.card} borderRadius={true} />
      );
      break;
    default:
      break;
  }

  return template;
};

export default SingleCard;
