import React from "react";
import styles from "./certification.module.css";

const certificates = [
  {
    name: "FSSAI",
    image: "../../assets/images/fssai.png",
  },
  {
    name: "APEDA",
    image: "../../assets/images/APEDA.png",
  },
  {
    name: "IEC",
    image: "../../assets/images/iec.png",
  },
  {
    name: "GST",
    image: "../../assets/images/fssai.png",
  },
  {
    name: "ISO",
    image: "../../assets/images/fssai.png",
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
            <p>{cert.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
