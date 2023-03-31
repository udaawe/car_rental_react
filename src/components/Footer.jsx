import { Container, Row, Col } from "reactstrap";
import icon from "../assets/img/icon_facebook.png";
import icon2 from "../assets/img/icon_instagram.png";
import icon3 from "../assets/img/icon_twitter.png";
import icon4 from "../assets/img/icon_twitch.png";
import logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <div class="section-footer mt-5">
      <Container>
        <Row mt={3}>
          <Col md={3}>
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <div>
              <p>binarcarrental@gmail.com</p>
            </div>
            <div>
              <p>081-233-334-808</p>
            </div>
          </Col>
          <Col md={3}>
            <p class="about">
              <a href="">Our Servis</a>
            </p>
            <div>
              <p class="about">
                <a href="">Why us</a>
              </p>
            </div>
            <div>
              <p class="about">
                <a href="">Testimonial</a>
              </p>
            </div>
            <div>
              <p class="about">
                <a href="">FAQ</a>
              </p>
            </div>
          </Col>
          <Col md={3}>
            <p>Connect with us</p>
            <div class="footer-icon">
              <img src={icon} alt="#" />
              <img src={icon2} alt="#" />
              <img src={icon3} alt="#" />
              <img src={icon4} alt="#" />
            </div>
          </Col>
          <Col md={3}>
            <p>Copyright Binar 2022</p>
            <img src={logo} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
