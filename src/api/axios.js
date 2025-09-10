import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
});

export const submitContact = (data) =>
  instance.post("/api/contact", data);

export default instance;
