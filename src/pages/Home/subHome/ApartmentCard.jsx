import React from "react";
import { Box, Typography, Chip, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { Water, Bathtub, Kitchen, GridView } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import Like from "../../../utils/Like";


const ApartmentCard = ({ apartment }) => {
  const navigate = useNavigate();



  const amenitiesIcons = {
    water: <Water fontSize="small" />,
    toilet: <Bathtub fontSize="small" />,
    kitchen: <Kitchen fontSize="small" />,
    tile: <GridView fontSize="small" />,
  };

  return (
    <Grid item xs={12} sm={6} 
    onClick={() => navigate(`/details/${apartment.id}`)}
    >
      <Card
        sx={{
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: 3,
          mb: 2,
          cursor: "pointer",
        }}
      >
        {/* Image Section */}
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="180"
            image={apartment.coverImage}
            alt={apartment.name}
           
          />
          <Chip
            label={apartment.type}
            size="small"
            sx={{
              position: "absolute",
              top: 10,
              left: 10,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "#fff",
              py: 2,
              px: 1,
              fontSize: "0.75rem",
            }}
          />
        </Box>

        {/* Description Section */}
        <CardContent
          sx={{
            backgroundColor: "white",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="flex-start">
            <Box>
              <Typography variant="subtitle1" fontWeight={600}>
                {apartment.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                noWrap
                sx={{ maxWidth: 250 }}
              >
                {apartment.description}
              </Typography>
            </Box>
            <Like />
          </Box>

          {/* Price */}
          <Typography variant="h6" fontWeight={700} sx={{ mt: 1, color: "primary.main"  }}>
            ₦{apartment.price.toLocaleString()}
          </Typography>

          {/* Amenities */}
          <Box display="flex" gap={1} flexWrap="wrap" mt={1}>
            {apartment.amenities.map((a) => (
              <Box
                key={a}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  px: 1,
                  py: 0.3,
                  borderRadius: "8px",
                  backgroundColor: "#f4f4f4",
                }}
              >
                {amenitiesIcons[a]}
                <Typography variant="caption" color="text.secondary">
                  {a}
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ApartmentCard;
