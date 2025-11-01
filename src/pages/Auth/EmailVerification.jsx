import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  CircularProgress,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import CustomInput from "../../components/CustomInput";
import { useNavigate } from "react-router-dom";

export default function EmailVerification() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [resent, setResent] = useState(false);

  const handleVerify = async () => {
    if (!code.trim()) return alert("Please enter your verification code");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 1200);
  };

  const handleResend = () => {
    setResent(true);
    setTimeout(() => setResent(false), 3000);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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

      {/* Content */}
      <Box textAlign="center" mt={6}>
        <MarkEmailUnreadOutlinedIcon sx={{ fontSize: 70, color: "#1976d2" }} />
        <Typography variant="h5" fontWeight={600} mt={2}>
          Verify Your Email
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1} px={2}>
          We’ve sent a 6-digit verification code to your email.  
          Please enter it below to activate your account.
        </Typography>
      </Box>

      {/* Input */}
      <CustomInput
        label="Verification Code"
        value={code}
        onChange={setCode}
        isNumeric
        maxLength={6}
        sx={{ mt: 4 }}
      />

      {/* Verify Button */}
      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 3, py: 1.3, fontWeight: 600 }}
        onClick={handleVerify}
        disabled={loading}
      >
        {loading ? <CircularProgress size={22} color="inherit" /> : "Verify"}
      </Button>

      {/* Resend Section */}
      <Typography variant="body2" color="text.secondary" mt={3}>
        Didn’t receive the code?{" "}
        <span
          style={{
            color: resent ? "gray" : "#1976d2",
            cursor: resent ? "default" : "pointer",
            fontWeight: 600,
          }}
          onClick={!resent ? handleResend : undefined}
        >
          {resent ? "Code Resent ✓" : "Resend"}
        </span>
      </Typography>
    </Box>
  );
}
