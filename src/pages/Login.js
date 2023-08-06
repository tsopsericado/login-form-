import { Formik, Form, ErrorMessage, Field} from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";


export default function Login() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    picture: [],
    password:"",
    confirm_password:""
  };

  const validationSchema = Yup.object({
    firstname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("firstname is required"),
    lastname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("lastname is required"),
    email: Yup.string()
      .email("Invalid email adress")
      .required("email is required"),
    password: Yup.string().required(),
    confirm_password: Yup.string()
      .label("confirm password")
      .required()
      .oneOf([Yup.ref("password"), ""], "Passwords must match"),
  });

  const navigate = useNavigate();


  const onSubmit = (values) => {
    localStorage.setItem("userData", JSON.stringify(values));
    console.log("onSubmit", values);
    navigate("/profile");
  };

  return (
    <div class="bg-gray-200">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form
            class="px-4 py-6 max-w-3xl mx-auto space-y-6 border-x-orange-500 h-screen bg-gradient-to-b
      from-blue-200 to-blue-500
  px-30  my-50"
          >
            <div>
              <h1 class="text-3xl italic bord">Create an account</h1>
              <p class="text-xl text-gray-1000">
                Store your infos in a safety place
              </p>
            </div>
            <div class="flex space-x-4">
              <div class="w-1/4">
                <label htmlFor="firstname" class="float-left py-2">
                  First Name
                </label>
                <Field
                  name="firstname"
                  placeholder="firstname"
                  className="myField"
                  class="border border-gray-400 block  py-2 px-4 w-full rounded  focus:outline-none focus:border-teal-500"
                />
                <div className="error">
                  <ErrorMessage
                    name="firstname"
                    component="span"
                    class="float-left py-2 text-red-600"
                  />
                </div>
              </div>

              <div class="w-1/4">
                <label htmlFor="lastname" class="float-left py-2">
                  Last Name
                </label>
                <Field
                  name="lastname"
                  placeholder="lastname"
                  class="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                />
                <div className="error">
                  <ErrorMessage
                    name="lastname"
                    component="span"
                    class="float-left py-2 text-red-600"
                  />
                </div>
              </div>
            </div>

            <div className="w-1/2 ">
              <label htmlFor="email" class="float-left py-2">
                Email
              </label>
              <Field
                name="email"
                placeholder="email"
                type="email"
                class="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
              />
              <div className="error">
                <ErrorMessage
                  name="email"
                  component="span"
                  class="float-left py-2 text-red-600"
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div class="w-1/4">
                <label htmlFor="password" class="float-left py-2">
                  password
                </label>
                <Field
                  name="password"
                  placeholder="password"
                  className="myField"
                  class="border border-gray-400 block  py-2 px-4 w-full rounded  focus:outline-none focus:border-teal-500"
                />
                <div className="error">
                  <ErrorMessage
                    name="password"
                    component="span"
                    class="float-left py-2 text-red-600"
                  />
                </div>
              </div>

              <div class="w-1/4">
                <label htmlFor="confirm_password" class="float-left py-2">
                  Confirm password
                </label>
                <Field
                  name="confirm_password"
                  placeholder="confirm password"
                  class="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                />
                <div className="error">
                  <ErrorMessage
                    name="confirm_password"
                    component="span"
                    class="float-left py-2 text-red-600"
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <div class="w-1/4">
                <label htmlFor="picture" class="float-left py-0">
                  picture
                </label>
                <Field
                  name="picture"
                  type="file"
                  placeholder="avatar"
                  class="border border-gray-400 block py-2 px-2  rounded focus:outline-none focus:border-teal-500"
                />
                <div className="error">
                  <ErrorMessage
                    name="picture"
                    component="span"
                    class="float-left py-2 text-red-600"
                  />
                </div>
              </div>

              <button
                type="submit"
                onSubmit={onSubmit}
                class="w-1/4 border-gray-400 bg-blue-300 py-1.5 px-1 rounded my-5 focus:outline-none focus:border-teal-500 "
              >
                submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
