import { Paper, Typography, Box, useTheme, Grow } from "@mui/material";
import React from "react";

interface ProjectDisplayComponentProps {
  title?: string;
  subtitle?: string;
  img?: string;
  objectFit?: string;
}

export const ProjectDisplayComponent: React.FC<
  ProjectDisplayComponentProps
> = ({
  title = "Lorem Ipsum",
  subtitle = "Lorem Ipsum",
  img = "/about-image.jpg",
  objectFit = "fill",
}) => {
  const theme = useTheme();
  const [hover, setHover] = React.useState(false);
  return (
    <Paper
      elevation={hover ? 6 : 3}
      sx={{
        width: "265px",
        height: "200px",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        padding: "12px",
        bgcolor: theme.palette.background.default,
        transition: "elevation 0.3s ease",
        "&:hover": {
          ".grow-image": {
            transform: "scaleX(1)",
          },
        },
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box
        width="100%"
        height="126px"
        component="img"
        src={img}
        bgcolor={theme.palette.secondary.main}
        sx={{ objectFit: objectFit }}
      />
      <Box
        width="100%"
        mt="10px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography
            fontSize="18px"
            fontWeight="bold"
            textAlign="start"
            color={theme.palette.text.primary}
          >
            {title}
          </Typography>
          <Typography
            fontSize="10px"
            textAlign="start"
            color={theme.palette.text.secondary}
          >
            {subtitle}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Grow in={hover} timeout={500}>
            <Box
              component="img"
              src="/next.png"
              width="30px"
              height="30px"
              className="grow-image"
            />
          </Grow>
        </Box>
      </Box>
    </Paper>
  );
};
