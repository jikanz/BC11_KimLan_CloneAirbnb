import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { removeAccents } from "../../../../constants/config";
import {
  Button,
  IconButton,
  TablePagination,
  Typography,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import NO_AVATAR from "../../../../img/NO_AVATAR.png";
import useStyles from "./style";
import { getUsers, deleteUser } from "../../actions/managermentSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createSelector } from "@reduxjs/toolkit";
const userSelector = createSelector(
  (state) => state,
  (state) => state.user
);
export default function QuanLyNguoiDung() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector(userSelector);
  const [page, setPage] = useState(0);
  const [searched, setSearched] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const filteredRows =
    Array.isArray(users) &&
    users?.filter((row) => {
      return row?.name;
    });
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };
  const handleDeleteUser = (idUser) => {
    dispatch(deleteUser(idUser));
    console.log(idUser);
  };
  const tableHeader = [
    "Name",
    "Avatar",
    "Email",
    "Birth Day",
    "Gender",
    "Type",
    "Address",
    "",
  ];
  return (
    <div>
      <nav className="my-3" aria-label="breadcrumb">
        <h2>Quản Trị Viên</h2>
      </nav>
      {/* Button trigger modal */}
      <TableContainer component={Paper} className={classes.container}>
        <Table className={classes.table} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {tableHeader.map((item) => (
                <TableCell align="left" padding="normal">
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(users) &&
              filteredRows
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((item) => (
                  <TableRow key={item._id} hover role="checkbox" tabIndex={-1}>
                    <TableCell align="left">{item?.name}</TableCell>
                    <TableCell align="left">
                      <img
                        src={item?.avatar || NO_AVATAR}
                        alt="avatar"
                        className={classes.avatar}
                      />
                    </TableCell>
                    <TableCell align="left">{item?.email}</TableCell>
                    <TableCell align="left">{item?.birthday}</TableCell>
                    <TableCell align="left">
                      {item?.gender === true ? "Male" : "Female"}
                    </TableCell>
                    <TableCell align="left">{item?.type}</TableCell>
                    <TableCell align="left">{item?.address}</TableCell>
                    <TableCell align="left">
                      <IconButton
                        color="primary"
                        onClick={(e) => {
                          history.push(`/admin/users/edit/${item._id}`);
                          // handleToggleUser(e, ["1"]);
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="secondary"
                        onClick={() => handleDeleteUser(item._id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={filteredRows?.length > 0 ? filteredRows?.length : users?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
