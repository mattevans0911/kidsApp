// src/components/Dot.js
import React from "react";

const Dot = ({ x, y, index, onClick, isEye }) => {
  return (
    <g onClick={() => onClick(index)}>
      <circle
        cx={x}
        cy={y}
        r={isEye ? 25 : 5} // Larger radius for the eye
        fill={isEye ? "black" : "blue"}
      />
      {!isEye && (
        <text x={x} y={y - 10} fontSize="10" fill="black" textAnchor="middle">
          {index + 1}
        </text>
      )}
    </g>
  );
};

export default Dot;
