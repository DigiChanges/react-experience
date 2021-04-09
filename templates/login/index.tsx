import { useState } from "react";

import ForgotPasswordForm from "./ForgotPasswordForm";
import LoginForm from "./LoginForm";

const Login = () =>
{
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
              ? (<ForgotPasswordForm onClick={togglePasswordRecovery} />)
              : (<LoginForm onClick={togglePasswordRecovery} />)
          }
        </div>
      </div>
    </section>
  )
};

export default Login;
