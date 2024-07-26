import * as y from "yup";

const signInSchema = y.object().shape({
  email: y
    .string()
    .required("This field cannot be empty")
    .email("Invalid email address"),
  password: y.string().required("This field cannot be empty"),
});

export default signInSchema;
