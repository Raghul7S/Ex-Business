import React from "react";
import styles from "./certification.module.css";

const certificates = [
  {
    name: "FSSAI",
    department: "abcd",
    image: "https://raghul7s.github.io/PortfolioApp/assets/Me.jpg",
  },
  {
    name: "GST",
    department: "abcd",
    image: "https://raghul7s.github.io/PortfolioApp/assets/Me.jpg",
  },
  {
    name: "IEC",
    department: "abcd",
    image: "https://raghul7s.github.io/PortfolioApp/assets/Me.jpg",
  },
  {
    name: "APEDA",
    department: "abcd",
    image: "https://raghul7s.github.io/PortfolioApp/assets/Me.jpg",
  },
  {
    name: "ISO",
    department: "abcd",
    image: "https://raghul7s.github.io/PortfolioApp/assets/Me.jpg",
  },
];

export default function Certification() {
  return (
    <section id="certificates">
      <div className={styles.certification}>
        <span className={styles.certification_heading}>Our Certifications</span>
        <span className={styles.certification_description}>
          We follow globally recognized quality and safety benchmarks, with our
          dedication to excellence validated by internationally respected
          certifying bodies.
        </span>
      </div>

      {/* Scrollable cards */}
      <div className={styles.certificatesWrapper}>
        {certificates.map((cert, index) => (
          <div key={index} className={styles.certificateCard}>
            <img src={cert.image} alt={cert.name} />
            <p>{cert.department}</p>
            <p>{cert.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
