import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Alert,
  CircularProgress,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSecure, setIsSecure] = useState(true);
  const [isSecure2, setIsSecure2] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleResetPassword = async () => {
    if (!email.trim()) return setError("Email is required");
    if (!validateEmail(email)) return setError("Enter a valid email");
    if (!otp.trim() || otp.length !== 4) return setError("OTP must be 4 digits");
    if (!newPassword.trim() || !confirmPassword.trim())
      return setError("Password fields cannot be empty");
    if (newPassword !== confirmPassword)
      return setError("Passwords do not match");

    setError("");
    setLoading(true);

    // Simulate success (since backend not yet ready)
    setTimeout(() => {
      setLoading(false);
      alert("Password reset successful!");
      navigate("/login");
    }, 1200);
  };

  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: "white",
      }}
    >
      {/* Back Button */}
       <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 1,
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
      <Typography variant="h5" fontWeight="bold" mt={4}>
        Reset Password
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        Enter your email, the OTP sent to it, and your new password.
      </Typography>

      <CustomInput
        label="Email Address"
        value={email}
        onChange={(val) => setEmail(val)}
      />
      <CustomInput
        label="OTP (4 digits)"
        value={otp}
        onChange={(val) => setOtp(val)}
        maxLength={4}
        isNumeric
        sx={{ mt: 2 }}
      />
      <CustomInput
        label="New Password"
        type={isSecure ? "password" : "text"}
        value={newPassword}
        onChange={(val) => setNewPassword(val)}
        sx={{ mt: 2 }}
        InputProps={{
          endAdornment: (
            <IconButton onClick={() => setIsSecure(!isSecure)}>
              {isSecure ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          ),
        }}
      />
      <CustomInput
        label="Confirm Password"
        type={isSecure2 ? "password" : "text"}
        value={confirmPassword}
        onChange={(val) => setConfirmPassword(val)}
        sx={{ mt: 2 }}
        InputProps={{
          endAdornment: (
            <IconButton onClick={() => setIsSecure2(!isSecure2)}>
              {isSecure2 ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          ),
        }}
      />

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      <CustomButton
        text={loading ? <CircularProgress size={22} /> : "Reset Password"}
        onClick={handleResetPassword}
        disabled={loading}
        sx={{ mt: 3 }}
      />
    </Box>
  );
}
