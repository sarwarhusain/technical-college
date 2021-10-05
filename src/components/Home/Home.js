import React from 'react';
import Carousels from '../Carousels/Carousels';
import Departments from '../Departments/Departments';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Carousels></Carousels>
      <Departments></Departments>
      <Footer></Footer>
    </div>
  );
};

export default Home;