import icon from "../assets/img/icon_complete.png";
import icon2 from "../assets/img/icon_price.png";
import icon3 from "../assets/img/icon_24hrs.png";
import icon4 from "../assets/img/icon_professional.png";
import { Container, Row, Col } from "reactstrap";

const WhyUs = () => {
  return (
    <main class="why-us mt-5">
      <Container>
        <h4>Why Us?</h4>
        <p>Mengapa harus pilih Binar Car Rental?</p>
        <Row>
          <Col md={3}>
            <div class="card">
              <img src={icon} alt="" />
              <h1>Mobil Lengkap</h1>
              <p>
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div class="card">
              <img src={icon2} alt="" />
              <h1>Harga Murah</h1>
              <p>
                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                rental mobil lain
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div class="card">
              <img src={icon3} alt="" />
              <h1>Layanan 24 Jam</h1>
              <p>
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div class="card">
              <img src={icon4} alt="" />
              <h1>Sopir Profesional</h1>
              <p>
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                tepat waktu
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default WhyUs;
