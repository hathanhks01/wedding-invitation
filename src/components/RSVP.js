import React, { useState } from 'react';
import './RSVP.css';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 1,
    attending: 'yes',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('RSVP submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: 1,
        attending: 'yes',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="rsvp" className="rsvp">
      <div className="container">
        <div className="section-header">
          <h2>Xác Nhận Tham Dự</h2>
          <p>Vui lòng cho chúng tôi biết bạn có thể tham dự không</p>
        </div>
        
        {!isSubmitted ? (
          <form className="rsvp-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Họ và tên *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Nhập họ và tên của bạn"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Nhập địa chỉ email"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Số điện thoại</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Nhập số điện thoại"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="attending">Bạn có thể tham dự không? *</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    checked={formData.attending === 'yes'}
                    onChange={handleChange}
                  />
                  <span className="radio-text">Có, tôi sẽ tham dự</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    checked={formData.attending === 'no'}
                    onChange={handleChange}
                  />
                  <span className="radio-text">Xin lỗi, tôi không thể tham dự</span>
                </label>
              </div>
            </div>
            
            {formData.attending === 'yes' && (
              <div className="form-group">
                <label htmlFor="guests">Số lượng khách (bao gồm bạn)</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                >
                  <option value="1">1 người</option>
                  <option value="2">2 người</option>
                  <option value="3">3 người</option>
                  <option value="4">4 người</option>
                  <option value="5">5 người</option>
                </select>
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="message">Lời nhắn (tùy chọn)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Viết lời chúc hoặc lời nhắn cho cặp đôi..."
                rows="4"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Gửi Xác Nhận
            </button>
          </form>
        ) : (
          <div className="success-message">
            <div className="success-icon">✅</div>
            <h3>Cảm ơn bạn!</h3>
            <p>Chúng tôi đã nhận được xác nhận tham dự của bạn.</p>
            <p>Chúng tôi rất mong được gặp bạn tại lễ cưới!</p>
          </div>
        )}
        
        <div className="rsvp-info">
          <h3>Thông Tin Liên Hệ</h3>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <p><strong>Cô dâu:</strong> 090-123-4567</p>
                <p><strong>Chú rể:</strong> 090-987-6543</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <p><strong>Email:</strong> wedding@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP; 