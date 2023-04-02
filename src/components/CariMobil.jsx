import { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import { useNavigate, useSearchParams } from "react-router-dom";

const CariMobil = () => {
  const [name, setName] = useState(undefined);
  const [category, setCategory] = useState(undefined);
  const [price, setPrice] = useState(undefined);
  const [status, seStatus] = useState(undefined);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const nameParams = searchParams.get("name");
  const categoryParams = searchParams.get("category");
  const statusParams = searchParams.get("status");

  useEffect(() => {
    if (nameParams) {
      setName(nameParams);
    }

    if (categoryParams) {
      setCategory(categoryParams);
    }

    if (statusParams) {
      seStatus(statusParams);
    }
  }, []);

  const onSearch = () => {
    let params = new URLSearchParams();
    if (name) {
      params.append("name", name);
    }

    if (category) {
      params.append("category", category);
    }

    if (status) {
      params.append("status", status);
    }
    navigate({
      pathname: "/searchcar",
      search: params.toString(),
    });
  };

  return (
    <div class="container list-car">
      <div class="card-body">
        <Row>
          <Col>
            <label>Nama Mobil</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ketik nama/tipe mobil"
              aria-label="Nama Mobil"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
          <Col>
            <label>Kategori</label>
            <select
              class="form-select"
              aria-label="Default select example"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option selected>Masukkan Kapasitas Mobil</option>
              <option value="small">2-4 Orang</option>
              <option value="medium">4-6 Orang</option>
              <option value="false">6-8 Orang</option>
            </select>
          </Col>
          <Col>
            <label>Harga</label>
            <select
              class="form-select"
              aria-label="Default select example"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            >
              <option selected>Masukkan Harga Sewa Perhari</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </Col>
          <Col>
            <label>Status</label>
            <select
              class="form-select"
              aria-label="Default select example"
              value={status}
              onChange={(e) => seStatus(e.target.value)}
            >
              <option selected>Pilih Status</option>
              <option value={true}>Disewa</option>
              <option value={false}>Ada</option>
            </select>
          </Col>
          <Col>
            <button
              onClick={onSearch}
              type="button"
              class="btn btn-success btn-listcar"
            >
              Cari Mobil
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CariMobil;
