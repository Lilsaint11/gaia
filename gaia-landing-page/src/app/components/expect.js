import { Box, Typography } from "@mui/material";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";

const Expect = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#85A484",
        display: "flex",
        flexDirection: {xs:"column",md:"row"},
        alignItems: "center",
      
        gap:{xs:""},
        gap: {sm:"4rem",md:"8rem"}, 
        pl: {md:"7rem"},
        pr: {md:"0rem"},
        px:{xs:"2rem",}
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", pt:"2rem" ,
        pb:"2rem"  }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <Typography sx={{ color: "white", fontSize: {md:"18px"} }}>
            TAILORED CARE
          </Typography>

          <Typography
            sx={{
              fontSize: {xs:"35px",md:"40px"},
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
                <Typography sx={{ fontSize: {xs:"14px",md:"16px"}}}>Personalized Plans:</Typography>
                <Typography sx={{ fontSize: {xs:"14px",md:"16px"}}}>
                  Treatments and sessions specifically tailored to your unique
                  health goals.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", color: "white", gap: "0.75rem" }}>
              <DoneAllOutlinedIcon sx={{ color: "#3A6E27" }} />
              <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Typography sx={{ fontSize: {xs:"14px",md:"16px"}}}>Safe Environment:</Typography>
                <Typography sx={{ fontSize: {xs:"14px",md:"16px"}}}>
                  Professionals who listen to your needs and provide a safe
                  space for healing.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", color: "white", gap: "0.75rem" }}>
              <DoneAllOutlinedIcon sx={{ color: "#3A6E27" }} />
              <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Typography sx={{ fontSize: {xs:"14px",md:"16px"}}}>Long-Term Wellness:</Typography>
                <Typography sx={{ fontSize: {xs:"14px",md:"16px"}}}>
                  Many of our practitioners work with you on a long-term basis
                  to ensure lasting wellness and vitality.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <img src="/woman.png" alt="" className="lg:w-[55%] max-sm:w-full max-md:-mr-[60px]" />
    </Box>
  );
};

export default Expect;
