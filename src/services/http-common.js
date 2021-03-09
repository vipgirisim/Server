import axios from "axios";

export default axios.create({
  baseURL: "http://www.madilink.net:8000/admin/",
  headers: { }
});