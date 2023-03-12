import React from "react";
import "./card.styles.css";
import { Monster } from "../../App";

type CardProps = {
  monster: Monster;
}

export const Card = ({ monster }: CardProps) => {

  const { id, name, email } = monster;

  return (

    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2> {name} </h2>
      <p>{email}</p>
    </div>
  );
};
