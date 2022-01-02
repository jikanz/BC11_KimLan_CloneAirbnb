import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  IconButton,
  Modal,
  Paper,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import { Box } from "@mui/system";
// import moment from "moment";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { register } from "../Auth/action/registerSlice";
import authAPI from "../../services/authAPI";
import postAvatarUser from "../Auth/action/avatarSlice";
import useStyles from "./style";
import { useForm } from "react-hook-form";
const Profile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.login);
  const [fileUpload, setFileUpload] = useState(null);
  const { handleSubmit, register } = useForm();
  const handleChangeFile = (event) => {
    setFileUpload(event.target.files[0]);
    console.log(fileUpload);
  };
  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("avatar", values.avatar);
    console.log(formData);
    const handleUpImage = async () => {
      const formData = new FormData();
      formData.append("avatar", fileUpload);
      await authAPI.postAvatarUser(currentUser?.user._id, formData);
    };

    handleUpImage();
    // dispatch(postAvatarUser(formData));
  };
  // useEffect(() => {
  //   const handleUpImage = async () => {
  //     const formData = new FormData();
  //     formData.append("avatar", fileUpload);
  //     await authAPI.postAvatarUser(formData);
  //     dispatch(register(currentUser.user.avatar));
  //   };

  //   handleUpImage();
  // }, [dispatch,]);
  return (
    <Container maxWidth="lg" className={classes.profile}>
      {" "}
      <div>
        <Grid container>
          <Grid item lg={4}>
            <Card className={classes.root} variant="outlined">
              <CardContent className={classes.profile__top}>
                <Box display="flex" justifyContent="center">
                  <Avatar
                    alt="Avatar"
                    src={currentUser?.user?.avatar}
                    className={classes.large}
                  />
                </Box>

                {/* <input
                  accept="image/*"
                  className={classes.uploadInput}
                  id="icon-button-file"
                  type="file"
                  onChange={handleChangeFile}
                /> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className={classes.uploadInput}
                    type="file"
                    id="avatar"
                    name="avatar"
                    {...register("avatar")}
                    onChange={handleChangeFile}
                  />
                  <button className={classes.uploadButton}>
                    {" "}
                    Cập nhật ảnh
                  </button>
                </form>
                {/* <label htmlFor="icon-button-file">
                  <Typography className={classes.uploadButton}>
                    Cập nhật ảnh
                  </Typography>
                </label> */}
                <div className={classes.icon__style}>
                  <VerifiedUserOutlinedIcon />
                </div>
                <Typography className={classes.pos}>
                  Xác minh danh tính
                </Typography>
                <Typography className={classes.profile__text__accuracy}>
                  Xác thực danh tính của bạn với huy hiệu xác minh danh tính.
                </Typography>
                <Button className={classes.profile__button} size="small">
                  Nhận huy hiệu
                </Button>
              </CardContent>
              <CardActions className={classes.profile__name}>
                <Typography variant="h6">
                  {currentUser?.user?.name} đã xác nhận
                </Typography>
                <Box display="flex">
                  <DoneOutlinedIcon className={classes.profile__name__icon} />
                  <Typography className={classes.profile__name__text}>
                    Địa chỉ email
                  </Typography>
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={8}>
            <div className={classes.profile__left}>
              <div>
                <Typography variant="h5" className={classes.profile__title}>
                  Xin chào, tôi là {currentUser?.user?.name}
                </Typography>
                <Typography className={classes.profile__text__start}>
                  Bắt đầu tham gia vào 2022
                </Typography>
              </div>
              <div className={classes.propfile__info}>
                <Typography className={classes.profile__info__text}>
                  Thông tin cá nhân
                </Typography>
                <div className={classes.profile__info__item}>
                  <div>
                    <Typography variant="subtitle2">Name</Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle1">
                      {currentUser?.user?.name}
                    </Typography>
                  </div>
                </div>
                <div className={classes.profile__info__item}>
                  <div>
                    <Typography variant="subtitle2">Address</Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle1">
                      {currentUser?.user?.address}
                    </Typography>
                  </div>
                </div>
                <div className={classes.profile__info__item}>
                  <div>
                    <Typography variant="subtitle2">Email</Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle1">
                      {currentUser?.user?.email}
                    </Typography>
                  </div>
                </div>
                <div className={classes.profile__info__item}>
                  <div>
                    <Typography variant="subtitle2">Phone</Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle1">
                      {currentUser?.user?.phone}
                    </Typography>
                  </div>
                </div>
                <div className={classes.profile__info__item}>
                  <div>
                    <Typography variant="subtitle2">Gender</Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle1">
                      {currentUser?.user?.gender ? "Nam" : "Nữ"}
                    </Typography>
                  </div>
                </div>
              </div>
              {/* <div>
                <ButtonSubmit
                  handleSubmit={handleModalOpen}
                  text={textProfileModal}
                  className="a"
                />
              </div> */}
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Profile;
