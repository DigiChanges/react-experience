import * as Yup from "yup"

const ChangeRoleSchema = Yup.object().shape({
  roleName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  roleLevel: Yup.number()
    .oneOf([Yup.ref("roleLevel"), null], "Level must be number")
    .required("Required"),
})

export default ChangeRoleSchema
