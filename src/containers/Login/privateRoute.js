import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ component: RouteComponent, ...props }) => {
  const { user } = useContext(AuthContext);
  const userDetails = user;
  return userDetails ? (
    <RouteComponent {...props} />
  ) : (
    <Redirect to={"/login"} />
  );
};

export default PrivateRoute;
