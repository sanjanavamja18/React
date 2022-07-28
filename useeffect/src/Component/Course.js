import React from "react";
import { Link, Outlet } from "react-router-dom";

const Courses = () => {
  return (
    <div className="Page">
      <h1>You are in the Courses page!</h1>
      <div className="courses-nav">
        <Link to="/courses/security">Security</Link>
        <Link to="/courses/compile">Compile</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Courses;
