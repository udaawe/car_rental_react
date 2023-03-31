import {
  Collapse,
  Button,
  CardBody,
  Card,
  Row,
  Col,
  Container,
} from "reactstrap";
import React, { useState } from "react";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <h2>Frequently Asked Question</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </Col>
        <Col md={6}>
          <Button outline className="mt-3" onClick={() => setIsOpen(!isOpen)}>
            Left-aligned but right aligned when large screen
          </Button>
          <Collapse isOpen={isOpen}>
            <div>Tes</div>
          </Collapse>
          <Button outline className="mt-3" onClick={() => setIsOpen2(!isOpen2)}>
            Left-aligned but right aligned when large screen
          </Button>
          <Collapse isOpen={isOpen2}>
            <div>Tes2</div>
          </Collapse>
          <Button outline className="mt-3" onClick={() => setIsOpen3(!isOpen3)}>
            Left-aligned but right aligned when large screen
          </Button>
          <Collapse isOpen={isOpen3}>
            <div>Tes3</div>
          </Collapse>
          <Button outline className="mt-3" onClick={() => setIsOpen4(!isOpen4)}>
            Left-aligned but right aligned when large screen
          </Button>
          <Collapse isOpen={isOpen4}>
            <div>Tes4</div>
          </Collapse>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQ;
