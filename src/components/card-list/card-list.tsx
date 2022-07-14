import Card from "../card/card";
import { Monster } from "../../App";

import "./card-list.css";

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { id } = monster;
        return <Card key={id} monster={monster}></Card>;
      })}
    </div>
  );
};

export default CardList;
