import axiosClient from "./axiosClient";

const managementAPI = {
  getList: () => {
    return axiosClient.get("/users/pagination");
  },
  deleteUser: (idUser) => {
    return axiosClient.delete(`/users/${idUser}`);
  },
  addUser: (values) => {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("name", values.name);
    formData.append("phone", values.phone);
    formData.append("birthday", values.Birthday);
    formData.append("address", values.address);
    formData.append("avatar", values.avatar[0]);
    return axiosClient.post(`/users`, formData);
  },
  editUser(idUser, info) {
    return axiosClient.put(`/users/${idUser}`, info);
  },
  getViTri: () => {
    return axiosClient.get("/locations");
  },
  deleteViTri: (idUser) => {
    return axiosClient.delete(`/locations/${idUser}`);
  },
  addViTri: (values) => {
    console.log(values);
    return axiosClient.post(`/locations`, { ...values });
  },
  editViTri(idUser, info) {
    return axiosClient.put(`/locations/${idUser}`, info);
  },
  editAnhViTri: (id, values) => {
    const formData = new FormData();
    formData.append("avatar", values.avatar);
    return axiosClient.post(`/locations/upload-images/${id}`, formData);
  },
};

export default managementAPI;
