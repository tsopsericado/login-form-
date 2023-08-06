import { Formik} from "formik";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Profile() {
  const [data, setData] = useState({});
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("userData"));

  console.log(user);
  const handleSubmit = (values) => {
    values.preventDefault();
    setData({
      firstName: values.target.firstName.value,
      lastName: values.target.lastName.value,
      email: values.target.email.value,
      picture: values.target.picture.value,
      password: values.target.password.value,
    });
    Navigate("/");  
  };

    useEffect(() => {
      const userData = JSON.parse(localStorage.getItem("userData"));
      if (userData) {
        setData(userData);
      }
    }, []);
    console.log(data)

  return (
    <div
      className="border-black-200 py-10 h-screen bg-gradient-to-b
        from-blue-200 to-blue-500
    px-30  my-50 rounded-none"
    >
      <Formik onSubmit={handleSubmit}>
        <div className="border-black-100">
          <h1 className="py-2">Hi..! {user.firstname}</h1>
          <p className="py-2">LastName: {user.lastname}</p>
          <p className="py-2">Email: {user.email}</p>
          <p className="py-2">Avatar: {user.picture}</p>

          <button
            type="button"
            onClick={() => navigate("/edit")}
            className="border py-1.5 px-20 rounded border-violet-600 my-5 bg-blue-200 focus:outline-none focus:border-teal-500 "
          >
            Edit
          </button>
        </div>
      </Formik>
    </div>
  );
}
