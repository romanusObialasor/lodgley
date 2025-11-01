import React from "react";
import { Button, CircularProgress } from "@mui/material";

/**
 * Global reusable button component
 * 
 * Props:
 * - text (string): Button label
 * - onClick (function): Click handler
 * - loading (bool): Show spinner
 * - disabled (bool): Disable button
 * - fullWidth (bool): Button stretches to full width
 * - variant (string): MUI variant ("contained", "outlined", etc.)
 * - color (string): MUI color ("primary", "secondary", etc.)
 * - sx (object): Custom MUI styles
 */
export default function CustomButton({
  text,
  onClick,
  type,
  loading = false,
  disabled = false,
  fullWidth = true,
  variant = "contained",
  color = "primary",
  sx = {},
  ...props
}) {
  return (
    <Button
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      sx={{
        py: 1.3,
        fontWeight: 600,
        borderRadius: 2,
        textTransform: "none",
        fontSize: "0.9rem",
        ...sx,
      }}
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <CircularProgress size={22} color="inherit" /> : text}
    </Button>
  );
}
