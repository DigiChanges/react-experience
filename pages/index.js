import React  from "react";
import Login from '../Templates/Login';

const IndexPage = () => {
    const loginData = require("../data/logindata.json");
    return (
    <>
        <Login loginData={loginData}/>
    </>
)};

export default IndexPage;