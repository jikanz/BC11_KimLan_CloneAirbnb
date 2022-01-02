import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import managementAPI from "../../../../../services/managementAPI";
export default function UpdateViTri() {
  const { handleSubmit, register } = useForm();
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" id="avatar" name="avatar" {...register("avatar")} />
        <button> Cập nhật ảnh</button>
      </form>
    </div>
  );
}
