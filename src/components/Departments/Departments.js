// Here is my All depertment section
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

const Departments = () => {


  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch('/Educational.json')
      .then((res) => res.json())
      .then((data) => setCourses(data))
  }, []);



  return (
    <div>
      <Container className="bg-light p-2 text-black bg-opacity-50" fluid="md">
        <Row>
          <Col> <div className="Course-container  ">
            <h1 className="py-4">All Department</h1>
            <hr />
            <div className="info-department p-5">
              <div className="row">
                {
                  courses.slice(0, 3).map((course) =>
                    <div className="col-md-4 py-4" key={course.id}>
                      <Card className="bg-light shadow p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={course.img} />
                        <Card.Body>
                          <ins className="text-danger fw-bold"><Card.Title>{course.title}</Card.Title></ins>
                          <Card.Text>
                            {course.description}<br />
                            <ins className="text-danger fw-bold">Course Fee: {course.courseFee}</ins>
                          </Card.Text>
                          <Link to='/department'><Button className="btn btn-success" variant="primary">More Info</Button></Link>
                        </Card.Body>
                      </Card>
                    </div>)

                }

              </div>

            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </div>



  );
};

export default Departments;