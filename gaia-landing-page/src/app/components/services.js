import { Box, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

const products = [
  {
    name: "Personalized Practitioner Matching",
    image: "/gaia46.png",
  },
  {
    name: "Explore Holistic Wellness Centers",
    image: "/gaia45.png",
  },
  {
    name: "Virtual & In-Person Consultations",
    image: "/gaia38.png",
  },
  {
    name: "Browse Trusted Practitioners",
    image: "/gaia31.png",
  },
];

const Services = () => {
  return (
    <Box
      sx={{
        p: "4rem",
        px:{xs:"1rem",md:"4rem"},
        display: "flex",
        flexDirection: "column",
        gap: "4rem",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
      }}
    >
      <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>
        OUR SERVICES
      </Typography>

      <Box sx={{ display: "flex", gap: "1.25rem", justifyContent: "space-between", width: "100%",overflow:"hidden",overflowX: "auto", pb:{xs:"1rem"}, }}>
        {products.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              boxShadow: "0px 2px 4px rgba(185, 225, 171, 0.5)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 0,
              borderRadius: "12px",
              gap: "1.25rem",
            }}
          >
            <Box
              sx={{
                width: {xs:"200px",md:"100%"},
                borderRadius: "999px",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={item.image}
                alt=""
                style={{
                  width: "100%",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              />
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                px: {xs:"0.5rem",md:"1.75rem"}, 
                py: "0.25rem", 
                gap: "1.25rem",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: {xs:"24px",md:"28px"},
                  lineHeight: "30px",
                  color: "#488B2E",
                  height:{xs:"90px",md:"100%"}
                }}
              >
                {item.name}
              </Typography>

              <Box
                sx={{
                  border: "1px solid #488B2E",
                  color: "#488B2E",
                  py: "0.25rem",
                  width: "100%",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  mb: "1.25rem",
                }}
              >
                <Typography sx={{ color: "#488B2E", fontSize: {xs:"10px",md:"16px"},px: {xs:"10px",md:0}, }}>
                  Find Your Practitioner
                </Typography>
                <EastIcon sx={{ pt: "0.25rem" }} />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Services;
