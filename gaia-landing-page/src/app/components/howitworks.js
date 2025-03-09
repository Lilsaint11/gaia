import { Box, Typography} from "@mui/material";
const HowItWorks = () => {
    

    return ( 
        <div className='p-16 flex flex-col gap-16 items-center justify-center bg-[#F5FBF2] '>
            <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>HOW IT WORKS</Typography>
                <div className='flex gap-7  justfy-between '>
                    <Box
                        sx={{
                            width: "100%",
                            boxShadow: "0px 4px 15px rgba(185, 225, 171, 0.5)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            px: "1.25rem", 
                            py: "3rem",    
                            borderRadius: "12px",
                            gap: "1.25rem", 
                            backgroundColor: "#D1EDC5",
                        }}
                        >
                        <Box
                            sx={{
                            width: "4rem",
                            height: "4rem",
                            borderRadius: "999px",
                            backgroundColor: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            }}
                        >
                            <img src="/profile2.png" alt="Browse Profiles" />
                        </Box>

                        <Typography
                            sx={{
                            fontSize: { xs: "30px", xl: "36px" },
                            fontWeight: "500",
                            color: "#023048",
                            }}
                        >
                            Search
                        </Typography>

                        <Typography
                            sx={{
                            textAlign: "center",
                            fontSize: "18px",
                            lineHeight: "25px",
                            }}
                        >
                            Use our intuitive search tool to filter by location, specialty, and treatment type.
                        </Typography>
                    </Box>
            

                    <Box
                        sx={{
                            width: "100%",
                            boxShadow: "0px 4px 15px rgba(185, 225, 171, 0.5)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            px: "1.25rem", 
                            py: "3rem",    
                            borderRadius: "12px",
                            gap: "1.25rem", 
                            backgroundColor: "#D1EDC5",
                        }}
                        >
                        <Box
                            sx={{
                            width: "4rem",
                            height: "4rem",
                            borderRadius: "999px",
                            backgroundColor: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            }}
                        >
                            <img src="/profile2.png" alt="Browse Profiles" />
                        </Box>

                        <Typography
                            sx={{
                                fontSize: { xs: "30px", xl: "36px" },
                            fontWeight: "500",
                            color: "#023048",
                            }}
                        >
                            Browse Profiles
                        </Typography>

                        <Typography
                            sx={{
                            textAlign: "center",
                            fontSize: "18px",
                            lineHeight: "25px",
                            }}
                        >
                            Explore detailed practitioner profiles to learn about their qualifications, treatment methods, and approach to healing.
                        </Typography>
                    </Box>

                    <Box
                    sx={{
                        width: "100%",
                        boxShadow: "0px 4px 15px rgba(185, 225, 171, 0.5)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        px: "1.25rem",
                        py: "3rem",
                        borderRadius: "12px",
                        gap: "1.25rem",
                        backgroundColor: "#D1EDC5",
                    }}
                    >
                    <Box
                        sx={{
                        width: "4rem",
                        height: "4rem",
                        borderRadius: "999px",
                        backgroundColor: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        }}
                    >
                        <img src="/shake.png" alt="Connect" />
                    </Box>

                    <Typography
                        sx={{
                        fontSize: { xs: "30px", xl: "36px" },
                        fontWeight: "500",
                        color: "#023048",
                        }}
                    >
                        Connect
                    </Typography>

                    <Typography
                        sx={{
                        textAlign: "center",
                        fontSize: "18px",
                        lineHeight: "25px",
                        }}
                    >
                        Once you’ve found a practitioner that suits your needs, book an appointment directly or contact them to discuss your goals.
                    </Typography>
                    </Box>

                    <Box
                    sx={{
                        width: "100%",
                        boxShadow: "0px 4px 15px rgba(185, 225, 171, 0.5)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        px: "1.25rem",
                        py: "3rem",
                        borderRadius: "12px",
                        gap: "1.25rem",
                        backgroundColor: "#D1EDC5",
                    }}
                    >
                    <Box
                        sx={{
                        width: "4rem",
                        height: "4rem",
                        borderRadius: "999px",
                        backgroundColor: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        }}
                    >
                        <img src="/work2.png" alt="Pro-Practitioner" />
                    </Box>

                    <Typography
                        sx={{
                        fontSize: { xs: "30px", xl: "36px" },
                        fontWeight: "500",
                        color: "#023048",
                        }}
                    >
                        Pro-Practitioner
                    </Typography>

                    <Typography
                        sx={{
                        textAlign: "center",
                        fontSize: "18px",
                        lineHeight: "25px",
                        }}
                    >
                        Once you’ve found a practitioner that suits your needs, book an appointment directly or contact them to discuss your goals.
                    </Typography>
                    </Box>

                </div>
                <Typography
                    sx={{
                        px: "1rem",  
                        py: "0.5rem", 
                        fontWeight: "600",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "24px", 
                        backgroundColor: "#66BC45",
                        borderRadius: "8px", 
                        cursor: "pointer", 
                    }}
                >
                Find a Practitioner Now
                </Typography>

        </div>
     );
}
 
export default HowItWorks;



