import React from "react";
import { Box, Typography } from "@mui/material";
import SwipeLeftIcon from "@mui/icons-material/SwipeLeft";
import SwipeRightIcon from "@mui/icons-material/SwipeRight";

const RoommateSwipeInstruction = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 3,
        px: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <SwipeLeftIcon color="error" />
        <Typography variant="body2">Swipe left to skip</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography variant="body2">Swipe right to match</Typography>
        <SwipeRightIcon color="success" />
      </Box>
    </Box>
  );
};

export default RoommateSwipeInstruction;
