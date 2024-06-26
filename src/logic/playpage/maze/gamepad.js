// src/Gamepad.js
import React from "react";
import "./styles/gamepad.css";
import { Button } from "@mui/material";

const Gamepad = ({ onMove }) => {
  return (
    <div className="gamepad">
      <Button
        style={{ backgroundColor: "#FEDEFF", color: "black" }}
        variant="contained"
        className="gamepad-button up"
        onClick={() => onMove("ArrowUp")}
      >
        ▲
      </Button>
      <div className="gamepad-middle">
        <Button
          style={{ backgroundColor: "#FEDEFF", color: "black" }}
          variant="contained"
          className="gamepad-button left"
          onClick={() => onMove("ArrowLeft")}
        >
          ◀
        </Button>
        <Button
          style={{ backgroundColor: "#FEDEFF", color: "black" }}
          variant="contained"
          className="gamepad-button right"
          onClick={() => onMove("ArrowRight")}
        >
          ▶
        </Button>
      </div>
      <Button
        style={{ backgroundColor: "#FEDEFF", color: "black" }}
        variant="contained"
        className="gamepad-button down"
        onClick={() => onMove("ArrowDown")}
      >
        ▼
      </Button>
    </div>
  );
};

export default Gamepad;
