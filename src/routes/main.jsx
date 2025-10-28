
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Box,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";

export default function Main() {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = React.useState(location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  const navItems = [
    { label: "Home", value: "/home", icon: <HomeIcon /> },
    { label: "Roommates", value: "/roommates", icon: <PeopleIcon /> },
    { label: "Saved", value: "/saved", icon: <FavoriteIcon /> },
    { label: "Chat", value: "/chat", icon: <ChatIcon /> },
    // { label: "Settings", value: "/settings", icon: <SettingsIcon /> },
  ];

  return (
    <>
      <Outlet /> {/* Active page renders here */}

      <Paper
        sx={{
          position: "fixed",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          borderRadius: "30px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          zIndex: 1000,
        }}
        elevation={3}
      >
        <BottomNavigation
          value={value}
          onChange={handleChange}
          showLabels={false}
          sx={{
            borderRadius: "30px",
            height: "70px",
            backgroundColor: "white",
          }}
        >
          {navItems.map((item) => (
            <BottomNavigationAction
              key={item.value}
              label={item.label}
              value={item.value}
              icon={
                <Box
                  sx={{
                    backgroundColor:
                      value === item.value ? "#1976d2" : "transparent",
                    p: 1.2,
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {React.cloneElement(item.icon, {
                    sx: {
                      color:
                        value === item.value
                          ? "#fff"
                          : "rgba(0,0,0,0.5)",
                    },
                  })}
                </Box>
              }
            />
          ))}
        </BottomNavigation>
      </Paper>
    </>
  );
}
