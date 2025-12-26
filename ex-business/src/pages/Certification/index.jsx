import React from "react";

import fssai from "../../assets/images/fssai.png";
import apeda from "../../assets/images/APEDA.png";
import iec from "../../assets/images/iec.png";
import iso from "../../assets/images/iso.png";
import gst from "../../assets/images/gst.png";

import Text from "../../components/Text";
import styles from "./certification.module.css";

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
    image: gst,
  },
  {
    name: "ISO",
    image: iso,
  },
];

export default function Certification() {
  return (
    <section id="certificates">
      <div className={styles.certification}>
        <Text as="h3" fs30 weight textGreen margin>
          Our Certifications
        </Text>
        <Text as="p" fs16 weight={false} fontMont>
          We follow globally recognized quality and safety benchmarks, with our
          dedication to excellence validated by internationally respected
          certifying bodies.
        </Text>
      </div>

      <div className={styles.certificatesWrapper}>
        {certificates.map((cert, index) => (
          <div key={index} className={styles.certificateCard}>
            <img src={cert.image} alt={cert.name} />
            <Text as="h4" fs14 weight={false}>
              {cert.name}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}
