import React from 'react';
import Carousels from '../Carousels/Carousels';
import Departments from '../Departments/Departments';
import Header from '../Header/Header';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Carousels></Carousels>
      <Departments></Departments>
    </div>
  );
};

export default Home;