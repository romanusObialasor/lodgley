import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import theme from "./theme/theme";
import Router from "./routes/Router";
import SplashScreen from "./components/layout/SplashScreen";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          p: 3,
          bgcolor: "#f7f7f7",
        }}
      >
        <Typography variant="h5" color="text.secondary">
          🚫 Please open Lodgely on a mobile device for the best experience.
        </Typography>
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence mode="wait">
        {showSplash ? (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SplashScreen onFinish={() => setShowSplash(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Router />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default App;
