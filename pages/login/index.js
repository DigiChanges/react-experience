import React  from "react";
import Login from '../../Templates/Login';
const loginData = require("../../data/logindata.json");

const IndexPage = () =>
(
    <Login loginData={loginData}/>
);

export default IndexPage;