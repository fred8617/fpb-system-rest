import React, { FC } from "react";
import "../less/login.less";
import LoginComponent from "../page-components/LoginComponent";
export interface LoginProps {}
const Login: FC<LoginProps> = ({ ...props }) => {
  return (
    <>
      <LoginComponent />
    </>
  );
};
export default Login;
