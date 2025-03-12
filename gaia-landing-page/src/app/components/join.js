import { Box, Typography } from "@mui/material";

const Join = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#85A484",
        py: {xs:"2rem",md:"5rem"},
        px:{xs:"2rem",md: "8rem"}
      }}
      
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "5rem", 
            flexDirection: {xs:"column-reverse",md:"row"},
            gap:{xs:""},
            gap: {xs:"4rem",md:"8rem"}, 
          }}
      >
        <img src="/docs.png" alt="" className="md:w-[45vw] max-md:w-full" />

        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Typography
            sx={{
            fontSize: {xs:"35px",md:"40px"},
              color: "#023048",
              fontWeight: "bold",
              lineHeight: "45px",
            }}
          >
            JOIN THE GAIA PRACTITIONERS NETWORK
          </Typography>

          <Typography
            sx={{
              color: "white",
              fontSize: {xs:"16px",md:"20px"}
            }}
          >
            Join the Gaia Practitioners network and connect with<br />
            those who are actively seeking your services. Gain<br />
            visibility, build relationships, and help more people live<br />
            healthier, happier lives.
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
              fontSize: {xs:"18px",md:"24px"}, 
              backgroundColor: "#66BC45",
              borderRadius: "8px",
              width: "20rem",
              cursor: "pointer",
            }}
          >
            Become a Practitioner
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Join;
