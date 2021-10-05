import Button from '@restart/ui/esm/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (

    <Container className="bg-info p-2 text-white bg-opacity-50" fluid="md">
      <Row>
        <Col><Navbar bg="p-3 mb-2 bg-light" expand="lg">
          <Container fluid>
            <Navbar.Brand className="text-success fw-bold fs-3" href="#">Sylhet PolyTechnic Institute</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Link className='ps-4 text-decoration-none text-black fs-6 fw-bold' to='/home'>Home</Link>
                <Link className='ps-4 text-decoration-none text-black fs-6 fw-bold' to='/about'>About</Link>
                <Link className='ps-4 text-decoration-none text-black fs-6 fw-bold' to='/department'>Department</Link>
                <Link className='ps-4 text-decoration-none text-black fs-6 fw-bold ' to='/Contactus'>Contact Us</Link>

              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </Col>
      </Row>
    </Container>




  );
};

export default Header;