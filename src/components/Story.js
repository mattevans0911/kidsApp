import React, { useEffect, useRef, useState } from "react";

const storyText = [
  "Once upon a time, in a faraway land, there was a beautiful princess.",
];

const Story = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const utteranceRef = useRef(null);

  useEffect(() => {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(storyText.join(" "));
    utteranceRef.current = utterance;

    const words = storyText[0].split(" ");
    let wordIndex = 0;

    utterance.onboundary = (event) => {
      if (event.name === "word") {
        setCurrentWordIndex(wordIndex);
        wordIndex++;
      }
    };

    utterance.onend = () => {
      setCurrentWordIndex(-1);
    };

    return () => {
      speechSynthesis.cancel();
    };
  }, []);

  const handlePlay = () => {
    window.speechSynthesis.speak(utteranceRef.current);
  };

  return (
    <div>
      <button onClick={handlePlay}>Play Story</button>
      <div>
        {storyText[0].split(" ").map((word, index) => (
          <span
            key={index}
            style={{
              backgroundColor:
                index === currentWordIndex ? "yellow" : "transparent",
            }}
          >
            {word}{" "}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Story;
