import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Aboutus = () => {
  return (


    <Container fluid="md">
      <Row>
        <Col><div className="bg-light">
          <Header></Header>
          <Card>
            <Card.Header className="fw-bold fs-4 text-danger">Computer Technology</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  Computer technology combines the hardware of computers and computer-controlled devices with software—operating systems, authoring tools, expert systems, and courseware—to support training technology.
                </p>

              </blockquote>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="fw-bold fs-4 text-danger">Electric Technology</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  Electric Technology offers high quality products and high efficient solutions for factory and process automation. Close to customers through our three branches in Alex, Bourg El Arab and Cairo. We only offers Germany products and after sale services have made us the market leader in our field.
                </p>

              </blockquote>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="fw-bold fs-4 text-danger">civil Technology</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  The definition of civil technology is the field of drafting, cartography, traffic technology and the analysis of construction materials to support construction, engineering, and architecture for roads, bridges and other public structures.
                </p>

              </blockquote>
            </Card.Body>
          </Card>
          <br /><br />
          <Footer></Footer>
        </div></Col>
      </Row>
    </Container>

  );
};

export default Aboutus;