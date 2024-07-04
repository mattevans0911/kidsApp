// src/Maze.js
import React, { useState, useEffect } from "react";
import "./styles/maze.css";
import Gamepad from "./gamepad";
import { Button, Typography } from "@mui/material";

const createMaze = (width, height) => {
  const maze = Array(height)
    .fill()
    .map(() => Array(width).fill(1));

  const carvePassagesFrom = (cx, cy, maze) => {
    const directions = [
      [0, -1], // North
      [1, 0], // East
      [0, 1], // South
      [-1, 0], // West
    ];

    directions.sort(() => Math.random() - 0.5); // Randomize directions

    directions.forEach(([dx, dy]) => {
      const nx = cx + dx * 2;
      const ny = cy + dy * 2;

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < width &&
        ny < height &&
        maze[ny][nx] === 1
      ) {
        maze[cy + dy][cx + dx] = 0; // Carve path
        maze[ny][nx] = 0; // Carve path
        carvePassagesFrom(nx, ny, maze);
      }
    });
  };

  maze[1][1] = 0; // Start point
  carvePassagesFrom(1, 1, maze);

  // Place endpoint
  const endpoint = { x: width - 2, y: height - 2 };
  maze[endpoint.y][endpoint.x] = 0;

  return { maze, endpoint };
};

const Maze = () => {
  const [mazeData, setMazeData] = useState({
    maze: [],
    endpoint: { x: 0, y: 0 },
  });
  const [position, setPosition] = useState({ x: 1, y: 1 });
  const [gameWon, setGameWon] = useState(false);

  const resetMaze = () => {
    const newMazeData = createMaze(15, 15);
    setMazeData(newMazeData);
    setPosition({ x: 1, y: 1 });
    setGameWon(false);
  };

  useEffect(() => {
    resetMaze();
  }, []);

  const movePlayer = (direction) => {
    let { x, y } = position;
    switch (direction) {
      case "ArrowUp":
        if (y > 0 && mazeData.maze[y - 1][x] === 0)
          setPosition({ x, y: y - 1 });
        break;
      case "ArrowDown":
        if (y < mazeData.maze.length - 1 && mazeData.maze[y + 1][x] === 0)
          setPosition({ x, y: y + 1 });
        break;
      case "ArrowLeft":
        if (x > 0 && mazeData.maze[y][x - 1] === 0)
          setPosition({ x: x - 1, y });
        break;
      case "ArrowRight":
        if (x < mazeData.maze[0].length - 1 && mazeData.maze[y][x + 1] === 0)
          setPosition({ x: x + 1, y });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (gameWon) return;
      movePlayer(e.key);
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [position, mazeData, gameWon]);

  useEffect(() => {
    if (
      position.x === mazeData.endpoint.x &&
      position.y === mazeData.endpoint.y
    ) {
      setGameWon(true);
    }
  }, [position, mazeData]);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column ",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "20%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          style={{
            fontSize: "2em",
            color: "#756AB6",
            borderColor: "#756AB6",
          }}
          onClick={resetMaze}
        >
          Reset Maze
        </Button>
      </div>
      <div className="maze">
        {mazeData.maze.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={`cell ${cell === 1 ? "wall" : ""} ${
                  position.x === cellIndex && position.y === rowIndex
                    ? "player"
                    : ""
                } ${
                  mazeData.endpoint.x === cellIndex &&
                  mazeData.endpoint.y === rowIndex
                    ? "endpoint"
                    : ""
                }`}
              />
            ))}
          </div>
        ))}
      </div>
      <div style={{ height: "100px" }}>
        {/* {gameWon && ( */}
        <Typography
          style={{ fontSize: "3em", marginTop: "10px", color: "#102C57" }}
          className="win-message"
        >
          You Won!
        </Typography>
        {/* )} */}
      </div>
      <Gamepad onMove={movePlayer} />
    </div>
  );
};

export default Maze;
