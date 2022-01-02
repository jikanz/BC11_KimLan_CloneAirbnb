import React, { useEffect, useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Badge } from "@material-ui/core";

export default function Logout(props) {
  const { currentUser } = useSelector((state) => state.login);
  // const [currentUser,setCurrentUser] = useState(),
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const history = useHistory();
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleProfile = (userId) => {
    history.push(`/profile/${userId}`);
  };
  const handleClose = (event, value) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    history.push(value);
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    history.push("/");
  };
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <>
      <Button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {props.children}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem>Tin nhắn</MenuItem>
                  <MenuItem>Thông báo</MenuItem>
                  <MenuItem>Chuyến đi</MenuItem>
                  <MenuItem>Danh sách yêu thích</MenuItem>
                  <MenuItem></MenuItem>
                  <MenuItem>Cho thuê nhà</MenuItem>
                  <MenuItem>Tổ chức trải nghiệm</MenuItem>
                  <MenuItem
                    onClick={() => handleProfile(currentUser?.user?.name)}
                  >
                    <Badge color="secondary" variant="dot">
                      Tài Khoản
                    </Badge>
                  </MenuItem>
                  <MenuItem></MenuItem>
                  <MenuItem>Trải nghiệm</MenuItem>
                  <MenuItem>
                    <Badge color="secondary" variant="dot">
                      <a
                        href="/admin/quanlynguoidung"
                        style={{ color: "black" }}
                      >
                        Trang Quản Lý
                      </a>
                    </Badge>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
