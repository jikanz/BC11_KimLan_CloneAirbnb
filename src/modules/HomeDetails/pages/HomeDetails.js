import React, { useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./HomeDetails.css";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { getSearchs } from "../../HomeSearch/action/SearchSlice";
import { useParams } from "react-router-dom";
const searchSelector = createSelector(
  (state) => state,
  (state) => state.search
);
export default function HomeDetails() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { searchs, isLoading, error } = useSelector(searchSelector);
  console.log(searchs);
  useEffect(() => {
    dispatch(getSearchs());
  }, [name]);
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      <div className="container">
        {Array.isArray(searchs) &&
          searchs?.map((item, index) => {
            return item?.name === name ? (
              <div key={index}>
                <div>
                  <h1>{item.name} </h1>
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <span>{item.guest} </span>{" "}
                      <div>
                        {item.guests}
                        <StarIcon
                          style={{ color: "red" }}
                          className="mr-3"
                        ></StarIcon>
                      </div>
                      <span>
                        {item.locationId.name},{item.locationId.country}
                      </span>
                    </div>
                    <div>
                      <button
                        className="border-0 mr-3"
                        style={{ backgroundColor: "white" }}
                      >
                        <IosShareIcon></IosShareIcon>Chia sẽ
                      </button>
                      <button
                        className="border-0"
                        style={{ backgroundColor: "white" }}
                      >
                        <FavoriteBorderIcon></FavoriteBorderIcon>Lưu
                      </button>
                    </div>
                  </div>
                </div>
                <div className="img2">
                  <div className="subgrid">
                    <div className="one-one">
                      <img src={item.image} alt="" height="565px" />
                    </div>
                    <div className="one-two">
                      <img src={item.image} alt="" height="280px" />
                    </div>
                    <div className="one-three">
                      <img src={item.image} alt="" height="280px" />
                    </div>
                    <div className="one-four">
                      <img src={item.image} alt="" height="280px" />
                    </div>
                    <div className="one-five">
                      <img src={item.image} alt="" height="280px" />
                    </div>
                  </div>
                </div>
                <div className="profile mt-5 ">
                  <div className="row">
                    <div className="col-8">
                      <div className="profile_name d-flex justify-content-between">
                        <div className="profile_name_left">
                          <h2>{item.description}</h2>
                          <p>
                            {item.guests} Phòng Khách · {item.bedRoom} Giường
                            Ngủ · {item.bath} Phòng Tắm
                          </p>
                        </div>
                        <div className="profile_name_right">
                          <img
                            src="../img/582e1a12-c7a1-4b5e-a8e8-684cfea4e424.jpg"
                            alt=""
                            width="56px"
                            height="56px"
                            style={{ borderRadius: "50%" }}
                          />
                        </div>
                      </div>
                      <hr />
                    </div>
                    <div className="col-4">
                      <div>
                        <div className="noiDatPhong">
                          <div className="d-flex justify-content-between ">
                            <div>
                              <p> {item.price} VND / Đêm</p>
                            </div>
                            <div>
                              <p>{item.locationId.valueate} đánh giá</p>
                            </div>
                          </div>
                          <div>
                            <div className="datPhong">
                              <div className="d-flex justify-content-between">
                                <div className="nhanPhong w-50">
                                  <div className="datPhongPadding">
                                    <span>Nhận phòng</span>
                                    <span>Thêm ngày</span>
                                  </div>
                                </div>
                                <div className="traPhong w-50">
                                  <div className="traPhongPadding">
                                    <span>Trả phòng</span>
                                    <span>Thêm ngày</span>
                                  </div>
                                </div>
                              </div>
                              <div className="khach">
                                <div className="khachPadding">
                                  <span>Khách</span>
                                  <span>1 khách</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <button class="buttonKiemTra btn btn-danger w-100">
                              Kiểm tra tình trạng còn phòng
                            </button>
                          </div>
                        </div>
                        <div>
                          <span>Báo cáo nhà/phòng cho thuê này</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            );
          })}
      </div>
    </div>
  );
}
