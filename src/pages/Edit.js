import { Formik, Form, ErrorMessage, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Edit() {
	 const user = JSON.parse(localStorage.getItem("userData"));

  const initialValues = {
    firstname: `${user.firstname}`,
    lastname: `${user.lastname}`,
    email: `${user.email}`,
    picture: `${user.picture}`
  };

  const onSubmit = (values) => {
    console.log("onSubmit", values);
  };

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstname: Yup.string().required("firstname is required"),
    lastname: Yup.string().required("lastname is required"),
    email: Yup.string()
      .required("email is required")
      .email("Invalid email adress"),
  });

  const handleSubmit = (values) => {
    localStorage.setItem("userData", JSON.stringify(values));
    navigate("/profile");
  };

  return (
    <div className="bg-gray-200">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          localStorage.setItem("userData", JSON.stringify(values));
          console.log(values);
        }}
        validationSchema={validationSchema}
        onsub={handleSubmit}
      >
        {() => (
          <Form className="px-4 py-6 my-32 max-w-3xl mx-auto space-y-6 border-x-orange-500">
            <div>
              <h1 className="text-3xl italic bord"> Verify your account</h1>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="firstName" className="float-left py-2">
                  First Name
                </label>
                <Field
                  name="firstname"
                  placeholder="firstname"
                  className="border border-gray-400 block  py-2 px-4 w-full rounded  focus:outline-none focus:border-teal-500"
                />
                <div className="error">
                  <ErrorMessage
                    name="firstname"
                    component="span"
                    className="float-left py-2 text-red-600"
                  />
                </div>
              </div>

              <div className="w-1/2">
                <label htmlFor="lastname" className="float-left py-2">
                  Last Name
                </label>
                <Field
                  name="lastname"
                  placeholder="lastname"
                  className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                />
                <div className="error">
                  <ErrorMessage
                    name="lastname"
                    component="span"
                    className="float-left py-2 text-red-600"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="float-left py-2">
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
                  className="float-left py-2 text-red-600"
                />
              </div>
            </div>

            <div className="w-1/3">
              <label htmlFor="email" className="float-left py-2">
                picture
              </label>
              <Field
                name="picture"
                type="file"
                placeholder="avatar"
                className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
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
              className="border  bg-blue-300 py-1.5 px-20 rounded border-violet-600 my-5 focus:outline-none focus:border-teal-500 "
            >
              <a href="/profile">Submit</a>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
