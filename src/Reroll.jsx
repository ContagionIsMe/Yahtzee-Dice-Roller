import { useState } from "react";
import Button from "./Button";

function Reroll({ setDice, selectedDice, setSelectedDice, numDice }) {
  const [rerollCount, setRerollCount] = useState(0);

  const nonSelectedIdx = () => {
    const indices = [];
    for (let i = 0; i < selectedDice.length; i++) {
      if (!selectedDice[i]) {
        indices.push(i);
      }
    }
    return indices;
  };

  const handleRerollClick = () => {
    if (rerollCount < 3) {
      const nonSelectedIndices = nonSelectedIdx();
      setDice((prevDice) => {
        const newDice = prevDice.map((die, index) => {
          if (nonSelectedIndices.includes(index)) {
            return Math.ceil(Math.random() * 6);
          }
          return die;
        });
        return newDice;
      });

      setRerollCount((prevCount) => prevCount + 1);
    }
  };

  const handleResetClick = () => {
    setRerollCount(0);
    setSelectedDice(Array(numDice).fill(false));
  };

  return (
    <div>
      <Button
        clickFunc={() => {
          handleRerollClick();
        }}
        label={`Roll (${rerollCount}/3)`}
        disabled={rerollCount >= 3}
      />
      <Button clickFunc={handleResetClick} label="Reset" />
    </div>
  );
}

export default Reroll;