import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";

interface InfoCardProps {
  title?: string;
  subtitle?: string;
  logo?: string;
  backgroundColor?: string;
}

export const InfoCardComponent: React.FC<InfoCardProps> = ({
  title = "About Me",
  subtitle = "Know who am I",
  logo = "/profile-user.png",
  backgroundColor,
}) => {
  const theme = useTheme();
  const defaultBackgroundColor = theme.palette.primary.main;

  return (
    <Paper
      elevation={3}
      sx={{
        width: "265px",
        height: "200px",
        borderBottom: "3px solid black",
        borderRadius: "5px",
        borderColor: theme.palette.primary.main,
        bgcolor: theme.palette.background.default,
      }}
    >
      <Stack mt="20px" ml="20px">
        <Box
          bgcolor={backgroundColor || defaultBackgroundColor}
          width="50px"
          height="50px"
          borderRadius="99px"
          justifyContent="center"
          display="flex"
          alignItems="center"
          zIndex="1"
        >
          <Box component="img" src={logo} width="38px" height="38px" />
        </Box>
      </Stack>
      <Stack mt="17px" ml="20px">
        <Typography
          color={theme.palette.text.primary}
          fontWeight="bold"
          fontSize="25px"
        >
          {title}
        </Typography>
        <Typography color={theme.palette.text.secondary} fontSize="14px">
          {subtitle}
        </Typography>
      </Stack>
      <Box
        width="100%"
        height="1px"
        borderBottom="1px solid black"
        borderColor="#E6E6E6"
        position="relative"
        bottom="100px"
      />
    </Paper>
  );
};
