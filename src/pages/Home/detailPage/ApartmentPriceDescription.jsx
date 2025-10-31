
import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const ApartmentPriceDescription = ({ apartment }) => {
  return (
    <Box sx={{ px: 2, mt: 3 }}>
      {/* Price */}
      <Typography variant="h5" fontWeight={600} color="primary">
        ₦{apartment.price.toLocaleString()}
      </Typography>


      <Divider sx={{ my: 1.5 }} />

      {/* Description */}
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          lineHeight: 1.6,
          textAlign: "justify",
        }}
      >
        {apartment.description}
      </Typography>
    </Box>
  );
};

export default ApartmentPriceDescription;
