import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Card,
  List,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import img from "../assets/img/car.png";

const MobilDetail = ({ name, image, price }) => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <div class="card car-detail mt-5">
            <h5>Tentang Paket</h5>
            <h5>Include</h5>
            <List>
              <li>
                Apa saja yang termasuk dalam paket misal durasi max 12 jam
              </li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </List>
            <h5>Exclude</h5>
            <List>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </List>
            <Accordion open={open} toggle={toggle}>
              <AccordionItem>
                <AccordionHeader targetId="1">
                  Refund, Reschedule, Overtime
                </AccordionHeader>
                <AccordionBody accordionId="1">
                  <List>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </List>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </div>
        </Col>
        <Col md={6}>
          <div class="card car-detail-2 mt-5">
            <img src={image} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">{name}</p>
              <div className="car-price">
                <h3>Total</h3>
                <h3>Rp {price}</h3>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MobilDetail;
