import * as Yup from "yup"

const ChangePasswordSchema = Yup.object().shape({
  password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
})

export default ChangePasswordSchema
