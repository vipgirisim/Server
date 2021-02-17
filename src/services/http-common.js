import axios from "axios";

export default axios.create({
  baseURL: "http://cors-anywhere.herokuapp.com/http://vipfal.herokuapp.com/admin/",
  headers: { }
});