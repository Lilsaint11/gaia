import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { Box, Typography, Rating, Button, Card, CardContent, CardMedia } from "@mui/material";
const Practitioners = () => {
    
    const practitioners = [
        {
          name: "Love Freeman",
          address: "123 Main Street, New York, NY",
          image:"/love.png",
          rating: 4.8,
          remote: true,
          work: [
            {name:"Bio-Well Practitioner"},
            {name:"Sound Healer"},
            {name:"Certified Transformational Coach"},
            {name:"Bio-Well Certified Practitioner"},
            {name:"Past Life Regression Practitioner"},
            {name:"Mindset Coach"},
          ],
        },
        {
          name: "Ann Adams",
          address: "Watkinsville GA 30677 US",
          image:"/ann.png",
          rating: 4.9,
          remote: false,
          work: [
            {name:"Bio-Well Practitioner"},
            {name:"Sound Healer"},
            {name:"Certified Transformational Coach"},
            {name:"Bio-Well Certified Practitioner"},
            {name:"Past Life Regression Practitioner"},
            {name:"Mindset Coach"},
          ],
        },
       
      ];
      
    return ( 
        <Box
        sx={{
            p: { xs: "0.5rem", sm: "2rem" }, 
            pt: { xs: "1.5rem", sm: "2rem" },      
          display: "flex",
          flexDirection: "column",
          gap: {xs:"1rem",md:"4rem"},      
          alignItems: {md:"center"},
          justifyContent: "center",
        }}
      >
      
            <Typography sx={{ fontSize: {xs:"35px",md:"40px"},textAlign:"center", fontWeight: "bold" }}>
            OUR TOP PRACTITIONERS
            </Typography>

            <Box
                sx={{
                display:"flex",
                gap: "10px",  
                overflow:"hidden",
                overflowX: "auto" , 
                width:"100%"  
                }}
            >
            {practitioners.map((practitioner, index) => (
                <Box
                key={index}
                sx={{
                  width: "100%",
                  boxShadow: "0 10px 15px -3px rgba(203, 213, 225, 0.5)", 
                  display: "flex",
                  display: "flex",
                    flexDirection: {xs:"column",md:"row"},
                  justifyContent: "space-between",
                  p: "1.75rem",       
                  gap: "1.25rem",     
                  borderRadius: "1rem", 
                }}
              >              
                <Box sx={{ width: "100%", }}>
                    <Box
                        sx={{
                        backgroundColor: "#E7F7E1",
                        borderRadius: "8px",
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        alignItems: "center",
                        width: "100%",
                        }}
                    >
                        <Box sx={{ position: "relative", width: {xs:"250px",md:"100%"}, }}>
                        <img
                            src={practitioner.image}
                            alt=""
                            style={{ borderRadius: "8px", width: "100%" }}
                        />
                        <Typography
                            sx={{
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "#66BC45",
                            border: "2px solid #fff",
                            borderTopLeftRadius: "8px",
                            borderTopRightRadius: "8px",
                            color: "#fff",
                            px: 1,
                            py: 0.5,
                            fontSize:{xs:"18px",md:"16px"},
                            }}
                        >
                            Recommended
                        </Typography>
                        </Box>

                        {practitioner.remote && (
                        <Typography
                            sx={{
                            fontSize:{xs:"18px",md:"16px"},
                            mt: 1,
                            px: 1.5,
                            py: 0,
                            backgroundColor: "#66BC45",
                            borderRadius: "8px",
                            color: "#fff",
                            }}
                        >
                            Remote
                        </Typography>
                        )}
                    </Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
                    <Typography
                        sx={{
                            color: "#488B2E",
                            textTransform: "capitalize",
                            fontWeight: "600",
                            fontSize: {xs:"28px",md:"36px"}
                        }}
                        >
                        {practitioner.name}
                    </Typography>

                    <Typography
                        sx={{
                                fontSize: {xs:"22px",md:"26px"},
                            color: "#12270C"
                        }}
                        >
                        {practitioner.address}
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography sx={{ fontWeight: "500", fontSize: "21px" }}>
                            {practitioner.rating}
                        </Typography>

                        <Rating
                            name="read-only"
                            value={practitioner.rating}
                            precision={0.5}
                            readOnly
                        />

                        <Typography sx={{ color: "#1D1D1D", fontSize: "21px" }}>
                            Review
                        </Typography>
                    </Box>
                        <Box sx={{ mt: 3, display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {practitioner.work.map((item, index) => (
                            <Typography
                            key={index}
                            sx={{
                                color: "#315823",
                                backgroundColor: "#E7F7E1",
                                px: 2,
                                py: 0.5,
                                borderRadius: "999px", 
                                fontSize:{xs:"16px",md:"16px"},
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            >
                            {item.name}
                            </Typography>
                        ))}
                        </Box>

                        <Box sx={{  gap: 2, display: "flex",flexDirection:{xs:"column",md:"row"}, justifyContent: "flex-end", alignItems: "center", mt: 6 }}>
                            <Box
                                sx={{
                                backgroundColor: "#66BC45",
                                color: "white",
                                px: 2,
                                py: 1.3,
                                borderRadius: "8px",
                                fontSize: "19px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 2,
                                cursor: "pointer",
                                width:"100%"
                                }}
                            >
                                <Typography sx={{ fontSize:{xs:"16px",md:"16px"},}}>Schedule a Meeting</Typography>
                                <ArrowOutwardOutlinedIcon />
                            </Box>

                            <Box
                                sx={{
                                border: "1px solid #29481F",
                                color: "#29481F",
                                px: 2,
                                py: 1.3,
                                borderRadius: "8px",
                                fontSize: "19px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 2,
                                cursor: "pointer",
                                width:{xs:"100%",md:"80%"}
                                }}
                            >
                                <Typography sx={{ fontSize:{xs:"16px",md:"16px"},}}>View Profile</Typography>
                                <Person2OutlinedIcon />
                            </Box>
                            </Box>

                </Box>
            </Box>
            ))}
            </Box>
        </Box>
     );
}
 
export default Practitioners;

