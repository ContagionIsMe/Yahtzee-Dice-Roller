import React from "react";
import Die from "./Die";
import "./Dice.css";

function Dice({ diceValues, selectedDice, toggle }) {

  return (
    <div className="Dice">
      {diceValues && selectedDice && diceValues.map((val, idx) => (
        <Die
          key={idx}
          val={val}
          isSelected={selectedDice[idx]}
          toggle={() => toggle(idx)} />
      ))}
    </div>
  );
}

export default Dice;