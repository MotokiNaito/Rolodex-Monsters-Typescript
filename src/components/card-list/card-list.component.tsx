import React, { FC } from "react";

import { Card } from "../card/card.component";

import "./card-list.style.css";

interface MonsterListProps {
  monsters: [];
}

interface IMonsters {
  id: number;
  name: string;
}

const CardList: FC<MonsterListProps> = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster: IMonsters) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
