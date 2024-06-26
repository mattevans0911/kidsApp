import React from "react";
import TicTacToe from "../logic/playpage/tictactoe/tictac";
import Maze from "../logic/playpage/maze/maze";
import MatchingGame from "../logic/playpage/matchingGame/matchingGame";
import ConnectTheDots from "../logic/playpage/connectTheDots/connectTheDots";

function PlayPage() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <TicTacToe /> */}
      {/* <Maze /> */}
      {/* <MatchingGame /> */}
      <ConnectTheDots />
    </div>
  );
}

export default PlayPage;
