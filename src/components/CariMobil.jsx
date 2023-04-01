import { Col, Row } from "reactstrap";
const CariMobil = () => {
  return (
    <div class="container list-car">
      <div class="card-body">
        <Row>
          <Col>
            <label>Nama Mobil</label>
            <input
              type="text"
              class="form-control"
              placeholder="Ketik nama/tipe mobil"
              aria-label="Nama Mobil"
            />
          </Col>
          <Col>
            <label>Kategori</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Masukkan Kapasitas Mobil</option>
              <option value="1">2-4 Orang</option>
              <option value="2">4-6 Orang</option>
              <option value="3">6-8 Orang</option>
            </select>
          </Col>
          <Col>
            <label>Harga</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Masukkan Harga Sewa Perhari</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </Col>
          <Col>
            <label>Status</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Disewa</option>
              <option value="1">Ada</option>
            </select>
          </Col>
          <Col>
            <button type="button" class="btn btn-success btn-listcar">
              Cari Mobil
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CariMobil;
