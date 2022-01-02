import axiosClient from "./axiosClient";
const homeAPI = {
  getNearby: () => {
    return axiosClient.get(`/locations`);
  },
  getSearch: () => {
    return axiosClient.get(`/rooms/`);
  },
  getDetail: (data) => {
    return axiosClient.get(`rooms/`, data);
  },
};
export default homeAPI;
