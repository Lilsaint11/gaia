import Image from "next/image";
import Expect from "./components/expect";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import HowItWorks from "./components/howitworks";
import Join from "./components/join";
import Map from "./components/map";
import Practitioners from "./components/practitioners";
import Products from "./components/products";
import Search from "./components/search";
import Services from "./components/services";
import Why from "./components/why";
import { Box } from "@mui/material";


export default function Home() {
  return (
    <Box sx={{overflow:"hidden",}} >
      <Header />
      <Hero />
      <Map />
      <Practitioners />
      <Why />
      <HowItWorks />
      <Expect />
      <Products />
      <Join />
      <Services />
      <Search />
      <Footer />
    </Box>
  );
}
