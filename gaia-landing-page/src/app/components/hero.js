import { Box, Typography, Button } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "calc(100vh + 200px)",
        width: "100vw",
      }}
    >
    
      <Box sx={{ width: "100%" }}>
        <img
          src="/hero.png"
          alt="Hero"
          style={{
            position: "absolute",
            zIndex: 10,
            right: 0,
            height: "100%",
            width: "calc(100vw - 200px)",
            objectFit: "cover",
          }}
        />
      </Box>

      <Box
        className="overlay"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          height: "100%",
          width: "100vw",
          padding: "4rem",
          paddingTop: "10rem",
          position: "relative",
          zIndex: 50,
          backgroundRepeat: "no-repeat",
        }}
      >
   
        <Box sx={{ color: "#023048", zIndex: 50 }}>
          <Typography variant="h6" sx={{ fontSize: "24px" }}>
            WELCOME TO GAIA HEALERS
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: "64px",
              lineHeight: "80px",
              fontWeight: "bold",
            }}
          >
            CONNECT WITH <br />
            TRUSTED HOLISTIC <br />
            PROFESSIONALS
          </Typography>

          <img
            src="/Profiles.png"
            alt="Profiles"
            style={{
              objectFit: "contain",
              width: "20rem",
            }}
          />
        </Box>

    
        <Button
          variant="contained"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            padding:"10px",
            height: "4rem",
            width: "19rem",
            backgroundColor: "#66BC45",
            color: "white",
            textTransform: "none",
            fontSize: "24px",
            "&:hover": {
              backgroundColor: "#58A73C",
            },
          }}
        >
          Find a Practitioner Now
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
