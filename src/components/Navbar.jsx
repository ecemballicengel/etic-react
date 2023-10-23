import { getQueriesForElement } from "@testing-library/react";
import React, { useContext } from "react";
import Coursel from "./Coursel";
import KategoriList from "./KategoriList";
import { Link } from "react-router-dom";
import { AppContext } from "../context/GlobalContext";
function Navbar() {
  const { handleSearchChange, sepettekiUrunlerToplami, favoriler } =
    useContext(AppContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="#">
            E-Tic
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  Anasayfa
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Urunler
                </Link>
              </li>
              <KategoriList />
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleSearchChange}
              />
              {/* <button
                className="btn btn-outline-success text-white"
                type="submit"
              >
                Search
              </button> */}
            </form>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ms-auto">
                <Link className="nav-link text-white" to="/favoriler">
                  <i className="fa-solid fa-heart" style={{ color: "white" }} />{" "}
                  {/* {favoriler.length} */}
                </Link>
              </li>
              <li className="nav-item ms-auto">
                <Link className="nav-link text-white" to="/sepet">
                  <i className="fa-solid fa-cart-shopping" /> (
                  {sepettekiUrunlerToplami})
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
