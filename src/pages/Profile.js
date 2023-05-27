import { Formik, Form, ErrorMessage, Field } from "formik";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Profile() {
  const [data, setData] = useState({});
  const Navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("userData"));

  console.log(user);
  const handleSubmit = (values) => {
    values.preventDefault();
    setData({
      firstName: values.target.firstName.value,
      lastName: values.target.lastName.value,
      email: values.target.email.value,
      picture: values.target.picture.value,
    });
    Navigate("/");
  };

  //   useEffect(() => {
  //     const userData = JSON.parse(localStorage.getItem("userData"));
  //     if (userData) {
  //       setData(userData);
  //     }
  //   }, []);
  //   console.log(data)

  return (
    <div className="">
      <Formik onSubmit={handleSubmit}>
        <div>
          <p>firstName: {user.firstname}</p>
          <p>lastName: {user.lastname}</p>
          <p>Email: {user.email}</p>
          <p>picture: {user.picture}</p>

          <button
            type="button"
            onClick={() => Navigate('/login')}
             class="border border-gray-400 bg-blue-300 py-1.5 px-20 rounded border-violet-600 my-5 focus:outline-none focus:border-teal-500 " 
          >
            Edit
          </button>
        </div>
      </Formik>
    </div>
  );
}
