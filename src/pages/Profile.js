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
    <div className="bg-gray-100 py-10 ">
      <Formik onSubmit={handleSubmit}>
        <div className="border-green-100">
          <p className="py-2">firstName: {user.firstname}</p>
          <p className="py-2">lastName: {user.lastname}</p>
          <p className="py-2">Email: {user.email}</p>
          <p className="py-2">picture: {user.picture}</p>

          <button
            type="button"
            onClick={() => navigate("/login")}
            class="border border-gray-400 py-1.5 px-20 rounded border-violet-600 my-5 bg-blue-100 focus:outline-none focus:border-teal-500 "
          >
            Edit
          </button>
        </div>
      </Formik>
    </div>
  );
}
