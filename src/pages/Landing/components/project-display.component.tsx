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
      <Box width="100%" height="126px" bgcolor="#6295A2" />
      <Box width="100%" mt="10px">
        <Typography
          fontSize="18px"
          fontWeight="bold"
          textAlign="start"
          color="#B3E2A7"
        >
          {title}
        </Typography>
        <Typography fontSize="10px" textAlign="start" color="#686D76">
          {subtitle}
        </Typography>
      </Box>
    </Paper>
  );
};
