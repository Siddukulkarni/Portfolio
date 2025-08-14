import React from 'react';
import img from '../assets/img.png'
import '../App.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 about-text">
          <h1>About Me</h1>
          <p>
            Hello! I'm <strong>Siddu Kulkarni</strong>, An aspiring tech professional pursuing a Bachelor of Computer Applications (BCA).
            Passionate about learning new technologies and staying updated with industry trends, with a strong interest in various aspects of technology, 
            core strengths include quick learning, attention to detail, and adaptability. Currently learning Frontend Devlopment. 
            Open to connecting with tech professionals and fellow learners passionate about innovation and technology..
        </p>
        
      </div>

      <div className="col-12 col-md-6 text-center">
        <img src={img} alt="Profile-photo" className="profile-img img-fluid" />
      </div>
    </div>
      </div >
  );
};

export default About;
