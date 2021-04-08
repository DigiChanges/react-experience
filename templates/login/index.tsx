import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setShowRecoverPassword } from "../../redux/actions";
import ForgotPasswdForm from "./ForgotPasswdForm";
import LoginForm from "./LoginForm";

const Login = () => {
  const [showRecoverPassword, setShowRecoverPassword] = useState(false);

  const togglePasswordRecovery = () => {
    setShowRecoverPassword(!showRecoverPassword)
  }

  return (
    <section className="text-gray-500 body-font bg-gray-900 h-screen">
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="w-1/2 md:w-1/3 ">
          {
            showRecoverPassword
              ? (<ForgotPasswdForm onClick={togglePasswordRecovery} showRecoverPassword={showRecoverPassword} />)
              : (<LoginForm onClick={togglePasswordRecovery} showRecoverPassword={showRecoverPassword} />)
          }
        </div>
      </div>
    </section>
  )
};

export default Login;
