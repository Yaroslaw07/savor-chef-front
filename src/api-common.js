import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:7083",
  headers: {
    "Content-Type": "application/json",
  },
});
