import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import { Link } from "react-router-dom";
import { Menu, User } from "react-feather";
import LoginRegisterMenu from "../modules/Auth/pages/LoginRegister";
import { useDispatch, useSelector } from "react-redux";
import Logout from "../modules/Auth/pages/Logout";
import { Avatar } from "@material-ui/core";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import useStyles from "./styleSearch";
import homeAPI from "../services/homeAPI";
import { useHistory, useParams } from "react-router";
// import NO_AVATAR from "../img/NO_AVATAR.png";
// import { login } from "../modules/Auth/action/authSlice";

function Header() {
  const history = useHistory();
  const { currentUser } = useSelector((state) => state.login);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const [locationList, setLocationList] = useState([]);
  const res = locationList.filter((item) => typeof item.province === "string");
  console.log(locationList);
  useEffect(() => {
    (async () => {
      const response = await homeAPI.getNearby();
      setLocationList(response);
    })();
  }, []);
  const {
    value,
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    options: res,
    id: "useAutocomplete",
    getOptionLabel: (option) => option?.province,
  });

  const inputValueRef = { ...getInputProps() }.value;

  const locationInputValue = locationList.find(
    (location) => location.province === inputValueRef
  );
  const locationParams = useParams();
  const locationIdFromParams = locationParams.locationId;
  const locationId = locationInputValue?.province || locationIdFromParams;
  const handleSearch = () => {
    if (!value) return;
    history.push({
      pathname: `search/${locationId}`,
    });
  };
  const classes = useStyles();
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <div className="header__left">
          <img
            className="header__icon"
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt=""
          />
        </div>
      </Link>
      <div className="header__center">
        <div className={classes.locationSearch}>
          <div className={classes.locationSearch__wrapper} {...getRootProps()}>
            <label
              htmlFor=""
              className={classes.locationSearch__label}
              {...getInputLabelProps()}
            >
              Địa điểm
            </label>
            <div>
              <input
                className={classes.locationSearch__input}
                type="text"
                placeholder="Bạn sắp đi đâu?"
                {...getInputProps()}
              />
            </div>
          </div>
          <div className={classes.locationSearch__dropdown}>
            {groupedOptions.length > 0 ? (
              <ul
                className={classes.locationSearch__lists}
                {...getListboxProps()}
              >
                {groupedOptions.map((option, index) => (
                  <li
                    {...getOptionProps({ option, index })}
                    className={classes.locationSearch__list}
                  >
                    <div className={classes.locationSearch__lists__icon}>
                      <SearchIcon
                        className={classes.locationSearch__lists__icon__item}
                      />
                    </div>
                    <span className={classes.locationSearch__lists__title}>
                      {option.province}, {option.name}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <button
            className={classes.formControl__button}
            onClick={handleSearch}
          >
            <SearchIcon className={classes.formControl__button__icon} />
          </button>
        </div>
      </div>
      <div className="header__right">
        <div className="header__right__text mt-3 mr-4">
          <p>Trở thành chủ nhà</p>
        </div>
        <LanguageIcon className="mr-4" />
        <div className="header__user d-flex align-center">
          {localStorage.getItem("user") ? (
            <Logout>
              <Menu className="header__menu" />
              <Avatar
                src={currentUser?.user?.avatar}
                className="header__avatar"
              />
            </Logout>
          ) : (
            <LoginRegisterMenu>
              <Menu className="header__menu" />
              <User className="header__userIcon" />
            </LoginRegisterMenu>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
