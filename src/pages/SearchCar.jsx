import { useState, useEffect } from "react";
import CariMobil from "../components/CariMobil";
import ListMobil from "../components/ListMobil";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from "axios";
import { Container, Row } from "reactstrap";

const SearchCar = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function getCars() {
      const response = await axios.get(
        "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car"
      );
      setCars(response.data.cars);
    }
    getCars();
  }, []);

  return (
    <div>
      <NavBar />
      <Header />
      <CariMobil />
      <Container>
        <Row>
          {cars.map((car) => (
            <ListMobil name={car.name} image={car.image} price={car.price} />
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default SearchCar;
