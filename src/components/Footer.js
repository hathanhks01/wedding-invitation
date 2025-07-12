import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>💕 Nguyễn Văn A & Trần Thị B</h3>
            <p>Chúng tôi rất vui mừng được chia sẻ khoảnh khắc đặc biệt này với bạn.</p>
            <p>Cảm ơn bạn đã là một phần quan trọng trong hành trình tình yêu của chúng tôi.</p>
          </div>
          
          <div className="footer-section">
            <h4>Thông Tin Liên Hệ</h4>
            <div className="contact-list">
              <div className="contact-item">
                <span className="contact-icon">👰</span>
                <div>
                  <p><strong>Cô dâu:</strong> Trần Thị B</p>
                  <p>📞 090-123-4567</p>
                  <p>📧 bride@example.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🤵</span>
                <div>
                  <p><strong>Chú rể:</strong> Nguyễn Văn A</p>
                  <p>📞 090-987-6543</p>
                  <p>📧 groom@example.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Địa Chỉ Sự Kiện</h4>
            <div className="event-locations">
              <div className="location-item">
                <h5>Lễ Thành Hôn</h5>
                <p>⛪ Nhà thờ Đức Bà</p>
                <p>📍 1 Công xã Paris, Bến Nghé, Quận 1, TP.HCM</p>
                <p>🕐 15:00 - 16:30</p>
              </div>
              <div className="location-item">
                <h5>Tiệc Cưới</h5>
                <p>🎉 Khách sạn Continental</p>
                <p>📍 132-134 Đồng Khởi, Bến Nghé, Quận 1, TP.HCM</p>
                <p>🕐 18:00 - 22:00</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">📘 Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">📷 Instagram</a>
            <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className="social-link">📱 Zalo</a>
          </div>
          
          <div className="footer-credits">
            <p>© 2024 Wedding Invitation. Made with ❤️ for our special day.</p>
            <p>Thiết kế và phát triển bởi React</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 