import {Fragment}  from "react";
import Login from '../../Templates/Login';


const IndexPage = () => {
    const loginData = require("../../data/logindata.json");
    return (
    <Fragment>
        <Login loginData={loginData}/>
    </Fragment>
)};

export default IndexPage;