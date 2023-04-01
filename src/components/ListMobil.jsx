import { Col, Card } from "reactstrap";
import { Link } from "react-router-dom";

const ListMobil = ({ id, name, price, image }) => {
  return (
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
          <Link to={`/searchcar/${id}`} class="btn btn-success btn-car-list">
            Pilih Mobil
          </Link>
        </div>
      </Card>
    </Col>
  );
};

export default ListMobil;
