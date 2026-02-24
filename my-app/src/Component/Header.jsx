import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Дом
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/docs">
                Документы
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/examples">
                Примеры
              </Link>
            </li>

          </ul>

          <ul className="navbar-nav">

            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>

          </ul>

          <a
            className="btn btn-primary ms-3"
            href="#"
          >
            Скачать
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Header;