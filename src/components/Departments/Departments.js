import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Departments = () => {


  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch('/Educational.json')
      .then((res) => res.json())
      .then((data) => setCourses(data))
  }, []);



  return (
    <div className="Course-container bg-light my-5">
      <h1>All Department</h1>
      <div className="Search">
        <input className="p-2  rounded-pill " type="text" />
        <button className="p-2 btn btn-primary rounded-pill ">Serach</button>
      </div>

      <div className="info-department p-5">
        <div className="row">
          {
            courses?.map((course) =>
              <div className="col-md-4 py-4">
                <Card className="bg-light shadow p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={course.img} />
                  <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>
                      Course Fee: {course.courseFee} <br />
                      {course.description}
                    </Card.Text>
                    <Button className="btn btn-success" variant="primary">More Info</Button>
                  </Card.Body>
                </Card>
              </div>)
          }

        </div>

      </div>








    </div>
  );
};

export default Departments;