// src/components/ApartmentInfo.jsx
import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import BathtubIcon from "@mui/icons-material/Bathtub";
import GridViewIcon from "@mui/icons-material/GridView";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";

const ApartmentInfo = ({ apartment }) => {
  const amenitiesMap = {
    Electricity: { icon: <BoltIcon sx={{ color: "#ffb400" }} />, label: "Electricity" },
    Water: { icon: <WaterDropIcon sx={{ color: "#2196f3" }} />, label: "Water" },
    Bathroom: { icon: <BathtubIcon sx={{ color: "#8e24aa" }} />, label: "Bathroom" },
    Tile: { icon: <GridViewIcon sx={{ color: "#4caf50" }} />, label: "Tiled" },
    Kitchen: { icon: <RamenDiningOutlinedIcon sx={{ color: "#af4c4c" }} />, label: "Kitchen" },
  };

  const amenities = Object.keys(amenitiesMap).filter((key) =>
    apartment.amenities.includes(key)
  );

  return (
    <Box sx={{ px: 2, mt: 2 }}>
      {/* Lodge Name */}
      <Typography variant="h6" fontWeight={600}>
        {apartment.name}
      </Typography>

      {/* Amenities */}
      <Box
        sx={{
          display: "flex",
          gap: 1.5,
          mt: 1.5,
          overflowX: amenities.length > 3 ? "auto" : "visible",
          flexWrap: amenities.length > 3 ? "nowrap" : "wrap",
          pb: amenities.length > 3 ? 1 : 0,
          "&::-webkit-scrollbar": { display: "none" }, // hide scrollbar for cleaner look
        }}
      >
        {amenities.map((key) => (
          <Paper
            key={key}
            elevation={2}
            sx={{
              py: 0.8,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 1,
              borderRadius: "10px",
              backgroundColor: "#f9f9f9",
              width: 80,
              minWidth: 80, // ensures horizontal scroll works properly
              flexShrink: 0, // prevents items from shrinking
            }}
          >
            {amenitiesMap[key].icon}
            <Typography
              sx={{
                maxWidth: "90%",
                textAlign: "center",
                fontSize: "0.75rem",
              }}
            >
              {amenitiesMap[key].label}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default ApartmentInfo;
