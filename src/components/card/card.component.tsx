import React, { FC } from "react";

import "./card.style.css";

interface IMonsters {
  id: number;
  name: string;
}

interface CardtProps {
  monster: IMonsters;
}

export const Card: FC<CardtProps> = ({ monster }) => (
  <div className="card-container">
    <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
    <h1>{monster.name}</h1>
  </div>
);
