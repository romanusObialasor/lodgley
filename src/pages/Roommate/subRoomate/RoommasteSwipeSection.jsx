// src/pages/Roommate/subRoomate/RoommateSwipeSection.jsx
import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Stack, Skeleton } from "@mui/material";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

const SwipeCard = ({ roommate, onSwipe }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  return (
    <motion.div
      drag="x"
      style={{
        position: "absolute",
        width: "100%",
        cursor: "grab",
        x,
        rotate,
        opacity,
      }}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
      onDragEnd={(event, info) => {
        if (Math.abs(info.offset.x) > 150) {
          onSwipe(roommate.id);
        }
      }}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        sx={{
          boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
          overflow: "hidden",
          backgroundColor: "white",
          position: "relative",
        }}
      >
        {/* Image */}
        <Box sx={{ position: "relative", width: "100%",  height: 450 }}>
          <img
            src={roommate.avatar}
            alt={`${roommate.name} Avatar`}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Black Gradient Overlay */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "80%",
              background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
            }}
          />
        </Box>

        {/* Text Content */}
        <CardContent
          sx={{
            position: "absolute",
            bottom: 0,
            color: "white",
            boxSizing: "border-box",
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Box textAlign="left">
              <Typography variant="subtitle1" fontWeight="bold">
                {roommate.name}, {roommate.age}
              </Typography>
              <Typography variant="body2">{roommate.department}</Typography>
              <Typography
                variant="caption"
                color="primary"
                sx={{
                  backgroundColor: "#e3f2fd",
                  borderRadius: "6px",
                  px: 1,
                  py: 0.3,
                  mt: 0.5,
                  display: "inline-block",
                }}
              >
                {roommate.status}
              </Typography>
            </Box>
          </Stack>

          <Typography variant="body2" sx={{ mt: 2, textAlign: "left" }}>
            {roommate.bio}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function RoommateSwipeSection() {
  const [roommates, setRoommates] = useState([
    {
      id: 1,
      name: "Mary Johnson",
      age: 20,
      department: "Computer Engineering",
      bio: "Friendly and tidy, looking for a roommate near the North Gate.",
      avatar: `https://xsgames.co/randomusers/avatar.php?g=female&id=${Math.random()}`,
      status: "Needs a Room",
    },
    {
      id: 2,
      name: "Fred Okoye",
      age: 23,
      department: "Mechanical Engineering",
      bio: "Already has a room, just looking for someone to share bills with.",
      avatar: `https://xsgames.co/randomusers/avatar.php?g=male&id=${Math.random()}`,
      status: "Has a Room",
    },
    {
      id: 3,
      name: "Amaka Nwosu",
      age: 22,
      department: "Architecture",
      bio: "Loves organized spaces and open-minded people.",
      avatar: `https://xsgames.co/randomusers/avatar.php?g=female&id=${Math.random()}`,
      status: "Needs a Room",
    },
    {
      id: 4,
      name: "Ifeanyi Uche",
      age: 25,
      department: "Civil Engineering",
      bio: "Easygoing and neat. Prefer someone who values privacy.",
      avatar: `https://xsgames.co/randomusers/avatar.php?g=male&id=${Math.random()}`,
      status: "Has a Room",
    },
    {
      id: 5,
      name: "Chidinma Okafor",
      age: 21,
      department: "Mass Communication",
      bio: "Sociable and friendly, looking to share rent near campus.",
      avatar: `https://xsgames.co/randomusers/avatar.php?g=female&id=${Math.random()}`,
      status: "Needs a Room",
    },
    {
      id: 6,
      name: "Samuel Ade",
      age: 24,
      department: "Electrical Engineering",
      bio: "Loves music and gaming. Prefer someone chill and respectful.",
      avatar: `https://xsgames.co/randomusers/avatar.php?g=male&id=${Math.random()}`,
      status: "Has a Room",
    },
    {
      id: 7,
      name: "Olamide Bisi",
      age: 22,
      department: "Economics",
      bio: "Clean, focused, and values mutual respect.",
      avatar: `https://xsgames.co/randomusers/avatar.php?g=female&id=${Math.random()}`,
      status: "Needs a Room",
    },
    {
      id: 8,
      name: "Kelechi Eze",
      age: 23,
      department: "Computer Science",
      bio: "Looking for a roommate who enjoys quiet study hours.",
      avatar: `https://xsgames.co/randomusers/avatar.php?g=male&id=${Math.random()}`,
      status: "Needs a Room",
    },
    {
      id: 9,
      name: "Joy Adebayo",
      age: 20,
      department: "Nursing",
      bio: "Neat and friendly, loves to cook.",
      avatar: `https://xsgames.co/randomusers/avatar.php?g=female&id=${Math.random()}`,
      status: "Has a Room",
    },
    {
      id: 10,
      name: "Michael Obi",
      age: 24,
      department: "Business Administration",
      bio: "Calm and cooperative, values honesty and punctuality.",
      avatar: `https://xsgames.co/randomusers/avatar.php?g=male&id=${Math.random()}`,
      status: "Needs a Room",
    },
    {
      id: 11,
      name: "Blessing Eneh",
      age: 21,
      department: "Political Science",
      bio: "Loves socializing but also enjoys quiet time.",
      avatar: `https://xsgames.co/randomusers/avatar.php?g=female&id=${Math.random()}`,
      status: "Has a Room",
    },
    {
      id: 12,
      name: "Tobi Adigun",
      age: 23,
      department: "Mechanical Engineering",
      bio: "Prefers a clean roommate who respects shared spaces.",
      avatar: `https://xsgames.co/randomusers/avatar.php?g=male&id=${Math.random()}`,
      status: "Has a Room",
    },
    {
      id: 13,
      name: "Ngozi Chika",
      age: 22,
      department: "Fine Arts",
      bio: "Creative and cheerful. Loves decorating shared spaces.",
      avatar: `https://xsgames.co/randomusers/avatar.php?g=female&id=${Math.random()}`,
      status: "Needs a Room",
    },
    {
      id: 14,
      name: "Emeka Iroha",
      age: 25,
      department: "Agricultural Engineering",
      bio: "Responsible and hardworking. Seeks a tidy and friendly roommate.",
      avatar: `https://xsgames.co/randomusers/avatar.php?g=male&id=${Math.random()}`,
      status: "Needs a Room",
    },
    {
      id: 15,
      name: "Ruth Ajayi",
      age: 21,
      department: "Law",
      bio: "Quiet and easy to get along with. Prefers organized spaces.",
      avatar: `https://xsgames.co/randomusers/avatar.php?g=female&id=${Math.random()}`,
      status: "Has a Room",
    },
    {
      id: 16,
      name: "Chuka Onwu",
      age: 24,
      department: "Software Engineering",
      bio: "Tech enthusiast, focused, and tidy.",
      avatar: `https://xsgames.co/randomusers/avatar.php?g=male&id=${Math.random()}`,
      status: "Needs a Room",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const handleSwipe = (id) => {
    setRoommates((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <Box mt={1} sx={{ position: "relative", height:450, overflow: "hidden",   
          borderRadius: 4,

    }}>
      {loading ? (
        <Box>
          <Skeleton variant="rectangular" height={400} sx={{ borderRadius: 3 }} />
          <Skeleton variant="text" sx={{ mt: 1 }} />
          <Skeleton variant="text" width="60%" />
        </Box>
      ) : roommates.length > 0 ? (
        <AnimatePresence>
          {roommates.map((roommate) => (
            <SwipeCard key={roommate.id} roommate={roommate} onSwipe={handleSwipe} />
          ))}
        </AnimatePresence>
      ) : (
        <Typography variant="h6" color="text.secondary" mt={4}>
          🎉 You’ve swiped through all available roommates!
        </Typography>
      )}

      
    </Box>
  );
}
