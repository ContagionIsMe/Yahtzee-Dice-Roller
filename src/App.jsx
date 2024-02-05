import Yahtzee from "./Yahtzee";

function allSameValue(dice) {
  return dice.every((v) => v === dice[0]);
}

function App() {
  return (
    <>
      <Yahtzee winCheck={allSameValue} title="Roll 6 of the same number!" />
    </>
  );
}

export default App;