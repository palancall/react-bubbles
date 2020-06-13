// @ts-ignore
import React, { useState } from "react";

// @ts-ignore

import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const { push } = useHistory();
  const [credentials, setCredentials] = useState({
    id: "",
    username: "",
    password: "",
  });
  // console.log(credentials);
  // @ts-ignore
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  // make a post request to retrieve a token from the api
  // @ts-ignore
  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      // @ts-ignore
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("token", res.data.payload);
        push("/protected");
      })
      // @ts-ignore
      .catch((err) => {
        console.log("error", "wrong username or password");
      });
  };
  // when you have handled the token, navigate to the BubblePage route

  return (
    <>
      <form onSubmit={login}>
        <label htmlFor="username">Username:</label>
        <input
          type="username"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Username:</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
