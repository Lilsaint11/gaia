import { Box, Typography } from "@mui/material";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";

const Expect = () => {
  return (
    <Box
      sx={{
        my: "2.5rem", 
        backgroundColor: "#85A484",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "8rem", 
        pl: "7rem", 
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", pt:"2rem" ,
        pb:"2rem"  }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <Typography sx={{ color: "white", fontSize: "18px" }}>
            TAILORED CARE
          </Typography>

          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: "bold",
              color: "#023048",
              lineHeight: "50px",
            }}
          >
            What to Expect from<br /> Your Holistic<br /> Practitioner
          </Typography>

          <Box sx={{ fontSize: "18px", mt: 2, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <Box sx={{ display: "flex", color: "white", gap: "0.75rem" }}>
              <DoneAllOutlinedIcon sx={{ color: "#3A6E27" }} />
              <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Typography>Personalized Plans:</Typography>
                <Typography>
                  Treatments and sessions specifically tailored to your unique
                  health goals.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", color: "white", gap: "0.75rem" }}>
              <DoneAllOutlinedIcon sx={{ color: "#3A6E27" }} />
              <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Typography>Safe Environment:</Typography>
                <Typography>
                  Professionals who listen to your needs and provide a safe
                  space for healing.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", color: "white", gap: "0.75rem" }}>
              <DoneAllOutlinedIcon sx={{ color: "#3A6E27" }} />
              <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Typography>Long-Term Wellness:</Typography>
                <Typography>
                  Many of our practitioners work with you on a long-term basis
                  to ensure lasting wellness and vitality.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <img src="/woman.png" alt="" style={{ width: "55%" }} />
    </Box>
  );
};

export default Expect;
