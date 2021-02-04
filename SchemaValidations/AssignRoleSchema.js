import * as Yup from "yup"

const AssignRoleSchema = Yup.object().shape({
  name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  slug: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required")
})

export default AssignRoleSchema
