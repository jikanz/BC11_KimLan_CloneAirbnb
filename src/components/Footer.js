import React from "react";
import "../styles/footer.css";
export default function Footer() {
  return (
    <div className="" id="footer">
      <div className="container-xl">
        <div className="row pt-3">
          <div className="col-3">
            <h5>Hỗ trợ</h5>
            <p href="">Trung tâm trợ giúp</p>
            <p href="">Thông tin an toàn</p>
            <p href="">Các tùy chọn hủy</p>
            <p href="">Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</p>
            <p href="">Hỗ trợ người khuyết tật</p>
            <p href="">Báo cáo lo ngại của hàng xóm</p>
          </div>
          <div className="col-3">
            <h5>Cộng đồng</h5>
            <p>Airbnb.org: nhà ở cứu trợ</p>
            <p>Hỗ trợ dân tị nạn Afghanistan</p>
            <p>Vì sự đa dạng và thân thuộc</p>
            <p>Chống phân biệt đối xử</p>
          </div>
          <div className="col-3">
            <h5>Đón tiếp khách</h5>
            <p>Thử đón tiếp khách</p>
            <p>AirCover: bảo vệ cho Host</p>
            <p>Xem tài nguyên đón tiếp khách</p>
            <p>Truy cập diễn đàn cộng đồng</p>
            <p>Đón tiếp khách có trách nhiệm</p>
          </div>
          <div className="col-3">
            <h5>Giới thiệu</h5>
            <p>Trang tin tức</p>
            <p>Tìm hiểu các tính năng mới</p>
            <p>Thư ngỏ từ các nhà sáng lập</p>
            <p>Cơ hội nghề nghiệp</p>
            <p>Nhà đầu tư</p>
            <p>Airbnb Luxe</p>
          </div>
        </div>
        <hr />
        <div className="d-flex  justify-content-between">
          <div>
            <span>
              © 2021 Airbnb, Inc.·Quyền riêng tư·Điều khoản·Sơ đồ trang web
            </span>
          </div>
          <div>
            <span>Tiếng Việt (VN) Chọn loại tiền tệ $ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
}
