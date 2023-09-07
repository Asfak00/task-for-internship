import react from "react";

// librarys
import { BrowserRouter, Routes, Route } from "react-router-dom";

// manually imported components
import HomePage from "./Components/HomePage/HomePage";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Signup/SignUp";
import UserDashboard from "./Components/UserDashboard/Dashboard";
import CreateTask from "./Components/UserDashboard/CreateTask";

function App() {
  // get authentication from local storage
  const authenticate = JSON.parse(localStorage.getItem("isAuthenticated"));

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
