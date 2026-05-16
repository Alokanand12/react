import axios from "axios";
import { toast } from "react-toastify";

export let axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response);
    toast.success("data fetched");
    return response;
  },
  (error) => {
    toast.error("kuch gadbad hai");
  }
);
