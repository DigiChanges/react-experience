import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
  lastName: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
  email: Yup.string().email("Invalid email").required("Required"),
  roles: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export default SignUpSchema;
