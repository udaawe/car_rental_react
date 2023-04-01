import CariMobil from "../components/CariMobil";
import MobilDetail from "../components/MobilDetail";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const CarDetail = () => {
  return (
    <div>
      <NavBar />
      <div className="empty" />
      <CariMobil />
      <MobilDetail />
      <Footer />
    </div>
  );
};

export default CarDetail;
