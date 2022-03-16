import SingleCard from "./SingleCard";

const Cards = (props) => {
  return props.data.map((card) => (
    <SingleCard key={card.title} card={card} {...props} />
  ));
};

export default Cards;
