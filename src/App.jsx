import React, { useState } from "react";
import "./App.css";

// Import ảnh từ thư mục images
import img1 from './images/DNE00090.jpg';
import img2 from './images/DNE00129.jpg';
import img3 from './images/DNE00182.jpg';
import img4 from './images/DNE00229.jpg';
import img5 from './images/DNE00318.jpg';
import img6 from './images/DNE00338.jpg';
import img7 from './images/DNE00383.jpg';
import img8 from './images/DNE00437 Ban.jpg';
import img9 from './images/DNE00470 Ban.jpg';
import img10 from './images/DNE00503 Ban.jpg';
import img11 from './images/DNE00515.jpg';
import img12 from './images/DNE00607.jpg';

const images = {
  hero: img1,
  gallery1: img1,
  gallery2: img2,
  gallery3: img3,
  gallery4: img4,
};

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !message) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    alert("Cảm ơn lời chúc của bạn! ❤️");

    setName("");
    setMessage("");
  };

  return (
    <main className="page">
      <div className="invitation">
        {/* HERO */}
        <section className="hero section">
          <div className="hero-photo-wrapper">
            <div className="tape"></div>

            <img
              src={images.hero}
              alt="Wedding couple"
              className="hero-photo"
            />

          </div>
        </section>

        {/* COUPLE */}
        <section className="couple-card">
          <h1 className="small-title">LỄ TÂN HÔN</h1  >

          <div className="parents">
            <div>
              <span>Nhà Trai</span>
              <strong>Đào Minh Chiêu</strong>
              <strong>Đoàn Thị Lệ Quyên</strong>
              <p>Xóm 1, Thôn Cảnh An, Xã Tuy Phước Tây, Tỉnh Gia Lai</p>
            </div>

            <div className="divider"></div>

            <div>
              <span>Nhà Gái</span>
              <strong>Nguyễn Văn Thuận</strong>
              <strong>Trần Thị Cao Nguyên</strong>
              <p>221A Khu phố Bình Thung 1,Phường Đông Hòa, TP. Hồ Chí Minh</p>
            </div>
          </div>

          <p className="intro">
            TRÂN TRỌNG KÍNH MỜI BẠN ĐẾN DỰ
            <br />
            CHUNG VUI CÙNG GIA ĐÌNH CHÚNG TÔI
          </p>

          <h1>Đào Quang Nhật</h1>
          <p>Trưởng Nam</p>

          <div className="amp">&amp;</div>

          <h1>Nguyễn Tường Vi</h1>
          <p>Út Nữ</p>

        </section>

        {/* GALLERY - Album Ảnh */}
        <section className="section gallery-section">
          <h3>ALBUM ẢNH</h3>
          <p>Những khoảnh khắc đẹp nhất của Quang Nhật & Tường Vi</p>

          <div className="gallery-grid">
            {/* Ảnh 1 - Lớn */}
            <div className="gallery-item large">
              <img src={img1} alt="Ảnh 1" />
            </div>

            {/* Ảnh 2 - Nhỏ */}
            <div className="gallery-item">
              <img src={img2} alt="Ảnh 2" />
            </div>

            {/* Ảnh 3 - Nhỏ */}
            <div className="gallery-item">
              <img src={img3} alt="Ảnh 3" />
            </div>

            {/* Ảnh 4 - Nhỏ */}
            <div className="gallery-item">
              <img src={img4} alt="Ảnh 4" />
            </div>

            {/* Ảnh 5 - Nhỏ */}
            <div className="gallery-item">
              <img src={img5} alt="Ảnh 5" />
            </div>

            {/* Ảnh 6 - Lớn */}
            <div className="gallery-item large">
              <img src={img6} alt="Ảnh 6" />
            </div>

            {/* Ảnh 7 - Nhỏ */}
            <div className="gallery-item">
              <img src={img7} alt="Ảnh 7" />
            </div>

            {/* Ảnh 8 - Nhỏ */}
            <div className="gallery-item">
              <img src={img8} alt="Ảnh 8" />
            </div>

            {/* Ảnh 9 - Nhỏ */}
            <div className="gallery-item">
              <img src={img9} alt="Ảnh 9" />
            </div>

            {/* Ảnh 10 - Nhỏ */}
            <div className="gallery-item">
              <img src={img10} alt="Ảnh 10" />
            </div>

          
          </div>
        </section>

        {/* EVENT */}
        <section className="event-card">
          <h3>THÔNG TIN TIỆC CƯỚI</h3>

          <h2>TIỆC CƯỚI SẼ DIỄN RA VÀO LÚC:</h2>

          <div className="time">10:30</div>

          <div className="date">
            <span>THỨ BA</span>
            <strong>06</strong>
            <span>THÁNG 10</span>
          </div>

          <div className="year">2026</div>

          <p className="lunar">
            (TỨC NGÀY 26 THÁNG 8 NĂM BÍNH NGỌ)
          </p>
          <section className="location section">
            <br></br>
          <h3>ĐỊA ĐIỂM</h3>

          <p>
            NHÀ HÀNG HOÀNG LONG PALACE
            <br />
            Địa chỉ: Ngã ba Cầu Ông Đô, Quốc lộ 1A, Thị Trấn Diêu Trì, Tỉnh Gia Lai
          </p>
        </section>

         <section className="event-card">
          <h3>LỊCH TRÌNH NGÀY CƯỚI</h3>

          <div className="timeline">
            <div className="timeline-item">
              <span>10:30</span>
              <div className="dot"></div>
              <p>Đón khách</p>
            </div>

            <div className="timeline-item">
              <span>11:30</span>
              <div className="dot"></div>
              <p>Khai tiệc</p>
            </div>
          </div>
        </section>


        </section>

        <section className="guestbook">
          <h3>SỔ LƯU BÚT</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nhập tên *"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <textarea
              placeholder="Nhập lời chúc *"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <div className="form-bottom">
              <span>🖋️</span>

              <button type="submit">GỬI LỜI CHÚC</button>
            </div>
          </form>

          <p className="thank-you">
            Cảm ơn lời chúc của bạn dành cho chúng tôi!
          </p>
        </section>

        <footer>
          <p>© Wedding Invitation</p>
        </footer>
      </div>
    </main>
  );
}

export default App;