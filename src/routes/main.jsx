
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

  React.useEffect(() => {
  // If path is "/", redirect to "/home"
  if (location.pathname === "/") {
    navigate("/home", { replace: true });
    setValue("/home");
  } else {
    setValue(location.pathname);
  }
}, [location.pathname, navigate]);


  return (
    <>
      <Outlet /> {/* Active page renders here */}

      <Paper
        sx={{
          position: "fixed",
          bottom: 10,
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          borderRadius: "30px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          zIndex: 1000,
          overflow: "hidden",
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

          }}
        >
          {navItems.map((item) => (
            <BottomNavigationAction
  key={item.value}
//   label={item.label}
  value={item.value}
  icon={
    <Box
      sx={{
        color: value === item.value ? "#1976d2" : "rgba(0,0,0,0.5)", // icon color
        borderRadius: "50%",
        width: 45,
        height: 45,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: value === item.value ? "scale(1.2)" : "scale(1)", // scale up active
        transition: "all 0.3s ease", // smooth fade
        "::after": {
            content: '""',
            position: "absolute",
            display: value === item.value ? "block" : "none",
            bottom: 2,
            bgcolor: "#1976d2",
            borderRadius: "100%",
            p: 0.3
        }
      }}
    >
      {React.cloneElement(item.icon, {
        sx: { fontSize: 26 }, // consistent icon size
      })}
    </Box>
  }
  sx={{
    "& .MuiBottomNavigationAction-label": {
      display: value === item.value ? "block" : "none", // only show on active
      color: "#1976d2",
      fontSize: "0.85rem",
    },
  }}
/>

          ))}
        </BottomNavigation>
      </Paper>
    </>
  );
}
