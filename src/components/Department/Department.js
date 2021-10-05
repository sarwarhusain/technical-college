import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const Department = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch('/Educational.json')
      .then((res) => res.json())
      .then((data) => setCourses(data))
  }, []);

  return (

    <Container fluid="md">
      <Row>
        <Col>
          <div>
            <Header></Header>
            <div className="info-department bg-light p-5">
              <div className="row">
                {
                  courses.map((course) =>
                    <div className="col-md-4 py-4">
                      <Card className="bg-light shadow p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={course.img} />
                        <Card.Body>
                          <ins className="text-danger"><Card.Title>{course.title}</Card.Title></ins>
                          <Card.Text>
                            {course.description}<br />
                            <ins className="text-danger fw-bold">Course Fee: {course.courseFee}</ins>

                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>)
                }

              </div>

            </div>
            <Footer></Footer>
          </div>
        </Col>
      </Row>
    </Container>

  );
};

export default Department;