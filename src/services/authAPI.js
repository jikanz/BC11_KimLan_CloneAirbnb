import axiosClient from "./axiosClient";

const authAPI = {
  login: (values) => {
    return axiosClient.post("/auth/login", values);
  },
  register: (values) => {
    return axiosClient.post("/auth/register", {
      ...values,
    });
  },
  postAvatarUser(id, formData) {
    return axiosClient.post(`/users/upload-avatar/${id}`, formData);
  },
};

export default authAPI;
