import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import QuanLyNguoiDung from "./QuanLyNguoiDung";
import AddUser from "./addUser/AddUser";
import UpdateUser from "./addUser/AddUser";

export default function AdminUser() {
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <Switch>
      <Route exact path={path}>
        <QuanLyNguoiDung />
      </Route>
      <Route exact path={`${path}/add`}>
        <AddUser />
      </Route>
      <Route exact path={`${path}/update/:id`}>
        <UpdateUser />
      </Route>
    </Switch>
  );
}
