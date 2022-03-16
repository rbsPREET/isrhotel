import SingleCard from "./SingleCard";

const Cards = (props) => {
  return props.data.map((card) => (
    <SingleCard key={card.item} card={card} {...props} />
  ));
};

export default Cards;
