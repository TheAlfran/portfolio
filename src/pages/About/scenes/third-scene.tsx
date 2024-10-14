import { Stack, Typography, useTheme, Box, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useRef, useState } from "react";

export const ThirdScene = () => {
  const theme = useTheme();
  const subTextColor = {
    fontSize: "12px",
    color: theme.palette.text.secondary,
  };

  const [isLoading, setIsLoading] = useState(true);
  const sceneRef = useRef<HTMLDivElement>(null);

  return (
    <Grid
      size={12}
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      gap="88px"
      mt="100px"
      ref={sceneRef}
    >
      <Stack>
        {isLoading && (
          <Skeleton
            variant="rectangular"
            width={"429px"}
            height={"474px"}
            sx={{ borderRadius: "5px" }}
          />
        )}

        <Box
          component="img"
          src="/random-fact.png"
          width="429px"
          height="474px"
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
          draggable="false"
        />
      </Stack>
      <Stack>
        <Typography fontSize="45px" color={theme.palette.text.primary}>
          Random Facts
        </Typography>
        <Typography sx={subTextColor}>I like to play online games</Typography>
        <Typography sx={subTextColor}>Yes to desktop cleanliness</Typography>
        <Typography sx={subTextColor}>Just got into designing</Typography>
        <Typography sx={subTextColor}>I live in earth C-173</Typography>
        <Typography sx={subTextColor}>
          I'm more like a milk person than coffee
        </Typography>
      </Stack>
    </Grid>
  );
};
