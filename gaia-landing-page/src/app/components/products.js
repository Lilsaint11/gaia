import { Box, Typography, Rating } from "@mui/material";

const products = [
  {
    name: "Bio-Well 3.0 Device New 2023 Model + Private Advanced Level 1 Certification Training (12 hours)",
    price: "310,100.00",
    image: "/p4.png",
    rating: 5.0,
  },
  {
    name: "Bio-Well 3.0 Device Biowell GDV Camera + Fast Free National Shipping + Free Gifts",
    price: "310,100.00",
    image: "/p3.png",
    rating: 5.0,
  },
  {
    name: "Bio-Well Sputnik Sensor - Measure the Energy of Space",
    price: "310,100.00",
    image: "/p1.png",
    rating: 5.0,
  },
  {
    name: "Bio-Well Sputnik Sensor - Measure the Energy of Space",
    price: "310,100.00",
    image: "/p2.png",
    rating: 5.0,
  },
];

const Products = () => {
  return (
    <Box
      sx={{
        p: "4rem",
        display: "flex",
        flexDirection: "column",
        gap: "4rem",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5FBF2",
      }}
    >
      <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>
        OUR PRODUCTS
      </Typography>

      <Box sx={{ display: "flex", gap: "1.25rem", justifyContent: "space-between", width: "100%" }}>
        {products.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              boxShadow: "0px 2px 4px rgba(185, 225, 171, 0.5)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: "1.25rem",
              borderRadius: "12px",
              gap: "1.25rem",
              backgroundColor: "white",
            }}
          >
            <Box sx={{ width: "100%", borderRadius: "999px", backgroundColor: "white", display: "flex", alignItems: "center" }}>
              <img src={item.image} alt="" style={{ width: "100%" }} />
            </Box>

            <Typography
              sx={{
                textAlign: "center",
                fontSize: "18px",
                lineHeight: "25px",
                color: "#3D3D3D",
                height: "4rem",
              }}
            >
              {item.name}
            </Typography>

            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#488B2E",
              }}
            >
              Rs. {item.price}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
              <Rating name="read-only" value={item.rating} precision={0.5} readOnly />
              <Typography>({item.rating}.0)</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Products;
