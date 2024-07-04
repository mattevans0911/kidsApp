// src/components/GameDialog.js
import React from "react";
import { Dialog, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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

export default GameDialog;
