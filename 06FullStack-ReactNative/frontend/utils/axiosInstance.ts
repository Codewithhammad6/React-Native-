import axios from "axios";

const axiosInstance = axios.create({
  baseURL :"http://10.0.2.2:5000/api/v1",
  withCredentials: true,
});


export default axiosInstance;