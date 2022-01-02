import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function AdminLayout({ children }) {
  //   const { pathname } = useLocation();

  return (
    <div className="container-fluid">
      <div className="row">
        <nav
          id="sidebarMenu"
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        >
          <div className="sidebar-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink
                  to="/admin/quanlynguoidung"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="fa fa-home" />
                  Quản Lý Người dùng <span className="sr-only">(current)</span>
                </NavLink>
                <NavLink
                  to="/admin/quanlynguoidung/add"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="fa fa-home" />
                  Thêm Người dùng <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/admin/quanlyvitri"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="fa fa-utensils" />
                  Quản lý thông tin vị trí
                </NavLink>
                <NavLink
                  to="/admin/quanlyvitri/add"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="fa fa-utensils" />
                  Thêm Vị Trí
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="col-md-9 ml-sm-auto col-lg-10 px-md-4">{children}</div>
      </div>
    </div>
  );
}
