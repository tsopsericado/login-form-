import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Edit from "./pages/Edit";


function App() {
  return (
    <div className="App">
      <div>
        <ul className="statc" class="bg-blue-100 flex-row-reverse px-10 flex space-x-3">
          <li class="py-4 px-4 text-xl italic">
            <a href="/login">Login</a>
          </li>
          <li class="py-4 px-4 text-xl italic">
            <a href="/profile">Profile</a>
          </li>
          <li class="py-4 px-4 text-xl italic">
            <a href="/edit">Edit Profile</a>
          </li>
        </ul>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
