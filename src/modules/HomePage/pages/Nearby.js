import React, { useEffect } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { getNearbys } from "../action/NearbySlice";
import { useHistory } from "react-router-dom";
const nearbySelector = createSelector(
  (state) => state,
  (state) => state.nearby
);
export default function Nearby() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { nearbys, isLoading, error } = useSelector(nearbySelector);
  useEffect(() => {
    dispatch(getNearbys());
  }, []);
  const goToSearch = (province) => {
    history.push(`search/${province}`);
  };
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      <div className="container-xs">
        <h2>Khám phá những điểm đến gần đây</h2>
        <div className="row ">
          {nearbys.map((item, index) => {
            return index < 8 ? (
              <div
                onClick={() => goToSearch(item.province)}
                key={index}
                className="cities col-lg-3 col-md-4 col-sm-6 d-flex"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={item.image}
                  alt=""
                  style={{
                    height: "100px",
                    width: "100px",
                  }}
                />
                <div className="text ml-3 mt-3">
                  <p>{item.province}</p>
                  <p>{item.name}</p>
                </div>
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
    </div>
  );
}
