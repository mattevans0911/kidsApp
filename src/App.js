import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import ReadPage from "./components/ReadPage";
import PlayPage from "./components/PlayPage";
import DrawPage from "./components/DrawPage";
import LearnPage from "./components/LearnPage";
import "./main.css";

function App() {
  return (
    <div style={{ width: "100%", height: "calc(100vh -10px)" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/read" element={<ReadPage />} />
          <Route path="/play" element={<PlayPage />} />
          <Route path="/draw" element={<DrawPage />} />
          <Route path="/learn" element={<LearnPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
