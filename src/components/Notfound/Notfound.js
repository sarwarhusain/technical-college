import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Notfound.css'
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div>
      <h1 className=" text-danger display-1 fst-italic fw-bold oops">oops!</h1>
      <h1 className="text-danger fs-1">404</h1>
      <h4 className="text-danger fw-bold">Page Not Found</h4>
      <h5 className="fw-bold text-danger">Please don't ask me the page!</h5>
      <Link to='/home'><Button className="ps-4 text-decoration-none rounded rounded pill text-danger fs-6 fw-bold" variant="primary">Go To Home</Button></Link>



    </div>
  );
};

export default Notfound;