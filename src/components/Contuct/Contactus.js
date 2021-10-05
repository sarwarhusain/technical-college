// here is my contuct section
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Contactus = () => {
  return (
    <Container  fluid="md">
      <Row >
        <Col> <div className="bg-light">
          <Header></Header>
          <h1 className="text-danger">Contact Us</h1>
          <hr />
          <div className="text-black">
            <h4 className="">Address: Technical Road, Sylhet-3100
            </h4>
            <h4 className="">Tel: 0821-716372</h4>
            <h4 className="">Email: info@spi.gov.bd</h4>
            <h4 className="">Mobile: 01746494392</h4>
            <h4 className="">Web: www.spi.gov.bd</h4>
          </div>
          <br /><br /><br /><br /><br /><br /><br /><br /><br />
          <Footer></Footer>
        </div></Col>
      </Row>
    </Container>



  );
};

export default Contactus;