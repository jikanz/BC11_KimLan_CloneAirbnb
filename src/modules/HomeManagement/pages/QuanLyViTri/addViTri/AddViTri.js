import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";
import { addViTri } from "../../../actions/addViTri";
export default function AddViTri() {
  const dispatch = useDispatch();
  const [imgPreview, setImgPreview] = useState("");

  const fileRef = useRef(null);
  const { control, handleSubmit, register, watch } = useForm({
    mode: "onTouched",
    defaultValues: {
      name: "",
      province: "",
      country: "",
      valueate: "",
    },
  });
  const watchImg = watch("image", []);
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
    console.log(values);
    dispatch(addViTri(values));
  };

  return (
    <div className="center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <TextField {...field} label="name" />}
          />
        </div>
        <div>
          <Controller
            name="province"
            control={control}
            render={({ field }) => <TextField {...field} label="province" />}
          />
        </div>
        <div>
          <Controller
            name="country"
            control={control}
            render={({ field }) => <TextField {...field} label="country" />}
          />
        </div>

        <div>
          <Controller
            name="valueate"
            control={control}
            render={({ field }) => <TextField {...field} label="valueate" />}
          />
        </div>
        {/* <div className="mt-5">
          <p>Cập nhật image</p>
          <input type="file" id="image" name="image" {...register("image")} />
          {imgPreview && <img src={imgPreview} alt="preview" />}
        </div> */}
        <button className="mt-5">Submit</button>
      </form>
    </div>
  );
}
