import CariMobil from "../components/CariMobil";
import MobilDetail from "../components/MobilDetail";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import axios from "axios";

const CarDetail = () => {
  const [car, setCar] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function getCar() {
      const response = await axios.get(
        `https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`
      );
      setCar(response.data);
    }
    getCar();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="empty" />
      <CariMobil />
      <MobilDetail name={car.name} image={car.image} price={car.price} />
      <Footer />
    </div>
  );
};

export default CarDetail;
