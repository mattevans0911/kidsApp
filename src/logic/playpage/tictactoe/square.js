import React from "react";

function Square({ value, onClick, isWinningSquare }) {
  console.log("value", value);
  return (
    <button
      className={`square ${isWinningSquare ? "winning-square" : ""}`}
      onClick={onClick}
      style={{ color: value === "X" ? "#756AB6" : "#E0AED0" }}
    >
      {value}
    </button>
  );
}

export default Square;
