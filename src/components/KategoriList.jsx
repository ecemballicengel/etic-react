import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/GlobalContext";
import { Link, useNavigate } from "react-router-dom";

function KategoriList() {
  const [localCategory, setLocalCategory] = useState([]);
  const { categories } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    setLocalCategory(categories);
  });
  return (
    <div>
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle text-white"
          to="/"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Kategoriler
        </Link>
        <ul className="dropdown-menu">
          {localCategory.map((data) => (
            <button
              className="nav-link"
              onClick={() => navigate(`category/${data}`)}
            >
              {data}
            </button>
          ))}
        </ul>
      </li>
    </div>
  );
}

export default KategoriList;
