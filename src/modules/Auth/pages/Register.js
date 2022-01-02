import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import { register } from "../action/registerSlice";
import { Modal } from "react-bootstrap";
import {
  Inbox,
  AccountBox,
  VpnKey,
  Help,
  DateRange,
  Home,
  PhoneAndroid,
  KeyboardReturn,
  PermIdentity,
} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import ModalLR from "./Modal";
const schema = yup.object().shape({
  address: yup.string().required("Địa chỉ không được để trống"),
  // gender: yup.string().required("Giới Tính không được để trống"),
  birthday: yup.string().required("Ngày sinh không được để trống"),
  password: yup
    .string()
    .required("Mật khẩu không được để trống")
    .min(8, "Mật khẩu phải từ 8 kí tự"),
  email: yup
    .string()
    .required("Email không được để trống")
    .email("Email không hợp lệ"),
  name: yup.string().required("Họ tên không được để trống"),
  phone: yup.string().required("Số điện thoại không được để trống"),
});

export default function Register() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.register);
  const history = useHistory();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      name: "",
      password: "",
      email: "",
      address: "",
      phone: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values);
    dispatch(register(values));
    handleRegisterSuccess();
  };

  const handleRegisterSuccess = () => {
    // Điều hướng qua trang login
    history.push("/login");
  };
  return (
    <>
      <ModalLR>
        <Modal.Header closeButton>
          <Modal.Title>ĐĂNG KÝ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="registerform"
            className="d-flex flex-column align-items-center"
          >
            <div>
              <div className="d-flex align-items-baseline">
                <div>
                  <AccountBox />
                </div>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Tài Khoản"
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  )}
                />
              </div>
            </div>
            <div>
              <div className="d-flex align-items-baseline">
                <div>
                  <VpnKey />
                </div>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="password"
                      label="Mật khẩu"
                      error={!!errors.password}
                      helperText={errors.password?.message}
                    />
                  )}
                />
              </div>
            </div>
            <div>
              <div className="d-flex align-items-baseline">
                <div>
                  <PermIdentity />
                </div>
                <Controller
                  name="name"
                  control={control}
                  render={({ field, fieldState }) => {
                    return (
                      <TextField
                        {...field}
                        label="Họ Tên"
                        error={!!errors.name}
                        helperText={errors.name?.message}
                      />
                    );
                  }}
                />
              </div>
            </div>
            <div>
              {/* <div className="d-flex align-items-baseline">
                <div>
                  <Help />
                </div>
                <Controller
                  name="gender"
                  control={control}
                  render={({ field, fieldState }) => {
                    return (
                      <TextField
                        {...field}
                        label="Giới Tính"
                        error={!!errors.gender}
                        helperText={errors.gender?.message}
                      />
                    );
                  }}
                />
              </div> */}
            </div>
            <div>
              <div className="d-flex align-items-baseline">
                <div>
                  <DateRange />
                </div>
                <Controller
                  name="birthday"
                  control={control}
                  render={({ field, fieldState }) => {
                    return (
                      <TextField
                        {...field}
                        label="Ngày Sinh"
                        error={!!errors.birthday}
                        helperText={errors.birthday?.message}
                      />
                    );
                  }}
                />
              </div>
            </div>
            <div>
              <div className="d-flex align-items-baseline">
                <div>
                  <Home />
                </div>
                <Controller
                  name="address"
                  control={control}
                  render={({ field, fieldState }) => {
                    return (
                      <TextField
                        {...field}
                        label="Địa chỉ"
                        error={!!errors.address}
                        helperText={errors.address?.message}
                      />
                    );
                  }}
                />
              </div>
            </div>
            <div>
              <div className="d-flex align-items-baseline">
                <div>
                  <PhoneAndroid />
                </div>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Số điện thoại"
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                    />
                  )}
                />
              </div>
            </div>
            {error && <div>Trùng tên đăng nhập </div>}
          </form>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <div className="mr-2">
            <Button
              variant="contained"
              color="primary"
              endIcon={<Inbox />}
              type="submit"
              disabled={isLoading}
              form="registerform"
            >
              Đăng ký
            </Button>
          </div>
          <Button
            variant="contained"
            color="primary"
            endIcon={<KeyboardReturn />}
            type="submit"
            disabled={isLoading}
            onClick={(e) => {
              e.preventDefault();
              history.push("/login");
            }}
          >
            Trở lại
          </Button>
        </Modal.Footer>
      </ModalLR>
    </>
  );
}
