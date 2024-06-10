import { Box } from "@mui/system";

export const AvatarComponent = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "140px",
        width: "140px",
        borderRadius: "999px",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "999px",
          padding: "3px",
          background: "linear-gradient(to top, #FF7F09 0%, #C90FA0 100%)",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
        },
        background: "#fff",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <img
        src="/profile.jpeg"
        alt="Profile"
        style={{
          width: "97%",
          height: "97%",
          borderRadius: "999px",
        }}
      />
    </Box>
  );
}
