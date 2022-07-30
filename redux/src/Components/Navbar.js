import React from "react";
import { useSelector } from "react-redux/es/exports";

const Navbar = () => {
  const amount = useSelector((state) => state.amount);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            State Bank Of India
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <button disabled={true} className="btn btn-outline-success">
              Your Balance : {amount}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
