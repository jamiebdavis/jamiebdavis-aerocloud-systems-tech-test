import React from "react";
import classes from "./Card.module.css";

const Card = props => {
  return (
    <div className={classes.Card}>
      <p>Hotel Name: {props.name}</p>
      <p>Star Rating: {props.starRating}</p>
      <p>
        Hotel Facilities:
        <br />
        {props.facilities.length ? props.facilities : <p>None</p>}
      </p>
    </div>
  );
};

export default Card;
