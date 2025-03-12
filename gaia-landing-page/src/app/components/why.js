import { Box, Typography } from "@mui/material";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";

const Why = () => {
  return (
    <Box
    sx={{
        backgroundColor: "#85A484",
        display: "flex",
        flexDirection: {xs:"column-reverse",md:"row"},
        alignItems: "center",
      
        gap:{xs:""},
        gap: {xs:"2rem",md:"8rem"}, 
        pr: {md:"7rem"},
 
        px:{xs:"2rem",}
      }}
    >
      <img src="/389.png" alt=""className="lg:w-[55%] max-sm:w-full" style={{ marginLeft:"-60px" }} />

      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", pt:"2rem" ,
        pb:"2rem"  }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <Typography sx={{ color: "white", fontSize: {md:"18px"} }}>
            TRUSTED NETWORK
          </Typography>

          <Typography
            sx={{
                fontSize: {xs:"35px",md:"40px"},
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
                <Typography sx={{ fontSize: {xs:"14px",md:"16px"}}}>Wide Range of Services:</Typography>
                <Typography sx={{ fontSize: {xs:"14px",md:"16px"}}}>
                  From yoga and acupuncture to energy healing and nutrition counseling,
                  discover practitioners across a spectrum of holistic treatments.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", color: "white", gap: "0.75rem" }}>
              <DoneAllOutlinedIcon sx={{ color: "#3A6E27" }} />
              <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Typography sx={{ fontSize: {xs:"14px",md:"16px"}}}>Verified Professionals:</Typography>
                <Typography sx={{ fontSize: {xs:"14px",md:"16px"}}}>
                  Every practitioner in our network is vetted for experience, certification,
                  and holistic care expertise.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", color: "white", gap: "0.75rem" }}>
              <DoneAllOutlinedIcon sx={{ color: "#3A6E27" }} />
              <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Typography sx={{ fontSize: {xs:"14px",md:"16px"}}}>Personalized Healing:</Typography>
                <Typography sx={{ fontSize: {xs:"14px",md:"16px"}}}>
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
