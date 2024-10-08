import { useState } from "react";
import {
  Box,
  Paper,
  Stack,
  Typography,
  useTheme,
  Grow,
  Tooltip,
} from "@mui/material";

export const PortfolioCardComponent = () => {
  const [hover, setHover] = useState(false);
  const theme = useTheme();

  return (
    <Tooltip title="In Progress" arrow placement="top" disableInteractive>
      <Paper
        elevation={hover ? 6 : 3}
        sx={{
          width: "265px",
          height: "210px",
          padding: "9px",
          backgroundColor: theme.palette.background.default,
          mt: "20px",
          position: "relative",
          overflow: "hidden",
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
          width="247px"
          height="130px"
          bgcolor={theme.palette.default.main}
        />
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mt="9px"
        >
          <Stack>
            <Typography fontSize="18px">Lorem ipsum</Typography>
            <Typography fontSize="12px" color={theme.palette.text.secondary}>
              Dolor
            </Typography>
          </Stack>
          <Stack>
            <Grow in={hover} timeout={500}>
              <Box
                component="img"
                src="/next.png"
                width="30px"
                height="30px"
                className="grow-image"
              />
            </Grow>
          </Stack>
        </Stack>
      </Paper>
    </Tooltip>
  );
};
