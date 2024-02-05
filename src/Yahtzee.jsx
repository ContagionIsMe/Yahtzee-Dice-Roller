import { useState, useEffect } from "react";
import { getRolls } from "./utils";
import Dice from "./Dice";
import Reroll from "./Reroll";

function Yahtzee({ title = 'Yahtzee', numDice = 6, winCheck }) {
  const [dice, setDice] = useState(getRolls(numDice));
  const [selectedDice, setSelectedDice] = useState(Array(numDice).fill(false));

  const isWinner = winCheck(dice);

  useEffect(() => {
    setDice(getRolls(numDice));
    setSelectedDice(()=> Array(numDice).fill(false));
  }, [numDice]);

  const toggleDice = (idx) => {
    setSelectedDice((prevSelectedDice) => {
      return prevSelectedDice.map((value, i) => (i === idx ? !value : value));
    });
  };

  const nonSelectedIdx = () => {
    const indices = [];
    for (let i = 0; i < selectedDice.length; i++) {
      if (!selectedDice[i]) {
        indices.push(i);
      }
    }
    return indices;
  };

  return (
    <main className="Yahtzee">
      <h1>
        {title} {isWinner && "Yahtzee!"}
      </h1>
      <Dice diceValues={dice} selectedDice={selectedDice} toggle={ toggleDice } />
      <Reroll dice={dice} setDice={setDice} selectedDice={selectedDice} idx={nonSelectedIdx()} setSelectedDice={setSelectedDice} numDice={numDice}/>
    </main>
  );
}

export default Yahtzee;