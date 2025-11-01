import React, { useState, useCallback } from "react";
import {
  Box,
  Button,
  Typography,
  Avatar,
  CircularProgress,
  Dialog,
  DialogContent,
  Slider,
  IconButton,
} from "@mui/material";
import Cropper from "react-easy-crop";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CustomInput from "../../components/CustomInput";
import InfoOutlineIcon from "@mui/icons-material/InfoOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [tempImage, setTempImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [isCropping, setIsCropping] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // handle image select
  const onSelectFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTempImage(URL.createObjectURL(file));
      setIsCropping(true);
    }
  };

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const getCroppedImage = async () => {
    const image = await createCroppedImage(tempImage, croppedAreaPixels);
    setAvatar(image);
    setIsCropping(false);
  };

  const handleSignup = async () => {
    setLoading(true);
    try {
      // Simulate signup API call
      setTimeout(() => {
        setLoading(false);
        navigate("/home");
      }, 1500);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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

      <Typography variant="h5" fontWeight={600} textAlign="center" mb={2} mt={3}>
        Create Account
      </Typography>

      {/* Avatar */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <label htmlFor="avatar-upload">
          <input
            type="file"
            accept="image/*"
            id="avatar-upload"
            style={{ display: "none" }}
            onChange={onSelectFile}
          />
          <Avatar
            src={avatar || "https://avatar.iran.liara.run/public"}
            sx={{
              width: 80,
              height: 80,
              cursor: "pointer",
              border: "2px solid #ddd",
            }}
          />
        </label>
      </Box>

      {/* Inputs */}
      <CustomInput
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={setUsername}
      />

      <CustomInput
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={setEmail}
      />

      <Box sx={{ position: "relative", width: "100%" }}>
        <CustomInput
          label="Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          fullWidth
          value={password}
          onChange={setPassword}
          margin="normal"
        />
        <IconButton
          onClick={() => setShowPassword((prev) => !prev)}
          sx={{ position: "absolute", right: 10, top: "35%" }}
        >
          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </Box>

      <CustomInput
        label="Confirm Password"
        type="password"
        variant="outlined"
        fullWidth
        value={confirmPassword}
        onChange={setConfirmPassword}
        margin="normal"
      />

      <Box sx={{ display: "flex", mt: 2, gap: 1 }}>
        <InfoOutlineIcon sx={{ color: "#afafaf" }} />
        <Typography sx={{ fontSize: "0.85rem", color: "#c20e0e" }}>
          Each user must have one account with us, and any user who tries to create
          multiple accounts will be banned permanently.
        </Typography>
      </Box>

      {/* Signup Button */}
      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 3, py: 1.3, fontWeight: 600 }}
        onClick={handleSignup}
        disabled={loading}
      >
        {loading ? <CircularProgress size={22} color="inherit" /> : "Sign Up"}
      </Button>

      <Typography
        variant="body2"
        textAlign="center"
        sx={{ mt: 2, color: "gray" }}
      >
        Already have an account?{" "}
        <span
          style={{ color: "#1976d2", cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          Sign In
        </span>
      </Typography>

      {/* Cropping Dialog */}
      <Dialog open={isCropping} onClose={() => setIsCropping(false)} fullWidth>
        <DialogContent sx={{ position: "relative", height: 400 }}>
          <Cropper
            image={tempImage}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
          />
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2">Zoom</Typography>
            <Slider
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              onChange={(e, z) => setZoom(z)}
            />
          </Box>
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            onClick={getCroppedImage}
          >
            Save
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

// Helper functions for cropping
async function createCroppedImage(imageSrc, croppedAreaPixels) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = croppedAreaPixels.width;
  canvas.height = croppedAreaPixels.height;

  ctx.drawImage(
    image,
    croppedAreaPixels.x,
    croppedAreaPixels.y,
    croppedAreaPixels.width,
    croppedAreaPixels.height,
    0,
    0,
    croppedAreaPixels.width,
    croppedAreaPixels.height
  );

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(URL.createObjectURL(blob));
    }, "image/jpeg");
  });
}

function createImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", (err) => reject(err));
    img.src = url;
  });
}
