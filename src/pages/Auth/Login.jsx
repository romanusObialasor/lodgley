// src/pages/Auth/Login.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim()) return setError("Email is required");
    if (!password.trim()) return setError("Password is required");

    setError("");
    // ✅ TODO: Connect to backend (axios POST)
    navigate("/");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: 3,
      }}
    >
      {/* Back Button */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 5,
          justifyContent: "space-between",
        }}
      >
        <IconButton
          onClick={() => navigate(-1)}
          size="small"
          sx={{
            border: "1px solid #ddd",
            p: 1,
            borderRadius: "8px",
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <img src="/mainLogo.png" alt="Lodgely Logo" width={80} />
      </Box>

      {/* Title */}
      <Typography
        fontWeight={700}
        mt={6}
        mb={2}
        sx={{
          fontSize: "28px",
        }}
      >
        Log in
      </Typography>

      {/* Login Form */}
      <form onSubmit={handleLogin}>
        <CustomInput
          label="Email Address"
          value={email}
          onChange={(value) => setEmail(value)} // ✅ fixed
          margin="normal"
        />

        <Box sx={{ position: "relative" }}>
          <CustomInput
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(value) => setPassword(value)} // ✅ fixed
            margin="normal"
          />
          <IconButton
            onClick={() => setShowPassword((prev) => !prev)}
            sx={{ position: "absolute", right: 10, top: "35%" }}
          >
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </IconButton>
        </Box>

        {error && (
          <Typography color="error" variant="body2" mt={0.5}>
            {error}
          </Typography>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 1,
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={remember}
                onChange={() => setRemember(!remember)}
                color="primary"
              />
            }
            label="Remember me"
          />
          <Typography
            variant="body2"
            sx={{
              color: "primary.main",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
            onClick={() => navigate("/forgot-password")}
          >
            Forgot password?
          </Typography>
        </Box>

        <CustomButton text="LOG IN" sx={{
            mt: 3
        }}
        type="submit"/>
      </form>

      {/* Divider */}
      <Divider sx={{ my: 3, opacity: 0.6 }}>Or Login with</Divider>

      {/* Social Login */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
        <IconButton
          sx={{ border: "1px solid #ddd", borderRadius: 1, px: 5, py: 1.4 }}
        >
          <GoogleIcon />
        </IconButton>
        <IconButton
          sx={{ border: "1px solid #ddd", borderRadius: 1, px: 5, py: 1.4 }}
        >
          <AppleIcon />
        </IconButton>
      </Box>

      {/* Sign Up */}
      <Typography align="center" mt={3} variant="body2">
        Don’t have an account?{" "}
        <Typography
          component="span"
          color="primary"
          fontWeight={600}
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/signup")}
        >
          Sign up
        </Typography>
      </Typography>
    </Box>
  );
}
