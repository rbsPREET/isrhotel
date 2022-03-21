import SingleHotelRoomCarousel from "../components/home/SingleHotelRoomCarousel";
import SingleTrendingDestinationCard from "../components/home/SingleTrendingDestinationCard";
import SinglePhotoCarousel from "../css/ui/SinglePhotoCarousel";

const SingleCard = (props) => {
  switch (props.template) {
    case "trending-destination":
      return <SingleTrendingDestinationCard card={props.card} />;
    case "home-hotels":
      return (
        <SingleHotelRoomCarousel
          item={props.card}
          borderRadius={props.borderRadius && props.borderRadius}
          customWidth={props.customWidth}
        />
      );
    case "mall-page":
      return <SinglePhotoCarousel item={props.card} borderRadius={true} />;
    default:
      return false;
  }
};

export default SingleCard;
