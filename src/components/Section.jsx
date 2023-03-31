import image from "../assets/img/img_service.png";
import ceklist from "../assets/img/centang.png";
import { Container, Row, Col } from "reactstrap";
const Section = () => {
  return (
    <section class="best-car-rental mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <img src={image} class="responsive" alt="#" />
          </Col>
          <Col md={6}>
            <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
            <p>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <img src={ceklist} alt="" /> Sewa Mobil Dengan Supir di Bali 12 Jam{" "}
            <br />
            <br />
            <img src={ceklist} alt="" /> Sewa Mobil Lepas Kunci di Bali 24 Jam{" "}
            <br />
            <br />
            <img src={ceklist} alt="" /> Sewa Mobil Jangka Panjang Bulanan{" "}
            <br />
            <br />
            <img src={ceklist} alt="" /> Gratis Antar - Jemput Mobil di Bandara{" "}
            <br />
            <br />
            <img src={ceklist} alt="" /> Layanan Airport Transfer / Drop In Out{" "}
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section;
