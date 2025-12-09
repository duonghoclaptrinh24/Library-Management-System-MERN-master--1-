import React from 'react'
import './News.css'

function News() {
    return (
        <div className='news-container'>
            <h className='news-title'>Tin Tức & Sự Kiện Mới Nhất</h>
            <div className='news-data'>
                <div className='news-empty'></div>
                <div>
                    <h1 className='news-subtitle'>📚 Các Cuộc Thi Thư Pháp</h1>
                    <div>
                        <div className='news-competition-event'>
                            <p>Cuộc thi: **Nét Việt Tinh Hoa 2026**</p>
                            <p>Thể lệ: Viết chữ Hán/Nôm hoặc chữ Quốc ngữ theo chủ đề "Mùa Xuân".</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Sự kiện: **Triển lãm "Hồn Việt trong Nét Chữ"**</p>
                            <p>Thời gian: 10:00 - 18:00, ngày 01/01/2026. Địa điểm: Phòng trưng bày A, Tầng 3.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Hội thảo: **Kỹ thuật Cầm Bút và Sáng Tác**</p>
                            <p>Diễn giả: Thư pháp gia Trần Văn. Đăng ký trước ngày 15/12/2025.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Cuộc thi: **Thư pháp Online dành cho Người Mới**</p>
                            <p>Giải thưởng: Bộ dụng cụ Thư pháp cao cấp. Hạn nộp bài: 30/01/2026.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Khóa học: **Nhập môn Khải Thư**</p>
                            <p>Lịch học: 19:00 thứ Ba & thứ Năm hàng tuần. Khai giảng: 05/02/2026.</p>
                        </div>
                    </div>
                </div>
                <div className='news-empty'></div>
                <div>
                    <h1 className='news-subtitle'> Quiz & Cập Nhật Hệ Thống</h1>
                    <div>
                        <div className='news-quiz-event'>
                            <p>Quiz: **Kiến Thức Cơ Bản về Thư Pháp**</p>
                            <p>Thời hạn: 10/12/2025 – 25/12/2025. Hoàn thành để nhận chứng chỉ Online.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Quiz: **Tìm hiểu về Lịch sử Thư tịch**</p>
                            <p>Quiz nâng cao, dành cho học viên cấp độ 2 trở lên.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Cập nhật: **Tính năng Luyện Viết Mới**</p>
                            <p>Đã thêm bộ mẫu chữ Hành Thư và Thảo Thư vào khu vực thực hành.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Thông báo: **Bảo trì Hệ thống**</p>
                            <p>Hệ thống sẽ bảo trì từ 01:00 đến 03:00 sáng ngày 03/01/2026.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Quiz: **Các dụng cụ Thư pháp cần thiết**</p>
                            <p>Một bài kiểm tra nhỏ giúp bạn chọn mua dụng cụ phù hợp.</p>
                        </div>
                    </div>
                </div>
                <div className='news-empty'></div>
            </div>
        </div>
    )
}

export default News