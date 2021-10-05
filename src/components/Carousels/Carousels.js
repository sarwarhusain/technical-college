import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../img/img01.jpg'
import img2 from '../img/img02.jpg'
import img3 from '../img/img03.jpg'

const Carousels = () => {
  return (
    <Container className="bg-light bg-opacity-50" fluid="md">
      <Row>
        <Col>
          <Carousel className="d-flex justify-content-center">
            <Carousel.Item>
              <img
                className="d-block rounded mx-auto "
                src={img1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="text-info bg-light d-inline py-1 px-5 rounded-pill mb-3">Electrical Technology</h3>
                <p className="text-black py-1 px-5  mb-3">Electrical Technology – The technology of producing, storing, controlling, <br /> transmitting and getting work from electrical energy.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block rounded mx-auto "
                src={img2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3 className="text-info bg-light d-inline py-1 px-5 rounded-pill mb-3">Civil Technology</h3>
                <p className="text-black py-1 px-5  mb-3">The definition of civil technology is the field of drafting, cartography, <br /> traffic technology and the analysis of <br /> construction materials to support construction, engineering, <br /> and architecture for roads, bridges and other public structures.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block rounded mx-auto  "
                src={img3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3 className="text-info bg-light d-inline py-1 px-5 rounded-pill mb-3">Computer Technology</h3>
                <p className="text-info py-1 px-5 rounded-pill mb-3">Computer technology combines the hardware of computers and <br /> computer-controlled devices with software—operating <br /> systems, authoring tools, expert systems, <br /> and courseware—to support training technology.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel></Col>
      </Row>
    </Container>


  );
};

export default Carousels;