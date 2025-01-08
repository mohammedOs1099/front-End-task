import * as Yup from "yup";

const validationSchema = Yup.object({
  employeename: Yup.string().required("Employee name is required"),
  startDate: Yup.date().required("Start date is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  Phone: Yup.string()
    .matches(/^\d{10,15}$/, "Phone number must be between 10-15 digits")
    .required("Phone is required"),
  role: Yup.string().required("Role is required")
});
export default validationSchema;