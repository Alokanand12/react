import axios from "axios";

export let axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});
