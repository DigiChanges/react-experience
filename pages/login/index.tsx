import React  from "react";
import Login from '../../templates/login/index';


const loginData = require("../../data/logindata.json");

const IndexPage = () =>
(
    <Login loginData={loginData}/>
   
);

export default IndexPage;