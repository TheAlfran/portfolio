import { Box, Stack, Typography, useTheme } from "@mui/material";

export const BlogsComponent = () => {
  const theme = useTheme();
  return (
    <Stack spacing={2}>
      <Box
        width="475px"
        height="287px"
        borderRadius="5px"
        bgcolor={theme.palette.default.main}
      />
      <Stack spacing={1} maxWidth="475px">
        <Typography fontSize="12px" color={theme.palette.text.secondary}>
          Lorem Ipsum
        </Typography>
        <Typography
          fontSize="14px"
          fontWeight="bold"
          color={theme.palette.text.primary}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          faucibus sollicitudin laoreet. Pellentesque imperdiet gravida sapien
          at faucibus.
        </Typography>
        <Typography fontSize="14px" color={theme.palette.text.secondary}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          faucibus sollicitudin laoreet. Pellentesque imperdiet gravida sapien
          at faucibus.
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2} maxWidth="400px">
        <Box
          width="75px"
          height="75px"
          bgcolor={theme.palette.default.main}
          borderRadius="99px"
        />
        <Stack justifyContent="center">
          <Typography
            fontSize="14px"
            fontWeight="bold"
            color={theme.palette.text.primary}
          >
            Lorem Ipsum Dolor
          </Typography>
          <Typography fontSize="10px" color={theme.palette.text.secondary}>
            Lorem Ipsum
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
