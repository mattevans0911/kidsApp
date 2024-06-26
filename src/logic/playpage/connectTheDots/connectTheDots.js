import React, { useState, useEffect } from "react";
import { dotImages } from "./dotsData";
import Dot from "./dot";
import { Button, Typography } from "@mui/material";
import "./styles/connectTheDots.css";

const ConnectTheDots = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const [connectedDots, setConnectedDots] = useState([]);
  const [showCongratulations, setShowCongratulations] = useState(false);

  useEffect(() => {
    resetGame();
  }, []);

  const handleDotClick = (index) => {
    if (connectedDots.length === index) {
      setConnectedDots([...connectedDots, index]);

      // Show congratulations message if the last dot is connected
      if (index === currentImage.dots.length - 1) {
        setShowCongratulations(true);
      }
    }
  };

  const resetGame = () => {
    const randomIndex = Math.floor(Math.random() * dotImages.length);
    setCurrentImage(dotImages[randomIndex]);
    setConnectedDots([]);
    setShowCongratulations(false);
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "25%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {showCongratulations && (
          <Typography
            style={{ fontSize: "3em", textAlign: "center" }}
            className="congratulations"
          >
            Congratulations! You completed the drawing!
          </Typography>
        )}
      </div>
      <div
        style={{
          height: "50%",
          width: "100%",
        }}
      >
        <div style={{ marginLeft: "50px" }}>
          <svg
            width="500"
            height="500"
            style={{
              height: "60%",
              width: "90%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {currentImage &&
              currentImage.dots.map((dot, index) => (
                <Dot
                  key={index}
                  x={dot.x}
                  y={dot.y}
                  index={index}
                  onClick={handleDotClick}
                />
              ))}
            {currentImage && currentImage.eye && (
              <Dot
                onClick={() => null}
                x={currentImage.eye.x}
                y={currentImage.eye.y}
                isEye
              />
            )}
            {connectedDots.length > 1 &&
              connectedDots.map((dotIndex, i) => {
                if (i === 0) return null;
                const prevDot = currentImage.dots[connectedDots[i - 1]];
                const currDot = currentImage.dots[connectedDots[i]];
                return (
                  <line
                    key={i}
                    x1={prevDot.x}
                    y1={prevDot.y}
                    x2={currDot.x}
                    y2={currDot.y}
                    stroke="black"
                    strokeWidth="5"
                  />
                );
              })}
          </svg>
        </div>
      </div>
      <div
        style={{
          height: "25%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          style={{ fontSize: "3em" }}
          variant="outlined"
          onClick={resetGame}
          className="congratulations"
        >
          Reset Game
        </Button>
      </div>
    </div>
  );
};

export default ConnectTheDots;
