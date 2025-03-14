import { Box, Typography, Button, TextField } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F3F3F3",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
        p: {xs:"2rem",md:"4rem"},
        pb: "2rem",
      }}
    >
      <Box sx={{ display: "flex",flexDirection:{xs:"column",md:"row"}, justifyContent: "space-between", width: "100%",gap:{xs:"3rem",md:"3rem"} }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: {xs:"1rem",md:"1.25rem"} }}>
          <img src="/logo2.png" alt="" className="max-sm:w-[150px] sm:w-[250px]" />
          <Typography sx={{ fontSize: {xs:"16px",md:"20px"}, color: "#1D1D1D" }}>
            You are just one scan away<br />
            from finding your optimal<br />
            energy wellness instead of<br />
            waiting until you have<br />
            symptoms!
          </Typography>

          <Box
            sx={{
              backgroundColor: "#66BC45",
              p: "0.75rem",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              width: "13rem",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <Box
              sx={{
                width: "1.75rem",
                height: "1.75rem",
                borderRadius: "999px",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#66BC45",
              }}
            >
              <FavoriteBorderIcon sx={{ width: 15 }} />
            </Box>
            <Typography sx={{ color: "white", fontSize: "18px", fontWeight: "600" }}>
              Follow on shop
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            {["fb.png", "ig.png", "linkedin.png", "youtube.png", "x.png"].map((icon, index) => (
              <Box
                key={index}
                sx={{
                width: {xs:"2rem",md:"3rem"},
                height: {xs:"2rem",md:"3rem"},
                  borderRadius: "999px",
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#66BC45",
                }}
              >
                <img src={icon} alt="" className="max-sm:w-[12px]" />
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: {md:"center"}, width:"100%",gap:{xs:"20px"} }}>
          <Box sx={{ display: "flex", flexDirection: "column", width:"100%", gap: "1.25rem", color: "#1D1D1D", fontSize: "18px !important", fontWeight: "600", }}>
            <Typography sx={{fontSize: {xs:"15px",md:"18px"},fontWeight: "600"}}>Home</Typography>
            <Typography sx={{fontSize: {xs:"15px",md:"18px"}, fontWeight: "600"}}>Products</Typography>
            <Typography sx={{fontSize: {xs:"15px",md:"18px"},fontWeight: "600"}}>Bio-Well Demo</Typography>
            <Typography sx={{fontSize: {xs:"15px",md:"18px"},fontWeight: "600"}}>Become an Affiliate</Typography>
            <Typography sx={{fontSize: {xs:"15px",md:"18px"},fontWeight: "600"}}>Find a Practitioner</Typography>
            <Typography sx={{fontSize: {xs:"15px",md:"18px"},fontWeight: "600"}}>Education</Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "1.25rem", color: "#1D1D1D", fontSize: {xs:"15px",md:"18px"}, fontWeight: "700" }}>
            <Typography sx={{fontSize: {xs:"15px",md:"18px"},fontWeight: "600"}}>Bio-Well Research</Typography>
            <Typography sx={{fontSize: {xs:"15px",md:"18px"}, fontWeight: "600"}}>Blogs</Typography>
            <Typography sx={{fontSize: {xs:"15px",md:"18px"}, fontWeight: "600"}}>Contact</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "16px",
            boxShadow: "0px 2px 4px rgba(176, 190, 197, 0.3)",
            p: "1.75rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            width: {xs:'100%',md:"100%"},
          }}
        >
          <Typography sx={{ fontSize: "30px", fontWeight: "600" }}>NEWS LETTER</Typography>
          <Typography sx={{ fontSize: "18px", color: "#5D726D" }}>
            Sign up to our newsletter to receive<br />
            exclusive offers.
          </Typography>

          <Box sx={{ mt: "1rem", display: "flex", flexDirection: "column", gap: "1.25rem",width:"100%" }}>
          <TextField
            placeholder="Enter your email"
            variant="outlined"
            sx={{
                backgroundColor: "#EFEFEF",
                borderRadius: "8px",
                height: "3rem",
                pl: "1.25rem",
                "& .MuiOutlinedInput-notchedOutline": {
                border: "none", 
                },
                "& .MuiOutlinedInput-root": {
                padding: 0, 
                },
            }}
            />


            <Button
              sx={{
                py: "0.5rem",
                fontWeight: "600",
                color: "white",
                backgroundColor: "#66BC45",
                fontSize: "22px",
                borderRadius: "8px",
                width: "100%",
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>
      
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection:{xs:"column",md:"row"},
          gap: "1.25rem",
          color: "#12270C",
          width: "100%",
          pt: "2rem",
          borderTop: "1px solid #DBCDFF",
          fontSize:{xs:"14px",md:"16px"}
        }}
      >
        <Typography sx={{ fontSize:{xs:"14px",md:"16px"}, textAlign:"center"}}>© COPYRIGHT © 2025 INC. ALL RIGHTS RESERVED.</Typography>
        <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.25rem",
        }}
      >
        <Typography sx={{ textDecoration: "underline", fontSize:{xs:"14px",md:"16px"} }}>Privacy</Typography>
        <Typography sx={{ textDecoration: "underline", fontSize:{xs:"14px",md:"16px"} }}>Terms</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
