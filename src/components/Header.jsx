import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import logo from "../assets/img/img_car.png";
const Header = () => {
  return (
    <header class="lets-begin">
      <Container>
        <Row>
          <Col md={6} mt={3}>
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas <br />
              terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
              <br />
              untuk sewa mobil selama 24 jam.
            </p>
            <Link to="/searchcar" class="btn  btn-success">
              Mulai Sewa Mobil
            </Link>
          </Col>
          <Col md={6}>
            <img src={logo} class="responsive" alt="#" />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
