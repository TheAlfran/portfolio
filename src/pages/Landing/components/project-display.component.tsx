import { Paper, Typography, Box } from "@mui/material";

interface ProjectDisplayComponentProps {
  title?: string;
  subtitle?: string;
}

export const ProjectDisplayComponent: React.FC<
  ProjectDisplayComponentProps
> = ({ title = "Lorem Ipsum", subtitle = "Lorem Ipsum" }) => {
  return (
    <Paper
      elevation={1}
      sx={{
        width: "265px",
        height: "200px",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        padding: "12px",
      }}
    >
      <Box width="100%" height="126px" bgcolor="#686D76" />
      <Box width="100%" mt="10px">
        <Typography fontSize="18px" textAlign="start">
          {title}
        </Typography>
        <Typography fontSize="10px" textAlign="start">
          {subtitle}
        </Typography>
      </Box>
    </Paper>
  );
};
