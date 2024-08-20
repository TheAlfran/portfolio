import {
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

export const GetInTouchScene = () => {
  const theme = useTheme();
  return (
    <Grid item md={12} mt="100px">
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color={theme.palette.text.secondary}
      >
        Get In touch :
      </Typography>
      <Stack display="flex" direction="row" gap="35px" mt="15px">
        <Stack gap="15px">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            sx={{
              "& fieldset": {
                borderColor: "rgba(0, 0, 0, 0.23)",
              },
              "&:hover fieldset": {
                borderColor: "black",
              },
              "&.Mui-focused fieldset": {
                borderColor: "blue",
              },
              width: "256px",
            }}
          />
        </Stack>
        <Stack gap="15px">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{
              "& fieldset": {
                borderColor: "rgba(0, 0, 0, 0.23)",
              },
              "&:hover fieldset": {
                borderColor: "black",
              },
              "&.Mui-focused fieldset": {
                borderColor: "blue",
              },
              width: "256px",
            }}
          />
        </Stack>
      </Stack>
      <Stack display="flex" direction="row" gap="86px">
        <Stack gap="15px" mt="34px">
          <TextField
            id="outlined-textarea"
            label="Message"
            placeholder="Write the message"
            multiline
            rows={5}
            sx={{
              "& fieldset": {
                borderColor: "rgba(0, 0, 0, 0.23)",
              },
              "&:hover fieldset": {
                borderColor: "black",
              },
              "&.Mui-focused fieldset": {
                borderColor: "blue",
              },
              width: "550px",
            }}
          />
          <Button
            sx={{
              backgroundColor: theme.palette.primary.main,
              mt: "18px",
              width: "265px",
              height: "45px",
              textTransform: "initial",
            }}
          >
            <Typography color={theme.palette.text.primary}>
              Send Message
            </Typography>
          </Button>
        </Stack>
        <Stack>
          <Typography
            fontSize="24px"
            fontWeight="bold"
            color={theme.palette.text.secondary}
            lineHeight={1}
          >
            You can also contact me via phone
          </Typography>
          <Typography
            fontSize="24px"
            fontWeight="bold"
            color={theme.palette.text.secondary}
          >
            and email
          </Typography>
          <Typography fontSize="16px" color={theme.palette.text.secondary} mt="26px">
            +63 967 967 0612
          </Typography>
          <Typography fontSize="16px" color={theme.palette.text.secondary}>
            alfrancissdionsay@gmail.com
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
};
