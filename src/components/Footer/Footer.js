import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';



const Footer = () => {
  return (
    <div>
      <Container className="bg-info p-2 text-black bg-opacity-50" fluid="md">
        <Row>
          <Col><p className="fw-bold">  ©️ Sylhet PolyTechnic Institute</p>
            <span></span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;