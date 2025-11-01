// src/pages/Home/subHome/Header.jsx
import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NotificationDropdown from "../Notification/Notififcation";

export default function Header() {
  const navigate = useNavigate();
  
  // Temporary user auth state (later, replace with real auth logic)
  const isLoggedIn = false; 

  const handleAvatarClick = () => {
    if (isLoggedIn) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 2,
        py: 3,
        backgroundColor: "#fff",
      }}
    >
      {/* Left - Avatar */}
      <Avatar
        alt="User"
        src="https://avatar.iran.liara.run/public"
        sx={{ width: 45, height: 45, cursor: "pointer" }}
        onClick={handleAvatarClick}
      />

      {/* Middle - Location */}
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="caption"
          sx={{ color: "gray", fontSize: "0.75rem" }}
        >
          Location
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600, fontSize: "0.95rem" }}
        >
          Jostum, Makurdi, Benue
        </Typography>
      </Box>

      {/* Right - Notifications */}
      
       <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
      <NotificationDropdown />
    </div>
    </Box>
  );
}
