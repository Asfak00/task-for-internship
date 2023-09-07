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
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/create-task" element={<CreateTask />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
