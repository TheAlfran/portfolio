import { Box, Stack, Typography, useTheme } from "@mui/material";

export const LatestBlogComoponent = () => {
  const theme = useTheme();

  return (
    <Stack gap="20px" display="flex" justifyContent="center">
      <Typography fontSize="14px" color={theme.palette.text.secondary}>Lorem Ipsum</Typography>
      <Typography fontSize="18px" fontWeight="bold"color={theme.palette.text.primary}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        faucibus sollicitudin laoreet. Pellentesque imperdiet gravida sapien at
        faucibus.
      </Typography>
      <Typography fontSize="14px" color={theme.palette.text.secondary}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        faucibus sollicitudin laoreet. Pellentesque imperdiet gravida sapien at
        faucibus.
      </Typography>
      <Stack display="flex" direction="row" gap="20px">
        <Box width="75px" height="75px" bgcolor={theme.palette.default.main} borderRadius="99px" />
        <Stack display="flex" justifyContent="center">
          <Typography>Lorem Ipsum</Typography>
          <Typography>Lorem Ipsum</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
