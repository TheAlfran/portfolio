import { Box, Button, Stack, Typography, useTheme } from "@mui/material";

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
    <Button
      variant="contained"
      sx={{
        width: "265px",
        height: "200px",
        borderBottom: "3px solid black",
        borderRadius: "5px",
        borderColor: theme.palette.primary.main,
        bgcolor: theme.palette.background.default,
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.10)",
          bgcolor: theme.palette.background.default,
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "left",
        padding: 0,
      }}
    >
      <Box
        width="100%"
        height="1px"
        border="1px"
        position="relative"
        top="5px"
        bgcolor={theme.palette.default.main}
      />
      <Stack ml="20px" mt="-20px">
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
      <Stack mt="17px" ml="15px">
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
    </Button>
  );
};
