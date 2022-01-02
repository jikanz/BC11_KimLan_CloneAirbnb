import axios from "axios";
import qs from "query-string";

// Setup những cấu hình mặc định cho axios
const axiosClient = axios.create({
  baseURL: "https://airbnb.cybersoft.edu.vn/api",
  headers: {
    tokenbyclass:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxMSIsIkhldEhhblN0cmluZyI6IjIxLzAyLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0NTQwMTYwMDAwMCIsIm5iZiI6MTYxODI0NjgwMCwiZXhwIjoxNjQ1NTQ5MjAwfQ.5mU9BqyLzddQpvu47bSES-4soazP--DtpP9aqF-U6wQ",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTcyNGFkZmVmZTE5MzAwMWMwYTdhOWEiLCJlbWFpbCI6ImFkbWluX2FpcmJuYkBnbWFpbC5jb20iLCJ0eXBlIjoiQURNSU4iLCJpYXQiOjE2NDA3ODU4MTR9.YqFI4pJca26NeoSZzuKHgZ-QF07ckEFhNi8aom82CKw",
  },
  paramsSerializer: (params) => {
    // Override lại cách axios set params lên url
    return qs.stringify(params, { skipEmptyString: true, skipNull: true });
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
