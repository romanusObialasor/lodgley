import React, { useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  Drawer,
  Typography,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";

export default function SearchSection({ onSearchChange, onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [50000, 200000],
    amenities: [],
    type: "",
  });

  const typeOptions = ["Single Room", "Self Contain", "Flat"];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearchChange?.(e.target.value);
  };

  const handlePriceChange = (e, newValue) => {
    setFilters({ ...filters, priceRange: newValue });
  };

  const handleAmenityChange = (amenity) => {
    const updated = filters.amenities.includes(amenity)
      ? filters.amenities.filter((a) => a !== amenity)
      : [...filters.amenities, amenity];
    setFilters({ ...filters, amenities: updated });
  };

  const handleTypeChange = (e) => {
    setFilters({ ...filters, type: e.target.value });
  };

  const handleApplyFilters = () => {
    onFilterChange?.(filters);
    setOpenFilter(false);
  };

  return (
    <Box sx={{ px: 2 }}>
      {/* Search Bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "12px",
            px: 2,
            py: 1,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",

          }}
        >
          <SearchIcon sx={{ color: "gray", mr: 1 }} />
          <TextField
            variant="standard"
            placeholder="Search lodge..."
            InputProps={{ disableUnderline: true }}
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{
              flex: 1,
              fontSize: "0.9rem",
            }}
          />
        </Box>

        <IconButton
          onClick={() => setOpenFilter(true)}
          sx={{
            backgroundColor: "white",
            color: "gray",
            borderRadius: "10px",
            p: 1.2,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",

            "&:hover": { color: "#1565c0" },

          }}
        >
          <TuneIcon />
        </IconButton>
      </Box>

      {/* Filter Drawer */}
      <Drawer
  anchor="bottom"
  open={openFilter}
  onClose={() => setOpenFilter(false)}
  PaperProps={{
    sx: {
      borderTopLeftRadius: "20px",
      borderTopRightRadius: "20px",
      p: 3,
    },
  }}
>
  {/* Header */}
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      mb: 2,
    }}
  >
    <Typography variant="h6" sx={{ fontWeight: 600 }}>
      Filter by
    </Typography>
    <IconButton onClick={() => setOpenFilter(false)}>
      <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>×</span>
    </IconButton>
  </Box>

  {/* Price Range */}
  <Box sx={{ mb: 3 }}>
    <Typography variant="subtitle1" sx={{ mb: 1, fontWeight:600 }}>
      Price Range (₦)
    </Typography>
    <Slider
      value={filters.priceRange}
      onChange={handlePriceChange}
      valueLabelDisplay="on"
      min={20000}
      max={300000}
      step={10000}
      sx={{
        mt: 4
      }}
    />
  </Box>

  {/* Amenities */}
  <Box sx={{ mb: 3 }}>
    <Typography variant="subtitle1" sx={{ mb: 1, fontWeight:600 }}>
      Amenities
    </Typography>
    <FormGroup>
      {["Electricity", "Water System", "Toilet & Bathroom", "Tiled Floor"].map(
        (a) => (
          <FormControlLabel
            key={a}
            control={
              <Checkbox
                checked={filters.amenities.includes(a)}
                onChange={() => handleAmenityChange(a)}
              />
            }
            label={a}
          />
        )
      )}
    </FormGroup>
  </Box>

  {/* Type */}
  <Box sx={{ mb: 3 }}>
    <Typography variant="subtitle1" sx={{ mb: 1,fontWeight:600 }}>
      Type
    </Typography>
    <RadioGroup value={filters.type} onChange={handleTypeChange}>
      {typeOptions.map((t) => (
        <FormControlLabel key={t} value={t} control={<Radio />} label={t} />
      ))}
    </RadioGroup>
  </Box>

  {/* Buttons */}
  <Box sx={{ display: "flex", gap: 2 }}>
    <Button
      variant="outlined"
      fullWidth
      onClick={() =>
        setFilters({
          priceRange: [50000, 200000],
          amenities: [],
          type: "",
        })
      }
      sx={{
        borderRadius: "8px",
        textTransform: "none",
        color: "#1976d2",
        borderColor: "#1976d2",
        "&:hover": { backgroundColor: "#e3f2fd" },
      }}
    >
      Clear All
    </Button>
    <Button
      variant="contained"
      fullWidth
      onClick={handleApplyFilters}
      sx={{
        borderRadius: "8px",
        textTransform: "none",
        backgroundColor: "#1976d2",
        py: 1,
        "&:hover": { backgroundColor: "#1565c0" },
      }}
    >
      Apply Changes
    </Button>
  </Box>
</Drawer>

    </Box>
  );
}
