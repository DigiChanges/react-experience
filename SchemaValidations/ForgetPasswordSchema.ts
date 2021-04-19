import * as Yup from "yup";

const ForgetPasswordSchema = Yup.object().shape({
  email: Yup.string()
      .email("Invalid email")
      .required("Required")
});

export default ForgetPasswordSchema;
