import React, { useEffect } from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import "./SearchResults.css";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { getSearchs } from "../action/SearchSlice";
import { useHistory, useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
const searchSelector = createSelector(
  (state) => state,
  (state) => state.search
);
export default function SearchPage() {
  const { province } = useParams();
  const dispatch = useDispatch();
  const { searchs, isLoading, error } = useSelector(searchSelector);
  const history = useHistory();
  // console.log(searchs);
  useEffect(() => {
    dispatch(getSearchs());
  }, [province]);
  const goToDetail = (name) => {
    history.push(`/details/${name}`);
  };
  console.log(searchs);
  return (
    <div className="searchPage">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <div className="searchPage__info">
        <p>62 stays · 26 august to 30 august · 2 guest</p>
        <h1>Nơi bạn đã chọn</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      {Array.isArray(searchs) &&
        searchs?.map((item, index) => {
          return item?.locationId?.province === province ? (
            <div
              key={index}
              className="searchResult"
              style={{ width: "60%" }}
              onClick={() => goToDetail(item.name)}
            >
              <img src={item.image} alt="" />
              <div className="searchResult__info">
                <div className="searchResult__infoTop">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>____</p>
                  <p>
                    {item.guests}guest · {item.bedRoom} bedroom · {item.bath}
                    bath
                  </p>
                </div>
                <div className="searchResult__infoBottom">
                  <div className="searchResult__stars">
                    <StarIcon style={{ color: "red" }}></StarIcon> {item.guests}
                  </div>
                  <div className="searchResults__price">
                    {item.price} VND / Đêm
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          );
        })}
    </div>
  );
}
