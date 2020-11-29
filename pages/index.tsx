import React  from "react";
import Login from '../templates/login';
import {loginUser} from "../redux/auth/actions";
import {connect} from "react-redux";

const LoginPage = (): any => {
    const loginData = require("../data/logindata.json");
    return (
    <>
        <Login loginData={loginData}/>
    </>
)};

const mapStateToProps = state => {
    const { user, loading, error } = state.Auth;
    return { user, loading, error };
};

export default connect(
    mapStateToProps,
    { loginUser }
)(LoginPage);