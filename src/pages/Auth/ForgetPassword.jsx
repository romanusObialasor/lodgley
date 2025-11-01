import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSendCode = () => {
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Enter a valid email address");
      return;
    }

    setEmailError("");

    // Simulate sending email
    setTimeout(() => {
      navigate("/resetPassword"); // navigate to reset password page
    }, 1500);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        p: 3,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 1.5,
          justifyContent: "space-between",
          width: "100%",
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
      <Typography variant="h5" fontWeight={600}  mt={5}>
        Forgot Password
      </Typography>

      <Typography
        variant="body2"
        sx={{ mt: 1.5, color: "gray", maxWidth: 320 }}
      >
        Enter the email address associated with your account. We’ll send you a
        code to reset your password.
      </Typography>

      {/* Input */}
      <Box sx={{ width: "100%", mt: 4 }}>
        <CustomInput
          label="Email Address"
          type="email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={setEmail}
        />
        {emailError && (
          <Typography sx={{ color: "red", fontSize: 13, mt: 0.5 }}>
            {emailError}
          </Typography>
        )}
      </Box>

      {/* Info */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
        <InfoOutlinedIcon sx={{ color: "#afafaf", fontSize: 20 }} />
        <Typography sx={{ fontSize: 13, color: "gray" }}>
          Make sure this email is linked to your account.
        </Typography>
      </Box>

      {/* Button */}
      <CustomButton
      onClick={handleSendCode}
        text="Send Reset Code"
        sx={{ mt: 4 }}
      />

      <Typography
        variant="body2"
        textAlign="center"
        sx={{ mt: 2, color: "gray" }}
      >
        Remembered your password?{" "}
        <span
          style={{ color: "#1976d2", cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          Sign In
        </span>
      </Typography>
    </Box>
  );
}
