import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">Chúng tôi</span>
            <span className="title-line">Sắp Kết Hôn</span>
          </h1>
          
          <div className="couple-names">
            <span className="name">Nguyễn Văn A</span>
            <span className="and">&</span>
            <span className="name">Trần Thị B</span>
          </div>
          
          <div className="wedding-date">
            <p className="date">15.12.2024</p>
            <p className="time">18:00 - 22:00</p>
          </div>
          
          <div className="hero-description">
            <p>Chúng tôi rất vui mừng được mời bạn đến dự lễ cưới của chúng tôi</p>
            <p>Hãy cùng chúng tôi chia sẻ khoảnh khắc đặc biệt này</p>
          </div>
          
          <button 
            className="rsvp-button"
            onClick={() => document.getElementById('rsvp').scrollIntoView({ behavior: 'smooth' })}
          >
            Xác nhận tham dự
          </button>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero; 