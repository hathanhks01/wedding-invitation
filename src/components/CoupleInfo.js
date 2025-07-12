import React from 'react';
import './CoupleInfo.css';

const CoupleInfo = () => {
  return (
    <section id="couple" className="couple-info">
      <div className="container">
        <div className="section-header">
          <h2>Cặp Đôi</h2>
          <p>Hành trình tình yêu của chúng tôi</p>
        </div>
        
        <div className="couple-container">
          <div className="person-card">
            <div className="person-image">
              <div className="image-placeholder">
                <span>👰</span>
              </div>
            </div>
            <div className="person-details">
              <h3>Trần Thị B</h3>
              <p className="person-title">Cô dâu</p>
              <p className="person-description">
                "Tôi tin rằng tình yêu là món quà quý giá nhất mà cuộc sống ban tặng. 
                Và tôi rất may mắn khi được gặp gỡ và yêu thương người đàn ông tuyệt vời này."
              </p>
              <div className="person-family">
                <p>Con gái của ông bà</p>
                <p>Trần Văn C & Nguyễn Thị D</p>
              </div>
            </div>
          </div>
          
          <div className="couple-heart">
            <div className="heart-icon">💕</div>
          </div>
          
          <div className="person-card">
            <div className="person-image">
              <div className="image-placeholder">
                <span>🤵</span>
              </div>
            </div>
            <div className="person-details">
              <h3>Nguyễn Văn A</h3>
              <p className="person-title">Chú rể</p>
              <p className="person-description">
                "Từ giây phút đầu tiên gặp cô ấy, tôi đã biết rằng cô ấy chính là người 
                mà tôi muốn dành trọn cuộc đời để yêu thương và chăm sóc."
              </p>
              <div className="person-family">
                <p>Con trai của ông bà</p>
                <p>Nguyễn Văn E & Lê Thị F</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="love-story">
          <h3>Câu Chuyện Tình Yêu</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2020</div>
              <div className="timeline-content">
                <h4>Lần đầu gặp gỡ</h4>
                <p>Chúng tôi gặp nhau tại một buổi tiệc của bạn chung</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2021</div>
              <div className="timeline-content">
                <h4>Bắt đầu mối quan hệ</h4>
                <p>Những cuộc hẹn đầu tiên và những kỷ niệm đẹp</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2023</div>
              <div className="timeline-content">
                <h4>Lời cầu hôn</h4>
                <p>Dưới ánh hoàng hôn, anh đã quỳ xuống và cầu hôn</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2024</div>
              <div className="timeline-content">
                <h4>Ngày cưới</h4>
                <p>Chúng tôi sẽ chính thức trở thành vợ chồng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleInfo; 