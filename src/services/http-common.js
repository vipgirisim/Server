import axios from "axios";

export default axios.create({
  baseURL: "https://vipfal.herokuapp.com/admin/",
  headers: { }
});