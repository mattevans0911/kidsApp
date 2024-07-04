// src/components/PlayPage.js
import React, { useState } from "react";
import { Box, Button, Card, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TicTacToe from "../logic/playpage/components/tictactoe/tictacBoard";
import Maze from "../logic/playpage/components/maze/maze";
import MatchingGame from "../logic/playpage/components/matchingGame/matchingGame";
import ConnectTheDots from "../logic/playpage/components/connectTheDots/connectTheDots";
import MuiCarousel from "../logic/carousel/muiCarousel";
import ticTacImage from "../logic/playpage/components/tictactoe/assets/playpage-tictactoe.png";
import mazeImage from "../logic/playpage/components/maze/assets/playpage-maze.png";
import matchingGameImage from "../logic/playpage/components/matchingGame/assets/playpage-matching.png";
import connectTheDotsImage from "../logic/playpage/components/connectTheDots/assets/playpage-connect.png";

const GameDialog = ({ isOpen, onClose, children }) => {
  console.log("Rendering GameDialog with isOpen:", isOpen);

  return (
    <Dialog fullScreen onClose={onClose} open={isOpen}>
      <Box
        sx={{
          display: "flex",
          height: "15%",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <IconButton onClick={onClose}>
          <CloseIcon sx={{ fontSize: "3em" }} />
        </IconButton>
      </Box>
      {children}
    </Dialog>
  );
};

const PlayPage = () => {
  const [isTicTacOpen, setIsTicTacOpen] = useState(false);
  const [isMazeOpen, setIsMazeOpen] = useState(false);
  const [isMatchingGameOpen, setIsMatchingGameOpen] = useState(false);
  const [isConnectTheDotsOpen, setIsConnectTheDotsOpen] = useState(false);

  const games = [
    {
      name: "TicTacToe",
      component: (
        <Card>
          <TicTacToe />
        </Card>
      ),
      isOpen: isTicTacOpen,
      setIsOpen: setIsTicTacOpen,
      imageUrl: ticTacImage,
    },
    {
      name: "Maze",
      component: (
        <Card>
          <Maze />
        </Card>
      ),
      isOpen: isMazeOpen,
      setIsOpen: setIsMazeOpen,
      imageUrl: mazeImage,
    },
    {
      name: "Matching Game",
      component: (
        <Card>
          <MatchingGame />
        </Card>
      ),
      isOpen: isMatchingGameOpen,
      setIsOpen: setIsMatchingGameOpen,
      imageUrl: matchingGameImage,
    },
    {
      name: "Connect The Dots",
      component: (
        <Card>
          <ConnectTheDots />
        </Card>
      ),
      isOpen: isConnectTheDotsOpen,
      setIsOpen: setIsConnectTheDotsOpen,
      imageUrl: connectTheDotsImage,
    },
  ];

  const gameItems = games.map((game, index) => (
    <Box
      key={index}
      sx={{
        height: "500px",
        width: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        border: "1px solid #000",
      }}
    >
      <Button
        variant="contained"
        sx={{
          height: "100%",
          width: "100%",
          padding: 0,
        }}
      >
        <img
          onClick={() => game.setIsOpen(true)}
          src={game.imageUrl}
          alt={game.name}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </Button>
      <GameDialog isOpen={game.isOpen} onClose={() => game.setIsOpen(false)}>
        {game.component}
      </GameDialog>
    </Box>
  ));

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#aee2ff",
      }}
    >
      <MuiCarousel items={gameItems} />
    </Box>
  );
};

export default PlayPage;
