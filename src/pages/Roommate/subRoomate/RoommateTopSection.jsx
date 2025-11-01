// src/pages/RoommateTopSection.jsx
import React, { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Drawer,
  Stack,
  Chip,
} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";

export default function RoommateTopSection() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        p: 1,
        borderBottom: "1px solid #e3efff",
        backgroundColor: "#fff",
      }}
    >
      {/* Left: Avatar, Name, Status */}
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar
          alt="User Avatar"
        src="https://avatar.iran.liara.run/public"
          sx={{ width: 48, height: 48 }}
        />
        <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
        }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Romanus Obialasor
          </Typography>
          <Chip
            label="Needs a Room"
            color="primary"
            size="small"
            sx={{
              fontSize: "0.6rem",
              height: 22,
              borderRadius: "6px",
              mt: 0.3,
              width: "fit-content",
            //   padding: "4px 6px",
              px: 1,
            }}
          />
        </Box>
      </Stack>

      {/* Right: Filter Icon */}
   
      <IconButton
        onClick={handleDrawerToggle}
          sx={{
            backgroundColor: "white",
            color: "gray",
            borderRadius: "10px",
            p: 1.2,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",

            "&:hover": { color: "#1565c0" },

          }}
        >
          <TuneIcon />
        </IconButton>

      {/* Drawer */}
      <Drawer
        anchor="bottom"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            p: 3,
          },
        }}
      >
        <Typography variant="h6" textAlign="center">
          Drawer
        </Typography>
      </Drawer>
    </Box>
  );
}
