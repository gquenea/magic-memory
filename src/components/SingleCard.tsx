import { Card } from "../App";
import "./SingleCard.css";

type SingleCardProps = {
  card: Card;
  handleChoice: Function;
  flipped: boolean;
  disabled: boolean;
};

const SingleCard = (props: SingleCardProps, {}) => {
  const handleClick = () => {
    if (!props.disabled) {
      props.handleChoice(props.card);
    }
  };

  return (
    <div className="card">
      <div className={props.flipped ? "flipped" : ""}>
        <img className="front" src={props.card.src} alt="card front" />
        <img
          className="back"
          onClick={handleClick}
          src="/img/cover.png"
          alt="card back"
        />
      </div>
    </div>
  );
};

export default SingleCard;
