import React, { useEffect, useState } from "react";
import {
  IconButton,
  Menu,
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Skeleton,
  Badge,
  Divider,
} from "@mui/material";
    import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import GroupIcon from "@mui/icons-material/Group";
import PaymentIcon from "@mui/icons-material/Payment";
import FavoriteIcon from "@mui/icons-material/Favorite";

const NotificationDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);

  const open = Boolean(anchorEl);

  // Simulate data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications([
        {
          id: 1,
          type: "booking",
          title: "Booking Confirmed",
          description: "Your booking for Oakview Lodge has been confirmed.",
          time: "2h ago",
          icon: <HomeWorkIcon color="primary" />,
        },
        {
          id: 2,
          type: "roommate",
          title: "Roommate Match Found",
          description: "Someone compatible with your profile is available.",
          time: "5h ago",
          icon: <GroupIcon color="success" />,
        },
        {
          id: 3,
          type: "payment",
          title: "Payment Reminder",
          description: "Your next payment for Maple Lodge is due in 3 days.",
          time: "1d ago",
          icon: <PaymentIcon color="warning" />,
        },
        {
          id: 4,
          type: "rented",
          title: "Liked Apartment Rented",
          description: "The apartment you liked at Hilltop has been rented out.",
          time: "2d ago",
          icon: <FavoriteIcon color="error" />,
        },
      ]);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton
      color="inherit"
        onClick={handleClick}
        aria-controls={open ? "notification-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{
          p: 1.3,
          borderRadius: "50%",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
      <Menu
        id="notification-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          sx: {
            mt: 1.5,
            borderRadius: 2,
            minWidth: 300,
            boxShadow: 3,
            p: 1,
            mr: 1
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{ px: 2, pb: 1, fontSize: "1rem", fontWeight: 600 }}
        >
          Notifications
        </Typography>

        <Box>
          {loading ? (
            <Box sx={{ p: 2 }}>
              {[1, 2, 3].map((n) => (
                <Box
                  key={n}
                  sx={{ display: "flex", alignItems: "center", mb: 2 }}
                >
                  <Skeleton variant="circular" width={40} height={40} />
                  <Box sx={{ ml: 2, flex: 1 }}>
                    <Skeleton width="80%" height={20} />
                    <Skeleton width="60%" height={15} />
                  </Box>
                </Box>
              ))}
            </Box>
          ) : (
            <List>
              {notifications.map((notif) => (
                <ListItem key={notif.id} alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        bgcolor: "transparent",
                        border: "1px solid #eee",
                      }}
                    >
                      {notif.icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography sx={{ fontWeight: 600 }}>
                        {notif.title}
                      </Typography>
                      <Typography variant="caption" color="text.disabled">
                          {notif.time}
                        </Typography>
                      </Box>
                    }
                    secondary={
                      <>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 0.5 }}
                        >
                          {notif.description}
                        </Typography>
                        <Divider  sx={{
                            // backgroundColor: "red",
                            height: 1,
                            mt: 2
                        }}/>
                      </>
                    }
                    
                  />
                        

                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Menu>
    </>
  );
};

export default NotificationDropdown;
