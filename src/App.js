import React, { useEffect } from "react";
import Logo1 from "./logo1.svg";
import google from "./google.svg";
import aws from "./aws.svg";
import meta from "./meta.svg";
import faq from './FAQ.svg';
import microsoft from "./microsoft.svg";
import inno from './inno.png';
import door from './door.jpg';
import goorej from './goorej.jpg';
import h2 from './h2.png';
import moe from './moe.png';
import sbi from './sbi.jpeg';
import tcs from './tcs.png';
import tutor from './tutor.jpg';
import all from './all.jpg';

const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const elements = document.querySelectorAll(
      ".trusted-by, .logo-item, .section-title, .hackathon-box, .faq-section, .about-section"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  document.addEventListener("DOMContentLoaded", () => {
    const searchSection = document.querySelector(".hackathon-search-section");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            searchSection.classList.add("in-view");
          } else {
            searchSection.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );
  
    observer.observe(searchSection);
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".hero-subtitle, .hero-subtitle1, .trusted-by");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the 'in-view' class to trigger animation
            entry.target.classList.add("in-view");
          } else {
            // Remove the 'in-view' class to reset animation when out of view
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );
  
    elements.forEach((el) => observer.observe(el));
  });
  

  return (
    <>
      <header className="header">
        <div className="logo">
          <span className="text-primary">HACKOSPHERE</span>
          <span className="text-secondary">.COM</span>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by title, theme, city, or country              Upcoming ▼"
            className="search-input"
          />
          <button className="search-button">🔍</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">Where organizations and developers come together</p>
          <p className="hero-subtitle1">to build, inspire, and innovate.</p><br></br>
          <div className="hero-buttons">
            <button className="hero-button primary">For organizers ➡️</button>
            <button className="hero-button secondary">For participants ➡️</button><br></br>
          </div>
        </div>
        <div className="hero-content-right">
          <img src={Logo1} alt="Placeholder" className="hero-image" />
        </div>
      </section>

      <section className="trusted-by">
  <p className="trusted-title">TRUSTED BY THE WORLD'S LEADING ORGANIZATIONS</p>
  <div className="trusted-logos">
    <div className="logo-item">
      <img src={microsoft} alt="Microsoft" className="logo-img float-animation" />
      <p className="logo-name">Microsoft</p>
    </div>
    <div className="logo-item">
      <img src={google} alt="Google" className="logo-img float-animation" />
      <p className="logo-name">Google</p>
    </div>
    <div className="logo-item">
      <img src={meta} alt="Meta" className="logo-img float-animation" />
      <p className="logo-name">Meta</p>
    </div>
    <div className="logo-item">
      <img src={aws} alt="AWS" className="logo-img float-animation" />
      <p className="logo-name">AWS</p>
    </div>
  </div>
</section>


      <section className="hackathons-section">
  <h2 className="section-title">Upcoming Hackathons</h2>
  <div className="hackathon-grid">
    <div className="hackathon-box">
      <p><strong>Name:</strong> CodeSprint 2025</p>
      <p><strong>Date:</strong> April 15-17, 2025</p>
      <p><strong>Fee:</strong> Free</p>
      <p><strong>Team Size:</strong> 4 members</p>
      <button className="register-button">Register</button>
    </div>
    <div className="hackathon-box">
      <p><strong>Name:</strong> DevFest</p>
      <p><strong>Date:</strong> May 10-12, 2025</p>
      <p><strong>Fee:</strong> $20</p>
      <p><strong>Team Size:</strong> 3-5 members</p>
      <button className="register-button">Register</button>
    </div>
    <div className="hackathon-box">
      <p><strong>Name:</strong> HackVision</p>
      <p><strong>Date:</strong> June 1-3, 2025</p>
      <p><strong>Fee:</strong> $10</p>
      <p><strong>Team Size:</strong> 5 members</p>
      <button className="register-button">Register</button>
    </div>
    <div className="hackathon-box">
      <p><strong>Name:</strong> Buildathon</p>
      <p><strong>Date:</strong> July 20-22, 2025</p>
      <p><strong>Fee:</strong> $15</p>
      <p><strong>Team Size:</strong> 2-4 members</p>
      <button className="register-button">Register</button>
    </div>
    <div className="hackathon-box">
      <p><strong>Name:</strong> CodeMonk</p>
      <p><strong>Date:</strong> August 14-16, 2025</p>
      <p><strong>Fee:</strong> Free</p>
      <p><strong>Team Size:</strong> 4 members</p>
      <button className="register-button">Register</button>
    </div>
    <div className="hackathon-box">
      <p><strong>Name:</strong> InnovateHub</p>
      <p><strong>Date:</strong> September 8-10, 2025</p>
      <p><strong>Fee:</strong> $25</p>
      <p><strong>Team Size:</strong> 3-6 members</p>
      <button className="register-button">Register</button>
    </div>
  </div>
</section>





<section className="hackathon-search-section">
  <h2 className="section-title">Find Your Hackathon</h2>
  <div className="search-bar-container">
    <input
      type="text"
      placeholder="Search by name, city, or keywords"
      className="search-input"
    />
    <div className="filters">
      <select className="filter-dropdown">
        <option value="">Filter by Cost</option>
        <option value="free">Free</option>
        <option value="under-20">$20 or less</option>
        <option value="under-50">$50 or less</option>
      </select>
      <select className="filter-dropdown">
        <option value="">Filter by Team Size</option>
        <option value="2-4">2-4 members</option>
        <option value="3-5">3-5 members</option>
        <option value="5-6">5-6 members</option>
      </select>
      <select className="filter-dropdown">
        <option value="">Sort by</option>
        <option value="recent">Most Recent</option>
        <option value="upcoming">Upcoming</option>
        <option value="real-time">Real-Time Contests</option>
      </select>
    </div>
    <button className="search-button1">Search</button>
  </div>
</section>
 

<section className="faq-section">
  <h2 className="faq-title">FAQs</h2>
  <div className="faq-container">
    <div className="faq-left">
      <div className="faq-item animated-item">
        <p className="faq-number">01</p>
        <div className="faq-content">
          <p className="faq-question">What is HackoSphere?</p>
          <p className="faq-answer">
            HackoSphere is a platform where developers, designers, and innovators come together to build and inspire through hackathons.
          </p>
        </div>
      </div>
      <div className="faq-item animated-item">
        <p className="faq-number">02</p>
        <div className="faq-content">
          <p className="faq-question">How can I participate?</p>
          <p className="faq-answer">
            You can register for any of the listed hackathons on our platform. Follow the guidelines and join the competition!
          </p>
        </div>
      </div>
      <div className="faq-item animated-item">
        <p className="faq-number">03</p>
        <div className="faq-content">
          <p className="faq-question">Are there any fees?</p>
          <p className="faq-answer">
            Some hackathons have registration fees, while others are free. Check the specific details for each event.
          </p>
        </div>
  
      </div>
     
    </div>





    <div className="faq-right">
      <img src={faq} alt="FAQ Illustration" className="faq-image" />
    </div>
  </div><br></br><br></br>
</section>









<section className="partners-section">
  <h2 className="partners-title">Organisers</h2>
  <div className="partners-container">
    <div className="partners-row">
      <div className="partner">
        <img src={moe} alt="MoE's Innovation Cell" />
      </div>
      <div className="partner">
        <img src={sbi} alt="SBI Foundation" />
      </div>
      <div className="partner">
        <img src={inno} alt="Innovation for India" />
      </div>
    </div>
    <div className="partners-row">
      <div className="partner">
        <h3>Official Partner</h3>
        <img src={goorej} alt="Godrej Appliances" />
      </div>
      <div className="partner">
        <h3>Evaluation Partner</h3>
        <img src={tcs} alt="TCS" />
      </div>
      <div className="partner">
        <h3>Learning Partner</h3>
        <img src={tutor} alt="TutorialsPoint" />
      </div>
    </div>
    <div className="partners-row">
      <div className="partner">
        <h3>Official Media Partner</h3>
        <img src={all} alt="All India Radio" />
        <img src={door} alt="Doordarshan" />
      </div>
      <div className="partner">
        <h3>Platform Partner</h3>
        <img src={h2} alt="Hack2Skill" />
      </div>
    </div>
  </div>
</section>






     

      
      <footer className="footer">
        <p>© 2025 HackoSphere. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;


