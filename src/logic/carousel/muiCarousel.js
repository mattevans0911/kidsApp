// src/components/MuiCarousel.js
import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSwipeable } from "react-swipeable";

const MuiCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating || currentIndex === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setTimeout(() => setIsAnimating(false), 300); // Match this duration with your CSS transition duration
  };

  const handleNext = () => {
    if (isAnimating || currentIndex === items.length - 1) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setTimeout(() => setIsAnimating(false), 300); // Match this duration with your CSS transition duration
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
  });

  return (
    <Box
      {...handlers}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Button
        onClick={handlePrev}
        sx={{ position: "absolute", left: 0, zIndex: 1 }}
        disabled={currentIndex === 0}
      >
        <ArrowBackIosIcon />
      </Button>
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.3s ease-in-out", // Animation duration
          transform: `translateX(-${currentIndex * 100}%)`, // Shift items
          width: `${items.length * 100}%`, // Ensure all items fit in the container
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: "0 0 100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}
          >
            {item}
          </Box>
        ))}
      </Box>
      <Button
        onClick={handleNext}
        sx={{ position: "absolute", right: 0, zIndex: 1 }}
        disabled={currentIndex === items.length - 1}
      >
        <ArrowForwardIosIcon />
      </Button>
    </Box>
  );
};

export default MuiCarousel;
