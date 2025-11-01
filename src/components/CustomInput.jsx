// src/components/CustomInput.jsx
import React from "react";
import { TextField } from "@mui/material";

export default function CustomInput({
  label,
  value,
  onChange,
  type = "text",
  maxLength,
  isNumeric = false,
  allowDecimal = false,
  sx,
  ...props
}) {
  // Handle numeric or decimal input restrictions
  const handleChange = (e) => {
    let inputValue = e.target.value;

    if (isNumeric) {
      inputValue = allowDecimal
        ? inputValue.replace(/[^0-9.]/g, "")
        : inputValue.replace(/[^0-9]/g, "");
    }

    if (maxLength) inputValue = inputValue.slice(0, maxLength);

    onChange?.(inputValue);
  };

  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      variant="outlined"
      fullWidth
      type={type}
      sx={{
        "& .MuiOutlinedInput-root": {
          backgroundColor: "#f6f8fc",
          borderRadius: "10px",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#e3efff",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#0055ff40",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#0055ff",
        },
        ...sx,
      }}
      {...props}
    />
  );
}
