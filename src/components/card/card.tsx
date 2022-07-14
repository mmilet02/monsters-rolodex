import { Monster } from "../../App";

import "./card.css";

type CardProps = {
  monster: Monster;
};

const Card = ({ monster }: CardProps) => {
  const { name, email, id } = monster;
  return (
    <div className="card-container">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2`}
      ></img>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
