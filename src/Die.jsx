import "./Die.css";

function Die({ val, isSelected, toggle }) {
  const handleClick = () => {
    toggle();
  };

  return (
    <div
      className={`Die ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      {val}
    </div>
  );
}

export default Die;