import React, { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Drawer,
  Stack,
  Chip,
  Button,
  Divider,
} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";

const ALL_FILTERS = ["Male", "Female", "Engineering", "Medical", "Art", "Law"];

export default function RoommateTopSection({ onApplyFilters, selectedFilters }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tempFilters, setTempFilters] = useState(selectedFilters || []);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const toggleFilter = (filter) => {
    if (tempFilters.includes(filter)) {
      setTempFilters(tempFilters.filter((f) => f !== filter));
    } else {
      setTempFilters([...tempFilters, filter]);
    }
  };

  const handleApply = () => {
    onApplyFilters(tempFilters);
    setDrawerOpen(false);
  };

  const handleClear = () => {
    setTempFilters([]);
    onApplyFilters([]);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        p: 1,
        borderBottom: "1px solid #e3efff",
        backgroundColor: "#fff",
        pb: 2,
      }}
    >
      {/* Left: Avatar, Name, Status */}
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar
          alt="User Avatar"
          src="https://avatar.iran.liara.run/public"
          sx={{ width: 48, height: 48 }}
        />
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">
            Romanus Obialasor
          </Typography>
          <Chip
            label="Has a Room"
            color="primary"
            size="small"
            sx={{
              fontSize: "0.6rem",
              height: 22,
              borderRadius: "6px",
              mt: 0.3,
              width: "fit-content",
              px: 1,
            }}
          />
        </Box>
      </Stack>

      {/* Right: Filter Icon */}
      <IconButton
        onClick={handleDrawerToggle}
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

      {/* Drawer */}
      <Drawer
        anchor="bottom"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            p: 3,
          },
        }}
      >
        <Typography variant="h6" textAlign="center" mb={2}>
          Filter Options
        </Typography>

        <Stack direction="row" flexWrap="wrap" gap={1.2}>
          {ALL_FILTERS.map((filter) => (
            <Chip
              key={filter}
              label={filter}
              onClick={() => toggleFilter(filter)}
              color={tempFilters.includes(filter) ? "primary" : "default"}
              variant={tempFilters.includes(filter) ? "filled" : "outlined"}
              sx={{ borderRadius: "8px", fontSize: "0.8rem" }}
            />
          ))}
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Stack direction="row" spacing={2}>
          <Button
            fullWidth
            variant="outlined"
            // color="error"
            onClick={handleClear}
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
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleApply}
            sx={{
                 borderRadius: "8px",
        textTransform: "none",
        backgroundColor: "#1976d2",
        py: 1,
        "&:hover": { backgroundColor: "#1565c0" },
            }}
          >
            Apply
          </Button>
        </Stack>
      </Drawer>
    </Box>
  );
}
