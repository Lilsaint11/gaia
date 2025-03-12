import { Box, Typography, TextField, Select, MenuItem, Button } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Map = () => {
  return (
    <Box sx={{ position: "relative", zIndex: 50 }}>
      <img src="/map.png" alt="Map" style={{ width: "100%",objectFit:"cover" }} className="md:h-[100vh] max-md:h-[60vh]" />

      <Box
        sx={{
          backgroundColor: "#E7F7E1",
          padding: {xs:"1.5rem",md:"2.5rem"},
          width: {xs:"90%",sm:"80%",md:"calc(100vw - 600px)"},
          position: "absolute",
          top: {xs:"-5rem",sm:"-10rem"},
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          borderRadius: "1.5rem",
        }}
      >

        <Typography variant="h1" sx={{ fontSize: {xs:"36px",md:"48px"}, fontWeight: "bold",textAlign:"center" }}>
          Find the Practitioner
        </Typography>

        <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
          <Typography
            sx={{ color: "#66BC45", textDecoration: "underline", cursor: "pointer" }}
          >
            clear all
          </Typography>
        </Box>

        <Box component="form" sx={{ width: "100%", display: "grid", gap: 2, gridTemplateColumns: {xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)"} }}>
  
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography  sx={{ fontSize: {xs:"14px",md:"16px"}}}>ZIP CODE</Typography>
            <TextField
              placeholder="Enter here"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  height: "48px",
                },
              }}
            />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography sx={{ fontSize: {xs:"14px",md:"16px"}}}>SELECT MILES</Typography>
            <Select
              value={1}
              fullWidth
              sx={{
                borderRadius: "10px",
                height: "48px",
              }}
            >
              <MenuItem value="">0</MenuItem>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography sx={{ fontSize: {xs:"14px",md:"16px"}}}>SELECT TYPE</Typography>
            <Select
              value=""
              fullWidth
              sx={{
                borderRadius: "10px",
                height: "48px",
              }}
            >
              <MenuItem value="">ALL</MenuItem>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </Box>


          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography sx={{ fontSize: {xs:"14px",md:"16px"}}}>SPECIALITY</Typography>
            <Select
              value=""
              fullWidth
              sx={{
                borderRadius: "10px",
                height: "48px",
              }}
            >
              <MenuItem value="">Select here</MenuItem>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </Box>


          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography sx={{ fontSize: {xs:"14px",md:"16px"}}}>TAGS</Typography>
            <Select
              value=""
              fullWidth
              sx={{
                borderRadius: "10px",
                height: "48px",
              }}
            >
              <MenuItem value="">Select here</MenuItem>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </Box>

          
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <Typography>&nbsp;</Typography>
            <Button
              fullWidth
              variant="contained"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                backgroundColor: "#66BC45",
                borderRadius: "10px",
                height: "48px",
                color: "white",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#58A73C",
                },
              }}
            >
              <SearchOutlinedIcon />
              <Typography sx={{ fontSize: "18px" }}>Search</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Map;
