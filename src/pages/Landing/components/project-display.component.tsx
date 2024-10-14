import React from "react";
import { Box, Stack, Tooltip, Typography, useTheme } from "@mui/material";

interface ProjectDisplayComponentProps {
  src?: string;
  title?: string;
  subtitle?: string;
}

export const ProjectDisplayComponent: React.FC<
  ProjectDisplayComponentProps
> = ({
  src = "/feature-1.webp",
  title = "Lorem Ipsum",
  subtitle = "Lorem Ipsum Dolor",
}) => {
  const theme = useTheme();

  return (
    <Stack
      gap="10px"
      alignItems="center"
      width="100%"
      height="310px"
    >
      <Tooltip title="In Progress" disableInteractive placement="top">
        <Box
          position="relative"
          width="100%"
          height="100%"
          borderRadius="10px"
          overflow="hidden"
          sx={{
            "&:hover": { transform: "scale(1.05)", cursor: "not-allowed" },
            transition: "transform 0.3s ease",
            "&:hover::after": { opacity: 1 },
            "::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              opacity: 0,
              transition: "opacity 0.3s ease",
            },
            "&:hover .hover-text": { opacity: 1 },
          }}
        >
          <Box
            component="img"
            src={src}
            alt={title}
            width="100%"
            height="100%"
            sx={{
              objectFit: "cover",
              borderRadius: "10px",
            }}
           
          />
          <Box
            className="hover-text"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: 0,
              transition: "opacity 0.3s ease",
              zIndex: 1,
            }}
          >
            <Typography
              fontWeight="bold"
              fontSize={{ xs: "16px", sm: "20px" }}
              color="#fff"
              sx={{
                position: "absolute",
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                whiteSpace: "nowrap",
              }}
            >
              {title}
            </Typography>
            <Typography
              fontSize={{ xs: "14px", sm: "18px" }}
              color={theme.palette.text.primary}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                width: "100%",
                padding: "0 20px",
              }}
            >
              {subtitle}
            </Typography>
          </Box>
        </Box>
      </Tooltip>
    </Stack>
  );
};
