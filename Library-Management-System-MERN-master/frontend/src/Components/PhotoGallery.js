import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const galleryData = [
    { 
        src: "https://trunghoc.timesschools.edu.vn/wp-content/uploads/2020/06/IMG_0409-2048x1365.jpg", 
        link: "https://trunghoc.timesschools.edu.vn/ca-nhan-hoa-hoc-tap-tai-trung-hoc-co-so-phuong-phap-phat-trien-ke-hoach-hoc-tap-toi-uu-cho-hoc-sinh/" 
    },
    { 
        src: "https://trunghoc.timesschools.edu.vn/wp-content/uploads/2024/04/ZHU09354-2048x1365.jpg", 
        link: "https://trunghoc.timesschools.edu.vn/cuoc-song-hoc-duong/thu-vien-doc-sach/" 
    },
    { 
        src: "https://trunghoc.timesschools.edu.vn/wp-content/uploads/2024/06/IMG_4891-scaled-e1719627673939.jpg", 
        link: "https://trunghoc.timesschools.edu.vn/trai-nghiem-ngoai-khoa-day-cam-hung-global-race-2024/" 
    },
    { 
        src: "https://cdn-images.vtv.vn/zoom/554_346/66349b6076cb4dee98746cf1/2025/03/19/tv1-1742284622081-17422846223191297903119-57255733089733638163276-12225732506144152327168.jpg", 
        link: "https://vtv.vn/giao-duc/binh-duong-he-thong-thu-vien-phuc-vu-cho-hon-140000-luot-ban-doc-20250319110153025.htm" 
    },
    { 
        src: "https://daotao.donga.edu.vn/Portals/21/2017/tv_2.jpg", 
        link: "https://daotao.donga.edu.vn/tin-chi-tiet/nhung-ly-do-khien-ban-khong-the-lam-ngo-voi-thu-vien-9467" 
    },
    { 
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDFrefr8FSTiuTS2VEKasKRST-KS34Ns_hLQ&s", 
        link: "http://ng-thdongtam.haiduong.edu.vn/xem_trang_tin.aspx?id=10622" 
    },
    { 
        src: "https://media.baobinhphuoc.com.vn/upload/news/4_2023/hinh_4_15482721042023.jpg", 
        link: "https://baobinhphuoc.com.vn/news/72/143463/lan-toa-phong-trao-doc-sach-trong-truong-hoc" 
    },
    { 
        src: "https://cafefcdn.com/203337114487263232/2023/7/20/298906574101590302134476847005733038478640968n-16898915637541351616271-1689866422690-16898664227691326815476.jpg", 
        link: "https://cafef.vn/9-thu-vien-mien-phi-sang-xin-min-nhat-ha-noi-co-so-vat-chat-hien-dai-hang-ngan-dau-sach-chat-luong-18823072022221053.chn" 
    },
    { 
        src: "https://photo.znews.vn/w660/Uploaded/zagtgt/2025_08_09/CFT7_znews_19.jpg", 
        link: "https://znews.vn/khong-gian-thu-vien-20-m2-chua-hon-3000-dau-sach-o-tphcm-post1575035.html" 
    },
    { 
        src: "https://image.phunuonline.com.vn/fckeditor/upload/2023/20231203/images/pncn47-thu-vien-khap-the-_751701561630.jpg", 
        link: "https://www.phunuonline.com.vn/thu-vien-khap-the-gioi-bung-tinh-sau-giac-ngu-dai-a1506718.html" 
    },
    { 
        src: "https://hnm.1cdn.vn/2022/10/23/hanoimoi.com.vn-uploads-images-phananh-2022-10-23-_thuvien2.jpg", 
        link: "https://hanoimoi.vn/phat-trien-he-thong-thu-vien-cong-cong-o-ha-noi-nhan-rong-nhung-mo-hinh-hieu-qua-7562.html" 
    },
     { 
        src: "https://daotao.donga.edu.vn/Portals/21/2017/tv_10.JPG", 
        link: "https://hanoimoi.vn/phat-trien-he-thong-thu-vien-cong-cong-o-ha-noi-nhan-rong-nhung-mo-hinh-hieu-qua-7562.html" 
    },
];

// =================================================================

function PhotoGallery() {
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>
            <div className="photogallery-images">
                {galleryData.map((photo, index) => (
                    
                    <a 
                        key={index} 
                        href={photo.link} 
                        target="_blank"  
                        rel="noopener noreferrer"
                        className="photogallery-link"
                    >
                        <img 
                            src={photo.src}
                            alt={`Gallery Image ${index + 1}`}
                        />
                    </a>
                ))}
            </div>
            <button>VIEW MORE<ArrowForwardIosIcon style={{fontSize:20}}/></button>
        </div>
    )
}

export default PhotoGallery