import { Box, Typography } from "@mui/material";

const Search = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#85A484",
        py: "5rem", 
        px:"2rem"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.25rem",
          backgroundColor: "white",
          p: "2.5rem", 
          borderRadius: "12px",
          width: {md:"55vw"},
        }}
      >
        <Typography
          sx={{
            fontSize: {xs:"30px",md:"40px"},
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Ready to Begin Your Wellness Journey?
        </Typography>

        <Typography
          sx={{
            color: "#64748B",
            fontSize:  {xs:"14px",md:"20px"},
            textAlign: "center",
          }}
        >
          Healing begins with the right guidance. Gaia Practitioners is here to
          help you find the expert who will support you every step of the
          way—whether you're dealing with chronic pain, seeking emotional
          balance, or simply improving your overall wellness.
        </Typography>

        <Typography
          sx={{
            px: "1rem",
            py: "0.5rem",
            fontWeight: "600",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize:  {xs:"18px",md:"24px"},
            backgroundColor: "#66BC45",
            borderRadius: "8px",
            cursor: "pointer",
            textAlign:"center"
          }}
        >
          Search for a Practitioner Now
        </Typography>
      </Box>
    </Box>
  );
};

export default Search;
