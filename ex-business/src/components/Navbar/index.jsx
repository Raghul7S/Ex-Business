import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

import logo from "../../assets/images/vinland_logo.png";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container">
        <Link to="/" className={styles.brand}>
          <img
            src={logo}
            alt="Vinland Export Company Logo"
            className={styles.logo}
          />
        </Link>

        <button
          className={styles.toggler}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>

        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${styles.link}`}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/products" className={`nav-link ${styles.link}`}>
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/services" className={`nav-link ${styles.link}`}>
                Service
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/certifications" className={`nav-link ${styles.link}`}>
                Certificates
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${styles.link}`}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
