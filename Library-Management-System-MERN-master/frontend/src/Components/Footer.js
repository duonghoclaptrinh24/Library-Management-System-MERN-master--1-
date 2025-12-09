import React from "react";
import "./Footer.css";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        
        {/* Cột 1 */}
        <div className="footer-col">
          <h3 className="footer-logo-text">Library</h3>
          <p className="footer-info">Nơi lưu trữ tri thức và kết nối đam mê đọc sách.</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Cột 2 */}
        <div className="footer-col">
          <h4 className="footer-title">Dịch Vụ</h4>
          <ul className="footer-list">
            <li><a href="#">Mượn sách</a></li>
            <li><a href="#">Tài liệu số</a></li>
            <li><a href="#">Không gian đọc</a></li>
            <li><a href="#">Tra cứu</a></li>
          </ul>
        </div>

        {/* Cột 3 */}
        <div className="footer-col">
          <h4 className="footer-title">Thông Tin</h4>
          <ul className="footer-list">
            <li><a href="#">Giới thiệu</a></li>
            <li><a href="#">Tin tức</a></li>
            <li><a href="#">Hỗ trợ</a></li>
            <li><a href="#">Liên hệ</a></li>
          </ul>
        </div>

        {/* Cột 4 */}
        <div className="footer-col">
          <h4 className="footer-title">Liên Hệ</h4>
          <p className="footer-info">📍 123 Đường Sách – TP. Hồ Chí Minh</p>
          <p className="footer-info">📞 0123 456 789</p>
          <p className="footer-info">✉ support@library.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Library — All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
