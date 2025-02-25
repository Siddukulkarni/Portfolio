import React from 'react';
import '../App.css'
import img from '../assets/img.png'

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-section">
            <h1 className="title">Hi, This is M Nawaz  </h1>
            
            <h5 className="subtitle">And I'm BCA Student</h5>
            <p className="description">
              Passionate about learning new technologies and building new amazing websites.
            </p>
          </div>
          <div className="col-12 col-md-6 text-center image-section">
            <img src={img} alt="Profile-photo" className="profile-img img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;