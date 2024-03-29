import Navbar from "@/app/components/navbar/navbar";
import Banner from "./components/Banner/Banner";
import Offers from "./components/offers/Offers";
import HomeAndOutdoor from "./components/SourceProducts/HomeAndOutdoor";
import ConsumerElectronicsAndGadgets from "./components/SourceProducts/ConsumerElectronicsAndGadgets";
import Requests from "./components/requests/Requests";
import RecommendedItems from "./components/RecommendedItems/RecommendedItems";
import OurExtraServices from "./components/OurExtraServices/OurExtraServices";
import SuppliersByRegion from "./components/SuppliersByRegion/SuppliersByRegion";
import Footer from "./components/Footer/Footer";
import Nav from "@/app/components/navbar/nav";

export default function Home() {
  return (
      <main>
         <Navbar/>
          <Nav/>
          <Banner/>
          <Offers/>
          <HomeAndOutdoor/>
          <ConsumerElectronicsAndGadgets/>
          <Requests/>
          <RecommendedItems/>
          <OurExtraServices/>
          <SuppliersByRegion/>
          <Footer/>
      </main>
  );
}
