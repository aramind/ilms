import * as y from "yup";

const signUpSchema = y.object().shape({
  firstName: y
    .string()
    .required("This field cannot be empty")
    .min(2, "Must be at least 2 characters long"),
  lastName: y
    .string()
    .required("This field cannot be empty")
    .min(2, "Must be at least 2 characters long"),
  email: y
    .string()
    .required("This field cannot be empty")
    .email("Invalid email address"),
  password: y
    .string()
    .required("This field cannot be empty")
    .min(4, "Must be at least 4 characters long"),
});

export default signUpSchema;
