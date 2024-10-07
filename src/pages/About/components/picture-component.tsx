import { Box, Paper, Skeleton, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";

interface PictureProps {
  source?: string;
}

export const PictureComponent: React.FC<PictureProps> = ({
  source = "/logo.png",
}) => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = source;
    img.onload = () => setIsLoading(false);
    img.onerror = () => setIsLoading(false);
  }, [source]);

  return (
    <Box>
      {isLoading ? (
        <Skeleton
          variant="rectangular"
          width={"150px"}
          height={"100px"}
          sx={{ borderRadius: "5px" }}
        />
      ) : (
        <Paper
          elevation={4}
          sx={{
            width: "150px",
            height: "100px",
            padding: "6px",
            bgcolor: theme.palette.background.default,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={source}
            bgcolor={theme.palette.background.default}
            width="100%"
            height="100%"
            borderColor="transparent"
            draggable="false"
            borderRadius="inherit"
          />
        </Paper>
      )}
    </Box>
  );
};
