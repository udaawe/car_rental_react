import NavBar from "../components/NavBar";
import CariMobil from "../components/CariMobil";
import ListMobil from "../components/ListMobil";
import Footer from "../components/Footer";

const LisCar = () => {
  return (
    <div>
      <NavBar />
      <div className="empty" />
      <CariMobil />
      <ListMobil />
      <Footer />
    </div>
  );
};

export default LisCar;
