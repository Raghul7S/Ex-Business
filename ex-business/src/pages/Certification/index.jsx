import React from "react";
import styles from "./certification.module.css";

import fssai from "../../assets/images/fssai.png";
import apeda from "../../assets/images/APEDA.png";
import iec from "../../assets/images/iec.png";
import Text from "../../components/Text";

const certificates = [
  {
    name: "FSSAI",
    image: fssai,
  },
  {
    name: "APEDA",
    image: apeda,
  },
  {
    name: "IEC",
    image: iec,
  },
  {
    name: "GST",
    image: fssai,
  },
  {
    name: "ISO",
    image: fssai,
  },
];

export default function Certification() {
  return (
    <section id="certificates">
      <div className={styles.certification}>
        <Text fs30 weight textGreen margin>
          Our Certifications
        </Text>
        <Text fs16 weight={false} fontMont>
          We follow globally recognized quality and safety benchmarks, with our
          dedication to excellence validated by internationally respected
          certifying bodies.
        </Text>
      </div>

      <div className={styles.certificatesWrapper}>
        {certificates.map((cert, index) => (
          <div key={index} className={styles.certificateCard}>
            <img src={cert.image} alt={cert.name} />
            <Text fs14 weight={false}>
              {cert.name}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}
