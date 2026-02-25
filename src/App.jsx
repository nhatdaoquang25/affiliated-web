import React from 'react';
import './App.css';
// Import tấm ảnh bạn vừa thêm vào project
import heroImage from './images/IMG_5770.JPG'; 

function App() {
  return (
    <div className="wedding-page">
      {/* Header / Navigation */}
      {/* <header className="navbar">
        <h1 className="logo">Forever Moments</h1>
        <nav>
          <a href="#gallery">Bộ sưu tập</a>
          <a href="#services">Dịch vụ</a>
          <a href="#contact" className="btn-contact">Liên hệ ngay</a>
        </nav>
      </header> */}

      {/* Hero Section - Phần quảng cáo chính */}
      <section className="hero">
        <div className="hero-content">
          <h2>Lưu Giữ Khoảnh Khắc Hạnh Phúc</h2>
          <p>Chúng mình không chỉ chụp ảnh, chúng mình kể câu chuyện tình yêu của bạn qua từng khung hình.</p>
          {/* <button className="cta-button">Xem báo giá 2024</button> */}
        </div>
        <div className="hero-image-wrapper">
          {/* Sử dụng tấm ảnh của bạn tại đây */}
          <img src={heroImage} alt="Wedding Portrait" className="main-img" />
        </div>
      </section>

      {/* Thông điệp ngắn */}
      <section className="quote">
        <p>"Tình yêu không cần phải hoàn hảo, nó chỉ cần chân thật."</p>
      </section>
    </div>
  );
}

export default App;