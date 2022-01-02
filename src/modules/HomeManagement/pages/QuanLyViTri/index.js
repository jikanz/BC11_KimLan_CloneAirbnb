import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import QuanLyViTri from "./QuanLyViTri";
import AddViTri from "./addViTri/AddViTri";
import UpdateViTri from "./updateViTri/UpdateViTri";

export default function AdminViTri() {
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <Switch>
      <Route exact path={path}>
        <QuanLyViTri />
      </Route>
      <Route exact path={`${path}/add`}>
        <AddViTri />
      </Route>
      <Route exact path={`${path}/update/:id`}>
        <UpdateViTri />
      </Route>
    </Switch>
  );
}
