import React, { useState } from 'react';
//import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import { Link } from 'react-router-dom';

function Home() {
  const [showEmail, setShowEmail] = useState(false);

  const toggleEmail = () => {
    setShowEmail(!showEmail);
  };

  return (
    <div className="home">
      <h1>Dhruv Chinmay</h1>
      <div className="bio-container">
        {/*<div className="profile-pic-container">
          <img src="/me.jpg" alt="Adam Zweiger" className="profile-pic" />
        </div>*/}
        <div className="bio">
          <p>
            I am a junior at MIT studying CS (Course 6-3). 
            My research interests broadly span architectures, data, and learning algorithms for language models. 
            In particular, I've explored how language models can adapt to new tasks and domains with minimal data. 
            Apart from research, I enjoy optimizing with first and second moments, exchanging mathematical puzzles, organizing HackMIT, wearing free Jane Street t-shirts, playing tennis/badminton/climbing, and eating spicy food. 
          </p> 
        </div>
      </div>
      <div className="contact-info">
        <div className="contact-link" onClick={toggleEmail}>
          <FaEnvelope className="contact-icon" />
          <span className="contact-text">
            {showEmail ? (
              <>
                dchinmay<span style={{display: 'none'}}>foo</span>
                <span style={{display: 'none'}}>bar</span>@
                <span style={{display: 'none'}}>null</span>
                andrew.cmu<span style={{display: 'none'}}>foo</span>.edu
              </>
            ) : (
              'Email'
            )}
          </span>
        </div>
        {/* Google Scholar */}
        <a href="https://scholar.google.com/citations?user=MRk2E8AAAAAJ" className="contact-link" target="_blank" rel="noopener noreferrer">
          <SiGooglescholar className="contact-icon" />
          <span className="contact-text">Scholar</span>
        </a>

        {/* GitHub */}
        <a href="https://github.com/adamzweiger" className="contact-link" target="_blank" rel="noopener noreferrer">
          <FaGithub className="contact-icon" />
          <span className="contact-text">GitHub</span>
        </a>

        {/* Twitter (X) */}
        <a href="https://x.com/AdamZweiger" className="contact-link" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="contact-icon" />
          <span className="contact-text">Twitter</span>
        </a>
      </div>
    </div>
  );
}

export default Home;