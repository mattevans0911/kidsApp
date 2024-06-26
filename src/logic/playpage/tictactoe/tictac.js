import React, { useState } from "react";
import "../tictactoe/styles/tictac.css";
import Board from "./tictacBoard";
import { Button, Typography } from "@mui/material";

function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    const historyCopy = history.slice(0, stepNumber + 1);
    const current = historyCopy[stepNumber];
    const squares = current.slice();
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    squares[index] = xIsNext ? "X" : "O";
    setHistory([...historyCopy, squares]);
    setStepNumber(historyCopy.length);
    setXIsNext(!xIsNext);
  };

  const reset = () => {
    setStepNumber(0);
  };

  const current = history[stepNumber];
  const winnerInfo = calculateWinner(current);
  const winner = winnerInfo ? winnerInfo.winner : null;
  const winningLine = winnerInfo ? winnerInfo.line : [];

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <Board
          squares={current}
          onClick={handleClick}
          winningLine={winningLine}
        />
      </div>
      <div
        style={{
          fontSize: "4em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <div>
          <Typography style={{ fontSize: "1em" }}>{status}</Typography>
        </div>
        <Button onClick={reset} variant="contained" color="primary">
          <Typography>New Game</Typography>
        </Button>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return null;
}

export default TicTacToe;
