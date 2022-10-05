import axios from "axios";

export default axios.create({
  baseURL: "https://www.omdbapi.com",
});

axios.interceptors.response.use((res) => res.data.data);
