import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
      alt: 'Cặp đôi chụp ảnh cưới',
      category: 'engagement'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop',
      alt: 'Khoảnh khắc lãng mạn',
      category: 'romantic'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop',
      alt: 'Chụp ảnh ngoại cảnh',
      category: 'outdoor'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop',
      alt: 'Khoảnh khắc đẹp',
      category: 'romantic'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
      alt: 'Ảnh cưới studio',
      category: 'studio'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop',
      alt: 'Khoảnh khắc tình yêu',
      category: 'romantic'
    }
  ];

  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'engagement', name: 'Ảnh đính hôn' },
    { id: 'romantic', name: 'Lãng mạn' },
    { id: 'outdoor', name: 'Ngoại cảnh' },
    { id: 'studio', name: 'Studio' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2>Thư Viện Ảnh</h2>
          <p>Những khoảnh khắc đẹp của chúng tôi</p>
        </div>
        
        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="gallery-grid">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="view-icon">👁️</span>
              </div>
            </div>
          ))}
        </div>
        
        {filteredImages.length === 0 && (
          <div className="no-images">
            <p>Không có ảnh nào trong danh mục này.</p>
          </div>
        )}
      </div>
      
      {/* Modal for full-size image */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img 
              src={selectedImage.src.replace('w=400&h=300&fit=crop', 'w=800&h=600&fit=crop')} 
              alt={selectedImage.alt}
            />
            <p className="modal-caption">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 