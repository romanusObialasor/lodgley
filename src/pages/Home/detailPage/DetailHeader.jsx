// src/pages/ApartmentDetail.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import BackButton from "../../../routes/BackButton";
import Like from "../../../utils/Like";

const DetailHeader = ({ liked, onLikeToggle }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        mt: 0.5
      }}
    >
      <BackButton />
      <Typography fontSize={"18px"} >
        Apartment Detail
      </Typography>
      <Like />
    </Box>
  );
};

export default DetailHeader;
