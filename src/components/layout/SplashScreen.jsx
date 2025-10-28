import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "white",
          }}
        >
          <motion.img
            src="/mainLogo.png" // replace with your Lodgely logo
            alt="Lodgely Logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut"  }}
            style={{width: 150,  marginBottom: 5 }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.8 }}
          >
            <Typography   sx={{  fontFamily: "Noto Sans JP", fontOopticalSizing: "auto" }}>
              Better living in Campus
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
