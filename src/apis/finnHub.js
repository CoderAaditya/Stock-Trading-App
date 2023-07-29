import axios from "axios";

const finnHub = axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: "civopjhr01qu45tmkfg0civopjhr01qu45tmkfgg",
  },
});

export default finnHub;
