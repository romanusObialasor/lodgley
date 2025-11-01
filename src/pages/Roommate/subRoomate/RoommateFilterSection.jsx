// src/pages/RoommateFiltersSection.jsx
import React from "react";
import { Box, Typography, Chip, Stack } from "@mui/material";

export default function RoommateFiltersSection({ activeFilters = [], onRemove }) {
  return (
    <Box
      sx={{
        px: 2,
        py: 2,
        backgroundColor: "#fff",
      }}
    >
      {/* Sort by label */}
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", mb: 1, fontWeight: 500, }}
      >
        Sort by:
      </Typography>

      {/* Filter chips or empty state */}
      {activeFilters.length > 0 ? (
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {activeFilters.map((filter, index) => (
            <Chip
              key={index}
              label={filter}
              onDelete={() => onRemove(filter)}
              color="primary"
              variant="outlined"
              size="small"
              sx={{
                fontSize: "0.75rem",
                borderRadius: "8px",
              }}
            />
          ))}
        </Stack>
      ) : (
        <Typography variant="body2" color="text.disabled">
          No filters applied
        </Typography>
      )}
    </Box>
  );
}
