// src/components/ApartmentImageCarousel.jsx
import React from "react";
import Slider from "react-slick";
import { Box, Chip } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ApartmentImageCarousel = ({ images, apartment }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 600,
    slidesToShow: 1.1, // shows next image slightly
    centerMode: true,
    centerPadding: "10px",
    pauseOnHover: true,
  };

  return (
    <Box
      sx={{
        mt: 1,
        mb: 1,
        position: "relative",
        overflow: "hidden",
        height: 270,
      }}
    >
      <Slider {...settings}>
        {images.map((img, index) => (
          <Box
            key={index}
            sx={{
              height: 270,
              mx: 1,
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            <img
              src={img}
              alt={`Apartment ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px",
                marginLeft: "20px",
              }}
            />
          </Box>
        ))}
      </Slider>
      <Chip
            // label={apartment.type}
            label={"Self Contain"}
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
  );
};

export default ApartmentImageCarousel;
