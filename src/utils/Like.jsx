import { Box, IconButton } from '@mui/material'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from 'react'


const Like = ({ apartment, onClick, onLike }) => {
      const [liked, setLiked] = React.useState(false);
    
        const handleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
    if (onLike) onLike(apartment.id);
  };

  return (
    <Box>
        <IconButton onClick={handleLike}
                    sx={{
                        backgroundColor: "white",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                        p: 1.2,
                    }}
                    >
                      {liked ? (
                        <FavoriteIcon color="error" />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </IconButton>
    </Box>
  )
}

export default Like