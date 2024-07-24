import { Box, Paper, useTheme } from "@mui/material";

interface PictureProps {
  source?: string;
}

export const PictureComponent: React.FC<PictureProps> = ({
  source = "/logo.png",
}) => {
  const theme = useTheme();
  return (
    <Paper
      elevation={4}
      sx={{
        width: "169px",
        height: "126px",
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
        bgcolor={theme.palette.default.main}
        width="100%"
        height="100%"
        borderColor="transparent"
      />
    </Paper>
  );
};
