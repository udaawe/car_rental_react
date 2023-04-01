import { Container, Row, Col, Card } from "reactstrap";
import img from "../assets/img/car.png";

const ListMobil = ({ name, price, image }) => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card className="car-list">
            <img src={image} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <h3>Rp {price} / hari</h3>
              {/* <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              <a href="#" class="btn btn-success btn-car-list">
                Pilih Mobil
              </a>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ListMobil;
