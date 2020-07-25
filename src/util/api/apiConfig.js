import axios from "axios";

const api = axios.create({
  // headers: { "Content-Type": "application/json" },
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://cors-anywhere.herokuapp.com/https://the-wrestling.herokuapp.com/"
      : "http://localhost:3000/",
});

export default api;
