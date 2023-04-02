import { useState, useEffect } from "react";
import CariMobil from "../components/CariMobil";
import ListMobil from "../components/ListMobil";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from "axios";
import { Container, Row } from "reactstrap";
import { useSearchParams } from "react-router-dom";

const SearchCar = () => {
  const [cars, setCars] = useState([]);
  const [searchParams] = useSearchParams();

  const nameParams = searchParams.get("name");
  const categoryParams = searchParams.get("category");
  const statusParams = searchParams.get("status");

  useEffect(() => {
    async function getCars() {
      let params = new URLSearchParams();
      if (nameParams) {
        params.append("name", nameParams);
      }

      if (categoryParams) {
        params.append("category", categoryParams);
      }

      if (statusParams) {
        params.append("isRented", statusParams);
      }
      const response = await axios.get(
        `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?${params.toString()}`
      );
      setCars(response.data.cars);
    }
    getCars();
  }, [nameParams, categoryParams, statusParams]);

  return (
    <div>
      <NavBar />
      <Header />
      <CariMobil />
      <Container>
        <Row>
          {cars.map((car) => (
            <ListMobil
              id={car.id}
              name={car.name}
              image={car.image}
              price={car.price}
            />
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default SearchCar;
