import { useState } from "react";

import Image from "../../atoms/Image";

import ForgotPasswordForm from "./ForgotPasswordForm";
import LoginForm from "./LoginForm";

const Login = () =>
{
  const [showRecoverPassword, setShowRecoverPassword] = useState(false);

  const togglePasswordRecovery = () => {
    setShowRecoverPassword(!showRecoverPassword)
  }

  return (
    <section className="dg-main-bg h-screen">
      <div className="dg-full-center-flex">
          <div className="dg-rounded-small-box">
            <div className="flex w-full justify-center mb-6 h-8 -mt-4"><a href="/"><Image image={"/logonav.png"} className="h-8"/></a></div>
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
