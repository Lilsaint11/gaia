import { Box, Typography } from "@mui/material";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";

const Why = () => {
  return (
    <Box
      sx={{
        my: "2.5rem",
        backgroundColor: "#85A484",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "8rem", 
        pr: "7rem",
      }}
    >
      <img src="/389.png" alt="" style={{ width: "55%" }} />

      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", pt:"2rem" ,
        pb:"2rem"  }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <Typography sx={{ color: "white", fontSize: "18px" }}>
            TRUSTED NETWORK
          </Typography>

          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: "bold",
              color: "#023048",
              lineHeight: "50px",
            }}
          >
            WHY CHOOSE GAIA PRACTITIONERS?
          </Typography>

          <Box sx={{ fontSize: "18px", mt: 2, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <Box sx={{ display: "flex", color: "white", gap: "0.75rem" }}>
              <DoneAllOutlinedIcon sx={{ color: "#3A6E27" }} />
              <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Typography sx={{ fontSize: "18px" }}>Wide Range of Services:</Typography>
                <Typography sx={{ fontSize: "18px" }}>
                  From yoga and acupuncture to energy healing and nutrition counseling,
                  discover practitioners across a spectrum of holistic treatments.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", color: "white", gap: "0.75rem" }}>
              <DoneAllOutlinedIcon sx={{ color: "#3A6E27" }} />
              <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Typography sx={{ fontSize: "18px" }}>Verified Professionals:</Typography>
                <Typography sx={{ fontSize: "18px" }}>
                  Every practitioner in our network is vetted for experience, certification,
                  and holistic care expertise.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", color: "white", gap: "0.75rem" }}>
              <DoneAllOutlinedIcon sx={{ color: "#3A6E27" }} />
              <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Typography sx={{ fontSize: "18px" }}>Personalized Healing:</Typography>
                <Typography sx={{ fontSize: "18px" }}>
                  We believe in the power of individualized care, ensuring each session
                  is tailored to your specific needs.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Why;
