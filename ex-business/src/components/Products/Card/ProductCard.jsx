import React from "react";
import { FiArrowRight } from "react-icons/fi";

import styles from "./productCard.module.css";
import Text from "../../Text";

export default function ProductCard({ title, image }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </div>

      <div className={styles.content}>
        <div className={styles.titleRow}>
          <Text as="p" fs14 fontMont className={styles.title}>
            {title}
          </Text>

          <FiArrowRight className={styles.arrow} />
        </div>
      </div>
    </div>
  );
}
