import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Dashboard from "./admin/Dashboard";
import UsersController from "./admin/UsersController";
import BookController from "./admin/BookController";
import Addbook from "./admin/Addbook";
import Editbook from "./admin/Editbook";
import Allbooks from "./user/Allbooks";
import Specificbook from "./user/Specificbook";
import Profile from "./user/Profile";




function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/userctrl" element={<UsersController/>}/>
        <Route path="/bookctrl" element={<BookController/>}/>
        <Route path="/addbooks" element={<Addbook/>}/>
        <Route path="/editbooks/:id" element={<Editbook/>}/>
        <Route path="/allbooks" element={<Allbooks/>}/>
        <Route path="/specificbook/:id" element={<Specificbook/>}/>
        <Route path="/profile" element={<Profile/>}/>
        

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
