import { Box, Typography} from "@mui/material";
const HowItWorks = () => {
    

    return ( 
        <div className='p-16 max-md:px-5 max-md:py-10 flex flex-col gap-16 max-md:gap-5 items-center justify-center bg-[#F5FBF2] '>
            <Typography sx={{ fontSize: {xs:"35px",md:"40px"}, fontWeight: "bold" }}>HOW IT WORKS</Typography>
                <div className='flex gap-7 max-md:gap-4  justfy-between max-lg:grid max-lg:grid-cols-2 '>
                    <Box
                        sx={{
                            width: "100%",
                            boxShadow: "0px 4px 15px rgba(185, 225, 171, 0.5)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            px: "1.25rem", 
                            py: {xs: "1rem" , md:"3rem"},    
                            borderRadius: "12px",
                            gap: {xs: "0.5rem" , md:"1.25rem"}, 
                            backgroundColor: "#D1EDC5",
                        }}
                    >
                        <Box
                            sx={{
                            width: {xs:"3rem",md:"4rem"},
                            height: {xs:"3rem",md:"4rem"},
                            borderRadius: "999px",
                            backgroundColor: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            }}
                        >
                            <img src="/search2.png" alt="search" className="max-md:w-7" />
                        </Box>

                        <Typography
                            sx={{
                            fontSize: { xs: "20px", xl: "36px" },
                            fontWeight: "500",
                            color: "#023048",
                            }}
                        >
                            Search
                        </Typography>

                        <Typography
                            sx={{
                            textAlign: "center",
                            fontSize: {xs:"14px",md:"18px"},
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
                            py: {xs: "1rem" , md:"3rem"}, 
                            borderRadius: "12px",
                            gap: {xs: "0.5rem" , md:"1.25rem"}, 
                            backgroundColor: "#D1EDC5",
                        }}
                        >
                        <Box
                            sx={{
                            width: {xs:"3rem",md:"4rem"},
                            height: {xs:"3rem",md:"4rem"},
                            borderRadius: "999px",
                            backgroundColor: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            }}
                        >
                            <img src="/profile2.png" alt="Browse Profiles" className="max-md:w-7" />
                        </Box>

                        <Typography
                            sx={{
                                fontSize: { xs: "20px", xl: "36px" },
                                fontWeight: "500",
                                color: "#023048",
                                textAlign: "center"
                            }}
                        >
                            Browse Profiles
                        </Typography>

                        <Typography
                            sx={{
                            textAlign: "center",
                            fontSize: {xs:"14px",md:"18px"},
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
                        py: {xs: "1rem" , md:"3rem"}, 
                        borderRadius: "12px",
                        gap: {xs: "0.5rem" , md:"1.25rem"}, 
                        backgroundColor: "#D1EDC5",
                    }}
                    >
                    <Box
                        sx={{
                        width: {xs:"3rem",md:"4rem"},
                        height: {xs:"3rem",md:"4rem"},
                        borderRadius: "999px",
                        backgroundColor: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        }}
                    >
                        <img src="/shake.png" alt="Connect" className="max-md:w-7" />
                    </Box>

                    <Typography
                        sx={{
                        fontSize: { xs: "20px", xl: "36px" },
                        fontWeight: "500",
                        color: "#023048",
                        }}
                    >
                        Connect
                    </Typography>

                    <Typography
                        sx={{
                        textAlign: "center",
                        fontSize: {xs:"14px",md:"18px"},
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
                        py: {xs: "1rem" , md:"3rem"}, 
                        borderRadius: "12px",
                        gap: {xs: "0.5rem" , md:"1.25rem"}, 
                        backgroundColor: "#D1EDC5",
                    }}
                    >
                    <Box
                        sx={{
                        width: {xs:"3rem",md:"4rem"},
                        height: {xs:"3rem",md:"4rem"},
                        borderRadius: "999px",
                        backgroundColor: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        }}
                    >
                        <img src="/work2.png" alt="Pro-Practitioner" className="max-md:w-7" />
                    </Box>

                    <Typography
                        sx={{
                        fontSize: { xs: "20px", xl: "36px" },
                        fontWeight: "500",
                        color: "#023048",
                        textAlign: "center"
                        }}
                    >
                        Pro-Practitioner
                    </Typography>

                    <Typography
                        sx={{
                        textAlign: "center",
                        fontSize: {xs:"14px",md:"18px"},
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
                        fontSize: {xs:"18px",md:"24px"}, 
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



