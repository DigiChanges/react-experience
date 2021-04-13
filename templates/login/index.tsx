import { useState } from "react";

import Image from "../../atoms/Image";

import ForgotPasswordForm from "./ForgotPasswordForm";
import LoginForm from "./LoginForm";

const Login = () => {
  const [showRecoverPassword, setShowRecoverPassword] = useState(false);

  const togglePasswordRecovery = () => {
    setShowRecoverPassword(!showRecoverPassword)
  }

  return (
    <section className="text-gray-500 body-font bg-gray-900 h-screen">
      <div className="mx-auto h-full flex justify-center items-center">
        <div className="w-1/2 md:w-1/3 min-w-xxs max-w-lg ">
          <div className="bg-gray-650 rounded-lg border-teal p-8 border-t-12  mb-6 shadow-lg h-72">
            <div className="flex w-full justify-center mb-6 h-8"><Image image={"/logonav.png"} /></div>
            {
              showRecoverPassword
                ? (<ForgotPasswordForm onClick={togglePasswordRecovery} />)
                : (<LoginForm onClick={togglePasswordRecovery} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
};

export default Login;
