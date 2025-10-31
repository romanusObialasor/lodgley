// src/components/CallToLodgeButton.jsx
import React from "react";
import { Fab, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";

const CallToLodgeButton = ({ phoneNumber }) => {
  const handleCall = () => {
    if (phoneNumber) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      alert("No phone number available for this lodge");
    }
  };

  return (
    <Fab
      variant="extended"
      color="primary"
      onClick={handleCall}
      sx={{
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: "12px",
        textTransform: "none",
        // px: 3,
        boxShadow: 3,
        width: "90%",
      }}
    >
      <CallIcon sx={{ mr: 1 }} />
      <Typography >Call to Lodge</Typography>
    </Fab>
  );
};

export default CallToLodgeButton;
