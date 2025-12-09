import React from "react";
import "./Allbooks.css";

// --- IMPORT HÌNH ẢNH ---
// Lưu ý: Đảm bảo thư mục 'data' nằm trong thư mục 'src'.
// Cấu trúc: src/Pages/Allbooks.js và src/data/images/tho 1.jpg
import tho1 from "../data/images/tho 1.jpg";
import tho2 from "../data/images/tho 2.jpg";
import tho3 from "../data/images/tho 3.jpg";
import tho4 from "../data/images/tho 4.jpg";
import tho5 from "../data/images/tho 5.jpg";
import tho6 from "../data/images/tho 6.jpg";
import tho7 from "../data/images/tho 7.jpg";
import tho8 from "../data/images/tho 8.jpg";
import tho9 from "../data/images/tho 9.jpg";
import tho10 from "../data/images/tho 10.jpg";
import tho11 from "../data/images/tho 11.jpg";
import tho12 from "../data/images/tho 12.jpg";

// --- DỮ LIỆU SÁCH ---
const library = [
  {
    id: "1",
    title: "Calligraphy: Peaceful Mind",
    author: "Nguyễn Văn Thư",
    price: 199000,
    desc: "A handmade calligraphy piece with the phrase 'Peaceful Mind'.",
    photo: tho1,
  },
  {
    id: "2",
    title: "Calligraphy: Patience",
    author: "Trần Hữu Lộc",
    price: 99000, // Đã sửa giá thành số đầy đủ để hiển thị đẹp hơn
    desc: "A piece representing inner peace, helping the soul stay calm.",
    photo: tho2,
  },
  {
    id: "3",
    title: "Calligraphy: Filial Piety",
    author: "Lê Thị Mai",
    price: 99000,
    desc: "'Filial Piety' is the foundation of being a good child.",
    photo: tho3,
  },
  {
    id: "4",
    title: "Calligraphy: Virtue",
    author: "Ngô Minh Châu",
    price: 159000,
    desc: "'Virtue' reminds us to live ethically, kindly, and with good morals.",
    photo: tho4,
  },
  {
    id: "5",
    title: "Calligraphy: Blessing",
    author: "Vũ Quang Huy",
    price: 189000,
    desc: "'Blessing' symbolizes luck and happiness in the family.",
    photo: tho5,
  },
  {
    id: "6",
    title: "Calligraphy: Prosperity",
    author: "Phan Văn Tài",
    price: 139000,
    desc: "This piece brings wealth, luck, and success in business.",
    photo: tho6,
  },
  {
    id: "7",
    title: "Calligraphy: Abundance",
    author: "Lương Hữu Phước",
    price: 209000,
    desc: "Symbolizes wishes for prosperity and sustainable growth.",
    photo: tho7,
  },
  {
    id: "8",
    title: "Calligraphy: Talent",
    author: "Đặng Minh Tuấn",
    price: 159000,
    desc: "'Talent' honors intellect, ability, and personal success.",
    photo: tho8,
  },
  {
    id: "9",
    title: "Calligraphy: Peace",
    author: "Nguyễn Hoàng Phúc",
    price: 169000,
    desc: "Wishing peace for the home, a calm and light soul.",
    photo: tho9,
  },
  {
    id: "10",
    title: "Calligraphy: Gratitude",
    author: "Trần Văn Hòa",
    price: 179000,
    desc: "Expresses gratitude and appreciation for old values.",
    photo: tho10,
  },
  {
    id: "11", // Sửa ID trùng
    title: "Calligraphy: Gratitude II",
    author: "Trần Văn Hòa",
    price: 179000,
    desc: "Expresses gratitude and appreciation for life principles.",
    photo: tho11,
  },
  {
    id: "12",
    title: "Calligraphy: Gratitude III",
    author: "Trần Văn Hòa",
    price: 179000,
    desc: "Expresses gratitude and appreciation for old values.",
    photo: tho12,
  },
];

function Allbooks() {
  return (
    <div className="books-page">
      <div className="books">
        {library.map((item) => (
          <div className="book-card" key={item.id}>
            <img src={item.photo} alt={item.title} />
            <p className="bookcard-title">{item.title}</p>
            <p className="bookcard-author">By {item.author}</p>
            <div className="bookcard-category">
              <p>{item.price.toLocaleString()} VND</p>
            </div>
            <div className="bookcard-emptybox"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Allbooks;