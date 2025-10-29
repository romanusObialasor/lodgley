// src/pages/Home/subHome/Header.jsx
import React from "react";
import { Avatar, Box, Typography, IconButton, Badge } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export default function Header() {
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
        sx={{ width: 45, height: 45 }}
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
      <IconButton sx={{
             p: 1.3,
             borderRadius: "50%",
             boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
             display: "flex",
             alignItems: "center",
             justifyContent: "center",
            }}>

            <Badge
              color="error"
              variant="dot"
              overlap="circular"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            
            >
             <NotificationsNoneIcon sx={{ color: "#45484a", fontSize: 20 }} />
        </Badge>
      </IconButton>
    </Box>
  );
}
