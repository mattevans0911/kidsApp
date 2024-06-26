import React from "react";
import { Card, Typography } from "@mui/material";
import { FaBookOpen, FaPencilAlt, FaPaintBrush } from "react-icons/fa";
import GamepadIcon from "@mui/icons-material/Gamepad";
import { Link } from "react-router-dom";
import Story from "./Story";

function Homepage() {
  return (
    <div
      style={{
        height: "calc(100vh)",
        display: "grid",
        gridTemplateRows: ".5fr 1fr",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" style={{ fontSize: "8em", color: "white" }}>
          Welcome
        </Typography>
        <Typography style={{ fontSize: "2em", color: "white" }}>
          Select a card below to start exploring!
        </Typography>
        <Story />
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
        }}
      >
        <Link to="/read" style={{ textDecoration: "none" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              style={{
                height: "90%",
                width: "90%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FEDEFF",
              }}
            >
              <FaBookOpen style={{ fontSize: "9em", color: "white" }} />
              <Typography style={{ fontSize: "4em", color: "white" }}>
                Read
              </Typography>
            </Card>
          </div>
        </Link>
        <Link to="/play" style={{ textDecoration: "none" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              style={{
                height: "90%",
                width: "90%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FEDEFF",
              }}
            >
              <FaPencilAlt style={{ fontSize: "9em", color: "white" }} />
              <Typography style={{ fontSize: "4em", color: "white" }}>
                Play
              </Typography>
            </Card>
          </div>
        </Link>
        <Link to="/draw" style={{ textDecoration: "none" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              style={{
                height: "90%",
                width: "90%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FEDEFF",
              }}
            >
              <FaPaintBrush style={{ fontSize: "9em", color: "white" }} />
              <Typography style={{ fontSize: "4em", color: "white" }}>
                Draw
              </Typography>
            </Card>
          </div>
        </Link>
        <Link to="/learn" style={{ textDecoration: "none" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              style={{
                height: "90%",
                width: "90%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FEDEFF",
              }}
            >
              <GamepadIcon style={{ fontSize: "9em", color: "white" }} />
              <Typography style={{ fontSize: "4em", color: "white" }}>
                Learn
              </Typography>
            </Card>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
