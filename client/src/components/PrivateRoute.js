import React from "react";
import { Route, Redirect } from "react-router-dom";

// Private Route Rules:
// 1- It has the same API s <Route/>
// 2- It renders a <Route/> and passes all the props through to it.
// 3- It checks if the user is authenticated, if they are,
// it renders the "component" prop. If not, it redirects
// the user to /login.

// rest operator (looks a lot like spread operator)
// pull component out and spread the ...rest

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = window.localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          // return the component
          return <Component {...props} />;
        } else {
          // redirect the user to /login
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
