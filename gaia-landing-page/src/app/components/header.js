import { Box, Typography, Select, MenuItem, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection:{xs:"column",md:"row"},
        justifyContent: "space-between",
        alignItems: {md:"center"},
        px: {xs:2,md:5},
        py: 2,
      }}
    >
      <img src="/logo.png" alt="logo" className="max-md:w-[150px]" style={{ objectFit: "contain" }} />

      <Box sx={{ display: "flex", alignItems: "center", gap: {xs:1,sm:2}, height: 48 }}>
        <Select
          value=""
          displayEmpty
          sx={{
            border: "1px solid #888888",
            color: "#888888",
            py: 1,
            px: 1,
            borderRadius: "10px",
            height: "100%",
            width: "178px",
          }}
        >
          <MenuItem value="">Language</MenuItem>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: 1.5,
            borderRadius: "10px",
            border: "1px solid #66BC45",
            color: "#66BC45",
            height: "100%",
            cursor: "pointer",
          }}
        >
          <AddIcon />
          <Typography>Join our network</Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            px: 2,
            borderRadius: "10px",
            bgcolor: "#66BC45",
            color: "white",
            height: "100%",
            width: "96px",
            textTransform: "none",
          }}
        >
          <AccountCircleOutlinedIcon />
          <Typography>Login</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
