import { Formik, Form, ErrorMessage, Field } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Login() {
  const initialValues = {
    firstname: "",  
    lastname: "",
    email: "",
    picture: [],
  };
 const navigate = useNavigate();
  const onSubmit = (values) => {
    console.log("onSubmit", values);
       navigate("/profile");
  };

 

  const validationSchema = Yup.object({
    firstname: Yup.string().required("firstname is required"),
    lastname: Yup.string().required("lastname is required"),
    email: Yup.string()
      .required("email is required")
      .email("Invalid email adress"),
  });

  const handleSubmit = (values) => {
    localStorage.setItem("userData", JSON.stringify(values));
 
  };

  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     username: "",
  //     password: "",
  //   },
  //   onSubmit: (values) => {
  //     console.log("onSubmit", values);
  //   },
  //   validationSchema: Yup.object({
  //     email: Yup.string()
  //       .required("Email is required")
  //       .email("Invalid email adress"),
  //     password: Yup.string().required("Password is required"),
  //     username: Yup.string().required("Username is required"),
  //   }),
  // validate: (values) => {
  //   const errors = {};
  //   if (!values.email) {
  //     errors.email = "Email is required";
  //   }
  //   if (!values.username) {
  //     errors.username = "Username is required";
  //   }
  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   }
  //   return errors;
  // },
  // });

  return (
    <div class="bg-gray-200">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          localStorage.setItem("userData", JSON.stringify(values));
          console.log(values);
        }}
        validationSchema={validationSchema}
        // onSubmit={handleSubmit}
      >
        {() => (
          <Form class="px-4 py-6 my-32 max-w-3xl mx-auto space-y-6 border-x-orange-500">
            <div>
              <h1 class="text-3xl italic bord"> Create an account</h1>
              <p class="text-xl text-gray-1000">
                Store your infos in a safety place
              </p>
            </div>
            <div class="flex space-x-4">
              <div class="w-1/2">
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

              <div class="w-1/2">
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

            <div className=" ">
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

            <div class="w-1/3">
              <label htmlFor="email" class="float-left py-2">
                picture
              </label>
              <Field
                name="picture"
                type="file"
                placeholder="avatar"
                class="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
              />
              <div className="error">
                <ErrorMessage
                  name="avatar"
                  component="span"
                  class="float-left py-2 text-red-600"
                />
              </div>
            </div>

            <button
              type="submit"
              onSubmit={onSubmit}
              class="border border-gray-400 bg-blue-300 py-1.5 px-20 rounded border-violet-600 my-5 focus:outline-none focus:border-teal-500 "
            >
              <a href="/profile">Submit</a>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
