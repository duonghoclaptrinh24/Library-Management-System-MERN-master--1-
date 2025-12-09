import React from "react";
import { Link } from "react-router-dom"; 
import "./Allbooks.css";

const bannerBookData = [
  {
    id: 1,
    title: "George Soros",
    author: "George Soros",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp16xiXu1ZtTzbLy-eSwEK4Ng6cUpUZnuGbQ&usqp=CAU",
  },
  {
    id: 2,
    title: "George Soros",
    author: "George Soros",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Rb2t6jA5ml7n57qdTZbAOWX1qSfsLCbaOA&usqp=CAU",
  },
  {
    id: 3,
    title: "George Soros",
    author: "George Soros",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFiDRQ7a-Oo-CnMmnbIMApP1Cq9B5bYx-UA&usqp=CAU",
  },
  {
    id: 4,
    title: "George Soros",
    author: "George Soros",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ElcNy_v2Ri1H3VhYjYP1MzR6zBUwFQWbOirCkaqcfOqJnbrK5ZvdZNUwEfrlmJwn7pA&usqp=CAU",
  },
  {
    id: 5,
    title: "George Soros",
    author: "George Soros",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRHNwRyPkTxnMOzOvv5dOK4OS_lq4-2Yugg&usqp=CAU",
  },
];
const gridBookData = [
  {
    id: 6,
    title: "Wings Of Fire",
    author: "APJ Abdul Kalam",
    category: "Auto Biography",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp16xiXu1ZtTzbLy-eSwEK4Ng6cUpUZnuGbQ&usqp=CAU",
  },
  {
    id: 7,
    title: "The Power Of Your Subconscious Mind",
    author: "Joseph Murphy",
    category: "Psychology",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Rb2t6jA5ml7n57qdTZbAOWX1qSfsLCbaOA&usqp=CAU",
  },
  {
    id: 8,
    title: "**Elon Musk**",
    author: "Walter Isaacson",
    category: "Life Story", 
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFiDRQ7a-Oo-CnMmnbIMApP1Cq9B5bYx-UA&usqp=CAU",
  },
  {
    id: 9,
    title: "**The Subtle Art Of Not Giving A F*ck**",
    author: "Mark Manson",
    category: "Self-Help",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRHNwRyPkTxnMOzOvv5dOK4OS_lq4-2Yugg&usqp=CAU",
  },
  {
    id: 10,
    title: "Thơ Nôm Hồ Xuân Hương",
    author: "Hồ Xuân Hương",
    category: "Thơ",
    imageSrc: "https://cdn1.fahasa.com/media/catalog/product/8/9/8935343701210.jpg",
  },
  {
    id: 11, 
    title: "Tuổi Thơ Dữ Dội",
    author: "Phùng Quán",
    category: "tác phẩm văn học việt nam",
    imageSrc: "https://thpthuonghoa.quangtri.edu.vn/upload/32300/fck/files/tuoi-tho-du-doi_1.jpg",
  },
  {
    id: 12, 
    title: "Tuyển tập Thơ văn Hồ Chí Minh",
    author: "Hồ Chí Minh",
    category: "Thơ",
    imageSrc: "https://bizweb.dktcdn.net/thumb/grande/100/418/570/products/tuyen-tap-tho-van-ho-chi-minh.jpg?v=1618563804357",
  },
  {
    id: 13, 
    title: "Thơ Nguyễn Đình Thi",
    author: "Nguyễn đình Thi",
    category: "Thơ",
    imageSrc: "https://product.hstatic.net/200000343865/product/tu-sach-van-hoc-trong-nha-truong_tho-nguyen-dinh-thi_42ffb07ffb3943eb89ed1c6a22a7d4c1_master.jpg",
  },
  {
    id: 14,
    title: "Thơ Tố Hữu",
    author: "Tố Hữu",
    category: "Thơ",
    imageSrc: "https://cdn1.fahasa.com/media/catalog/product/h/h/hh_bia_tho-to-huu_bia-1.jpg",
  },
];
function Allbooks() {
  return (
    <div className="books-page">
      <div className="book-banner-container">
          <h1>THƯ VIỆN SÁCH ĐIỆN TỬ</h1>
          <div className="book-banner">
              {bannerBookData.map((book) => (
                  <div className="banner-card" key={book.id}>
                      <img src={book.imageSrc} alt={book.title} />
                      <p className="banner-title">{book.title}</p>
                  </div>
              ))}
          </div>
      </div>
      <div className="books-grid-container">
          <h2>Các Tác Phẩm Nổi Bật</h2>
          <div className="books-grid">
              {gridBookData.map((book) => (
                  <div className="book-card" key={book.id}>
                      <img src={book.imageSrc} alt={book.title} />
                      <p className="bookcard-title">{book.title}</p>
                      <p className="bookcard-author">By {book.author}</p>
                      {book.category && (
                          <div className="bookcard-category">
                              <p>{book.category}</p>
                          </div>
                      )}
                      <div className="bookcard-action">
                          <Link to={`/book/${book.id}`}>
                            <button>Xem Chi Tiết</button>
                          </Link>
                      </div>
                  </div>
              ))}
          </div>
      </div>

    </div>
  );
}

export default Allbooks;