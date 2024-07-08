import { Paper, Typography, Box, useTheme } from "@mui/material";

interface ProjectDisplayComponentProps {
  title?: string;
  subtitle?: string;
}

export const ProjectDisplayComponent: React.FC<
  ProjectDisplayComponentProps
> = ({ title = "Lorem Ipsum", subtitle = "Lorem Ipsum" }) => {
  const theme = useTheme();
  return (
    <Paper
      elevation={4}
      sx={{
        width: "265px",
        height: "200px",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        padding: "12px",
        bgcolor: theme.palette.default.main,
      }}
    >
      <Box width="100%" height="126px" bgcolor={theme.palette.secondary.main} />
      <Box width="100%" mt="10px">
        <Typography
          fontSize="18px"
          fontWeight="bold"
          textAlign="start"
          color={theme.palette.text.primary}
        >
          {title}
        </Typography>
        <Typography fontSize="10px" textAlign="start" color={theme.palette.text.secondary}>
          {subtitle}
        </Typography>
      </Box>
    </Paper>
  );
};
