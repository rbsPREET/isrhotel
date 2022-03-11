import SingleCard from "./SingleCard";

const Cards = (props) => {
  return props.data.map((card) => (
    <SingleCard key={card.id} card={card} {...props} />
  ));
};

export default Cards;
