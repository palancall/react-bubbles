// step 8 create utils folder and add axiosWithAuth.js file
// step 9 -create axiosWithAuth reusable function
import axios from "axios";

export const axiosWithAuth = () => {
  // step 10 - get the token from localStorage
  const token = window.localStorage.getItem("token");
  // step 11 - create a new instance of axios (return) with the config object built into it
  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: "http://localhost:5000",
  });
};
