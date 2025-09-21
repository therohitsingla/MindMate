import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, // ✅ this is mandatory for cookies
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
