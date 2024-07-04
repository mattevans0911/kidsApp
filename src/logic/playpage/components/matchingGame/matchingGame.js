// src/MatchingGame.js
import React, { useState, useEffect } from "react";
import "./styles/matchingGame.css";
import { Button, Card, Typography } from "@mui/material";

const animalImages = [
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
];

const shuffleArray = (array) => {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const MatchingGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    const doubledAnimalImages = [...animalImages, ...animalImages];
    setCards(shuffleArray(doubledAnimalImages));
  }, []);

  const handleCardClick = (index) => {
    if (
      flippedCards.length === 2 ||
      flippedCards.includes(index) ||
      matchedPairs.includes(index)
    ) {
      return;
    }

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedPairs([...matchedPairs, firstIndex, secondIndex]);
      }
      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  };

  const isCardFlipped = (index) =>
    flippedCards.includes(index) || matchedPairs.includes(index);

  const resetGame = () => {
    setCards(shuffleArray([...animalImages, ...animalImages]));
    setFlippedCards([]);
    setMatchedPairs([]);
    setMoves(0);
  };

  return (
    <div className="matching-game">
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
          className="reset-button"
          style={{
            fontSize: "2.5em",
            color: "#756AB6",
            borderColor: "#756AB6",
          }}
          variant="outlined"
          onClick={resetGame}
        >
          Reset Game
        </Button>
      </div>
      <div className="card-grid">
        {cards.map((card, index) => (
          <Card
            key={index}
            className={`card ${isCardFlipped(index) ? "flipped" : ""} ${
              matchedPairs.includes(index) ? "matched" : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-inner">
              <Typography className="card-front">?</Typography>
              <div className="card-back">{card}</div>
            </div>
          </Card>
        ))}
      </div>
      <div style={{ height: "20%" }}>
        <Typography style={{ fontSize: "2.5em" }}>Moves: {moves}</Typography>

        {matchedPairs.length === cards.length && (
          <Typography style={{ fontSize: "3.5em" }} className="win-message">
            Great Job! You've matched all pairs!
          </Typography>
        )}
      </div>
    </div>
  );
};

export default MatchingGame;
