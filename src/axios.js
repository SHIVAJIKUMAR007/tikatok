import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktokappshivaji.herokuapp.com/",
});

export default instance;
