// src/components/BackButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const BackButton = ({ to, label = "Back", iconOnly = false, sx }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) navigate(to);
    else navigate(-1);
  };

  return (
    <IconButton onClick={handleClick}>
      <ArrowBackIosIcon sx={{
        fontSize: "24px",
    }} />
    </IconButton>
  )
    
  
};

export default BackButton;
