// src/routes/Router.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Main from "./main";
import Home from "../pages/Home/Home";
import Roommate from "../pages/Roommate/Roommate";
import Saved from "../pages/Saved/Saved";
import Chat from "../pages/Chat/Chat";
import Detail from "../pages/Home/detailPage/Detail";

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
      </Routes>
    </Router>
  );
};

export default AppRouter;
