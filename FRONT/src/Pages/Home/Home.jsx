import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Header from '../../Components/Header/Header';
import Featured from '../../Components/Featured/Featured';
import "./Home.css"
import MailList from '../../Components/MailList/MailList';
import Footer from '../../Components/Footer/Footer';


const Home = () => {
  return (
    <div>
      <NavBar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
