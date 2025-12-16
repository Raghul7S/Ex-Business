import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import logo from "../../../public/assets/images/vinland_logo.png";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container">
        <a className={styles.brand} href="/">
          <img src={logo} alt="ExportCo Logo" className={styles.logo} />
        </a>

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
              <a className={`nav-link ${styles.link}`} href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className={`nav-link ${styles.link}`} href="#products">
                Products
              </a>
            </li>

            <li className="nav-item">
              <a className={`nav-link ${styles.link}`} href="#service">
                Service
              </a>
            </li>

            <li className="nav-item">
              <a className={`nav-link ${styles.link}`} href="#certificates">
                Certificates
              </a>
            </li>

            <li className={`nav-item ${styles.contactBtn}`}>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
