import React, { useState } from "react";
import { Box } from "@mui/material";
import RoommateTopSection from "./subRoomate/RoommateTopSection";
import RoommateFiltersSection from "./subRoomate/RoommateFilterSection";
import RoommateSwipeSection from "./subRoomate/RoommasteSwipeSection";
import RoommateSwipeInstruction from "./subRoomate/RoommateSwipeInstruction";

const Roommate = () => {
  const [filters, setFilters] = useState([]);

  const handleApplyFilters = (selectedFilters) => {
    setFilters(selectedFilters);
  };

  const handleRemoveFilter = (filter) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  return (
    <Box sx={{  minHeight: "100vh", p: 2 }}>
      <RoommateTopSection
        onApplyFilters={handleApplyFilters}
        selectedFilters={filters}
      />
      <RoommateFiltersSection
        activeFilters={filters}
        onRemove={handleRemoveFilter}
      />
      <RoommateSwipeSection />
      <RoommateSwipeInstruction />
    </Box>
  );
};

export default Roommate;
