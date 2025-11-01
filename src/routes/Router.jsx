// src/routes/Router.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Main from "./main";
import Home from "../pages/Home/Home";
import Roommate from "../pages/Roommate/Roommate";
import Saved from "../pages/Saved/Saved";
import Chat from "../pages/Chat/Chat";
import Detail from "../pages/Home/detailPage/Detail";
import Profile from "../pages/Home/Profile/Profile";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import EmailVerification from "../pages/Auth/EmailVerification";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Main layout wraps all pages */}
        <Route path="/" element={<Main />}>
          <Route index element={<Navigate to="/home" replace />} /> {/* ✅ Default route */}
          <Route path="home" element={<Home />} />
          <Route path="roommates" element={<Roommate />} />
          <Route path="saved" element={<Saved />} />
          <Route path="chat" element={<Chat />} />
        </Route>
          <Route path="/details/:id" element={<Detail />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="emailVerification" element={<EmailVerification />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
