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
          width: "55vw",
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Ready to Begin Your Wellness Journey?
        </Typography>

        <Typography
          sx={{
            color: "#64748B",
            fontSize: "20px",
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
            fontSize: "24px",
            backgroundColor: "#66BC45",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Search for a Practitioner Now
        </Typography>
      </Box>
    </Box>
  );
};

export default Search;
