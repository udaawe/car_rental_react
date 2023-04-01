import { Container, Row, Col, Card } from "reactstrap";
import img from "../assets/img/car.png";

const ListMobil = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card className="car-list">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Innova</h5>
              <h3>Rp 500.000 / hari</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" class="btn btn-success btn-car-list">
                Pilih Mobil
              </a>
            </div>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="car-list">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Innova</h5>
              <h3>Rp 500.000 / hari</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" class="btn btn-success btn-car-list">
                Pilih Mobil
              </a>
            </div>
          </Card>
        </Col>{" "}
        <Col md={4}>
          <Card className="car-list">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Innova</h5>
              <h3>Rp 500.000 / hari</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
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
