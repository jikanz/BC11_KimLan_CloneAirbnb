import { configureStore } from "@reduxjs/toolkit";
import nearby from "./modules/HomePage/action/NearbySlice";
import search from "./modules/HomeSearch/action/SearchSlice";
import login from "./modules/Auth/action/authSlice";
import register from "./modules/Auth/action/registerSlice";
import postAvatarUser from "./modules/Auth/action/registerSlice";
import user from "./modules/HomeManagement/actions/managermentSlice";
import viTri from "./modules/HomeManagement/actions/ViTriSlice";
import addUser from "./modules/HomeManagement/actions/addUser";
import addViTri from "./modules/HomeManagement/actions/addViTri";
const configurationStore = () => {
  const store = configureStore({
    reducer: {
      nearby,
      search,
      login,
      register,
      postAvatarUser,
      user,
      viTri,
      addUser,
      addViTri,
    },
  });

  return store;
};

export default configurationStore;
