import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './BookDetail.css'; 

function BookDetail() {
  const { id } = useParams(); 
  const history = useHistory(); 
  const allBookData = [
    {
      id: 6,
      title: "Wings Of Fire",
      author: "APJ Abdul Kalam",
      category: "Auto Biography",
      description: "Wings of Fire là cuốn tự truyện của A. P. J. Abdul Kalam, cựu Tổng thống Ấn Độ. Cuốn sách kể về hành trình từ một cậu bé ở Rameswaram đến khi trở thành nhà khoa học hàng đầu của Ấn Độ.",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp16xiXu1ZtTzbLy-eSwEK4Ng6cUpUZnuGbQ&usqp=CAU",
    },
    {
      id: 7,
      title: "The Power Of Your Subconscious Mind",
      author: "Joseph Murphy",
      category: "Psychology",
      description: "Cuốn sách này giới thiệu về sức mạnh của tiềm thức và cách bạn có thể sử dụng nó để thay đổi cuộc đời mình, từ việc cải thiện sức khỏe đến làm giàu.",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Rb2t6jA5ml7n57qdTZbAOWX1qSfsLCbaOA&usqp=CAU",
    },
    {
      id: 8,
      title: "Elon Musk",
      author: "Walter Isaacson",
      category: "Life Story", 
      description: "Tiểu sử chi tiết về Elon Musk, người đứng sau Tesla, SpaceX và những nỗ lực thay đổi tương lai của loài người.",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFiDRQ7a-Oo-CnMmnbIMApP1Cq9B5bYx-UA&usqp=CAU",
    },
    {
      id: 9,
      title: "The Subtle Art Of Not Giving A F*ck",
      author: "Mark Manson",
      category: "Self-Help",
      description: "Một cuốn sách self-help đi ngược lại với những lời khuyên tích cực sáo rỗng, giúp bạn tìm ra những gì thực sự quan trọng trong cuộc sống.",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRHNwRyPkTxnMOzOvv5dOK4OS_lq4-2Yugg&usqp=CAU",
    },
    {
      id: 10,
      title: "Thơ Nôm",
      author: "Hồ Xuân Hương",
      category: "Thơ",
      description: "Các bậc tài năng và kỹ tính trong văn chương như Xuân Diệu gọi bà là Bà chúa thơ Nôm, thiên tài, kỳ nữ. Nhà văn Nguyễn Tuân nhận xét “Chao ôi, Xuân Hương người đàn bà độc đáo nhà thơ vô song hiện thực trữ tình cái hiện thực của sự sống đa âm đa dương”. Nhà thơ Chế Lan Viên nhận xét “Hồ Xuân Hương là một thiên tài hiếm có của dân tộc và của cả loài người”. Khó kể hết những lời ca ngợi thơ Hồ Xuân Hương trong quá khứ, hiện tại và chắc chắn với mai sau, trong nước, ngoài nước. Bởi thơ bà có sức sống mãnh liệt, có giá trị nhân văn sâu sắc, có tầm thời đại rộng lớn và có nghệ thuật độc đáo bất tận.",
      imageSrc: "https://cdn1.fahasa.com/media/catalog/product/8/9/8935343701210.jpg",
    },
    {
      id: 11,
      title: "Tuổi thơ dữ dội",
      author: "Phùng Quán",
      category: "tác phẩm văn học việt nam",
      description: "Có một viên ngọc quý thời gian dành riêng để ban tặng con người, đó là Tuổi thơ. Viên ngọc màu nhiệm, trong sáng nhưng quá mong manh, không thể tìm thấy lần thứ hai trong đời. Và có một thế hệ người Việt chưa bao giờ được cầm viên ngọc trên tay, “Tuổi thơ dữ dội” của Phùng Quán được viết cho thế hệ đó. Hãy đọc để nhớ lại, để tự hào, và để cầu nguyện cho những Tuổi thơ sắp ra đời",
      imageSrc: "https://thpthuonghoa.quangtri.edu.vn/upload/32300/fck/files/tuoi-tho-du-doi_1.jpg",
    },
    {
      id: 12,
      title: "Tuyển tập thơ văn Hồ Chí Minh",
      author: "Hồ Chí Minh",
      category: "Thơ văn",
      description: "Nằm trong Tủ Sách Bác Hồ Cuốn sách “Tuyển Tập Thơ Văn Hồ Chí Minh”, là một tác phẩm viết về những câu chuyện của Bác Hồ với các em học sinh, sinh viên. Cuốn sách do Nhà sách Tân Việt và NXB Văn Học liên kết hợp tác phát hành. Sách được xuất bản lần đầu năm 2017 và đã được công chúng nồng nhiệt đón nhận. Cuốn sách đã trở nên thân thiết với các bạn đọc với nhiều lứa tuổi khác nhau, đặc biệt là các cháu thiếu niên, nhi đồng.",
      imageSrc: "https://bizweb.dktcdn.net/thumb/grande/100/418/570/products/tuyen-tap-tho-van-ho-chi-minh.jpg?v=1618563804357",
    },
    {
      id: 13,
      title: "Thơ Nguyễn Đình Thi",
      author: "Nguyễn Đình Thi",
      category: "Thơ",
      description: "Thơ Nguyễn Đình Thi thường hàm súc. Các bài thơ thường là những cảnh, cảnh nọ liên quan đến cảnh kia rồi tự bức tranh sẽ toát ra tư tưởng. Bức tranh đó thường chấm phá ít nét, chứa nhiều quãng trống cho trí tưởng tượng của người đọc",
      imageSrc: "https://product.hstatic.net/200000343865/product/tu-sach-van-hoc-trong-nha-truong_tho-nguyen-dinh-thi_42ffb07ffb3943eb89ed1c6a22a7d4c1_master.jpg",
    },
    {
      id: 14,
      title: "Thơ Tố Hữu ",
      author: "Tố Hữu",
      category: "Thơ",
      description: "Tố Hữu là một nhà thơ lớn. nói đúng hơn, ông là nhà thơ lãng mạn cách mạng. Cả cuộc đời ông gắn bó với cách mạng. Thơ với đời là một. Trước sau đều nhất quán. Tố Hữu nhìn cách mạng bằng con mắt lãng mạn của một thi sĩ. Thơ ông dường như chỉ có một giọng. Đó là gióng hát từng bừng ca ngợi cách mạng. Đọc thơ ông trong bất cứ hoàn cảnh và tâm trạng nào. Ta cũng thấy phấn chấn, náo nức như đi trẩy hội. Đến đâu cũng nghe vang tiếng trống, tiếng kèn. Mà thơ ông đâu chỉ có trống phách linh đình như một đám rước, ông còn bắn cả 21 phát đại bác vang trời. Cho đến nay, chỉ có ông là nhà thơ Việt Nam duy nhất đã bắn đại bác trang trọng như thế.",
      imageSrc: "https://cdn1.fahasa.com/media/catalog/product/h/h/hh_bia_tho-to-huu_bia-1.jpg",
    },
  ];
  const book = allBookData.find(b => b.id == id);

  if (!book) {
    return (
        <div className="book-detail-container error">
            <h2>Không tìm thấy sách!</h2>
            <button onClick={() => history.push('/books')}>Quay lại thư viện</button>
        </div>
    );
  }

  return (
    <div className="book-detail-page">
      <button className="btn-back" onClick={() => history.goBack()}>
        ← Quay lại
      </button>

      <div className="book-detail-card">
        <div className="book-detail-img">
          <img src={book.imageSrc} alt={book.title} />
        </div>
        
        <div className="book-detail-info">
          <h1 className="detail-title">{book.title}</h1>
          <h3 className="detail-author">Tác giả: <span>{book.author}</span></h3>
          <span className="detail-category">{book.category}</span>
          
          <div className="detail-desc">
            <h4>Giới thiệu nội dung:</h4>
            <p>{book.description || "Đang cập nhật nội dung cho cuốn sách này..."}</p>
          </div>

          <div className="detail-actions">
            <button className="btn-read">Đọc Sách</button>
            <button className="btn-favorite">❤️ Yêu thích</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;