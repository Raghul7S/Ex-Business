import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container">
        {/* Brand */}
        <a className={`navbar-brand ${styles.brand}`} href="/">
          ExportCo
        </a>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
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

            <li className="nav-item">
              <a href="#contact" className={styles.contactBtn}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
