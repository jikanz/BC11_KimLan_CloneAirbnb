import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";
import { addUser } from "../../../actions/addUser";
/**
 * Data cần để thêm phim
 * tenPhim, biDanh, trailer, hinhAnh, moTa, ngayKhoiChieu, maNhom
 */
export default function AddUser() {
  const dispatch = useDispatch();
  const { control, register, handleSubmit, watch } = useForm();
  const [imgPreview, setImgPreview] = useState("");
  const watchImg = watch("avatar", []);
  const fileRef = useRef(null);
  useEffect(() => {
    // Từ 1 file ta có thể decode thành 1 string dạng base64 để có thể nhúng vào src của tag img
    const file = watchImg[0];

    if (!file) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (evt) => {
      console.log(evt.target.result);
      setImgPreview(evt.target.result);
    };
  }, [watchImg]);

  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("name", values.name);
    formData.append("phone", values.phone);
    formData.append("birthday", values.Birthday);
    formData.append("address", values.address);
    formData.append("avatar", values.avatar[0]);
    console.log(values);
    dispatch(addUser(formData));
    alert("thêm thành công");
  };

  return (
    <div className="center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <TextField {...field} label="Email" />}
          />
        </div>
        <div>
          <Controller
            name="password"
            control={control}
            render={({ field }) => <TextField {...field} label="Mật Khẩu" />}
          />
        </div>
        <div>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <TextField {...field} label="Họ Tên" />}
          />
        </div>

        <div>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => <TextField {...field} label="Phone" />}
          />
        </div>
        <div>
          <Controller
            name="birthday"
            control={control}
            render={({ field }) => <TextField {...field} label="Birthday" />}
          />
        </div>
        <div>
          <Controller
            name="address"
            control={control}
            render={({ field }) => <TextField {...field} label="Địa Chỉ" />}
          />
        </div>
        <div className="mt-5">
          <p>Cập nhật avatar</p>
          <input
            type="file"
            id="avatar"
            name="avatar"
            // ref={fileRef}
            {...register("avatar")}
            // style={{ display: "none" }}
          />
          {imgPreview && <img src={imgPreview} alt="preview" />}
        </div>
        <button className="mt-5">Submit</button>
      </form>
    </div>
  );
}
