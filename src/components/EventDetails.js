import React from 'react';
import './EventDetails.css';

const EventDetails = () => {
  return (
    <section id="event" className="event-details">
      <div className="container">
        <div className="section-header">
          <h2>Chi Tiết Sự Kiện</h2>
          <p>Thông tin về lễ cưới của chúng tôi</p>
        </div>
        
        <div className="event-grid">
          <div className="event-card ceremony">
            <div className="event-icon">⛪</div>
            <h3>Lễ Thành Hôn</h3>
            <div className="event-info">
              <p className="event-time">15:00 - 16:30</p>
              <p className="event-location">Nhà thờ Đức Bà</p>
              <p className="event-address">1 Công xã Paris, Bến Nghé, Quận 1, TP.HCM</p>
            </div>
            <div className="event-description">
              <p>Lễ thành hôn sẽ được tổ chức tại nhà thờ với sự chứng kiến của gia đình và bạn bè thân thiết.</p>
            </div>
          </div>
          
          <div className="event-card reception">
            <div className="event-icon">🎉</div>
            <h3>Tiệc Cưới</h3>
            <div className="event-info">
              <p className="event-time">18:00 - 22:00</p>
              <p className="event-location">Khách sạn Continental</p>
              <p className="event-address">132-134 Đồng Khởi, Bến Nghé, Quận 1, TP.HCM</p>
            </div>
            <div className="event-description">
              <p>Tiệc cưới sẽ được tổ chức tại khách sạn 5 sao với không gian sang trọng và ẩm thực đa dạng.</p>
            </div>
          </div>
        </div>
        
        <div className="countdown-section">
          <h3>Đếm Ngược Đến Ngày Cưới</h3>
          <div className="countdown-timer">
            <div className="countdown-item">
              <span className="countdown-number">00</span>
              <span className="countdown-label">Ngày</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">00</span>
              <span className="countdown-label">Giờ</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">00</span>
              <span className="countdown-label">Phút</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">00</span>
              <span className="countdown-label">Giây</span>
            </div>
          </div>
        </div>
        
        <div className="dress-code">
          <h3>Dress Code</h3>
          <div className="dress-code-info">
            <div className="dress-code-item">
              <h4>Lễ Thành Hôn</h4>
              <p>Trang phục lịch sự, tối màu</p>
            </div>
            <div className="dress-code-item">
              <h4>Tiệc Cưới</h4>
              <p>Trang phục dự tiệc, màu sắc tươi sáng</p>
            </div>
          </div>
        </div>
        
        <div className="gift-info">
          <h3>Thông Tin Quà Cưới</h3>
          <p>Chúng tôi rất vui mừng khi được đón tiếp bạn tại lễ cưới. 
          Nếu bạn muốn tặng quà, chúng tôi xin phép được nhận phong bì thay vì quà cưới.</p>
          <div className="bank-info">
            <h4>Thông tin chuyển khoản:</h4>
            <p>Ngân hàng: Vietcombank</p>
            <p>Số tài khoản: 1234567890</p>
            <p>Chủ tài khoản: Nguyễn Văn A</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails; 