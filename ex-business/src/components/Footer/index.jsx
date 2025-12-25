import logo from "../../assets/images/vinland_logo.png";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Brand */}
        <div className={styles.col}>
          <img src={logo} alt="ExportCo Logo" className={styles.logo} />
          <p className={styles.text}>
            Delivering premium quality rice from the heart of India to the world
            since 1995.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.col}>
          <h4 className={styles.heading}>Quick Links</h4>
          <ul className={styles.list}>
            <li>Home</li>
            <li>Products</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Products */}
        <div className={styles.col}>
          <h4 className={styles.heading}>Products</h4>
          <ul className={styles.list}>
            <li>1121 Basmati</li>
            <li>Sona Masoori</li>
            <li>Jasmine Rice</li>
            <li>Brown Rice</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className={styles.col}>
          <h4 className={styles.heading}>Newsletter</h4>
          <div className={styles.newsletter}>
            <input type="email" placeholder="Your email" />
            <button>➤</button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <p>© 2023 Golden Harvest Exports. All rights reserved.</p>

        <div className={styles.socials}>
          <span>f</span>
          <span>t</span>
          <span>in</span>
          <span>ig</span>
        </div>
      </div>
    </footer>
  );
}
