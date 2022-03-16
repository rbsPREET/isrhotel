import SingleCard from "./SingleCard";

const Cards = (props) => {
  return props.data.map((card, index) => (
    <SingleCard key={index} card={card} {...props} />
  ));
};

export default Cards;
