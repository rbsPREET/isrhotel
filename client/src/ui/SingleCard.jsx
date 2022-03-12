import SingleHotelRoomCarousel from "../components/home/SingleHotelRoomCarousel";
import SingleTrendingDestinationCard from "../components/home/SingleTrendingDestinationCard";
import SinglePhotoCarousel from "../css/ui/SinglePhotoCarousel";

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
    case "mall-page":
      template = <SinglePhotoCarousel item={props.card} borderRadius={true} />;
      break;
    default:
      break;
  }

  return template;
};

export default SingleCard;
