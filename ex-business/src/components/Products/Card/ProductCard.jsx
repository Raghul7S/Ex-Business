import React from "react";
import styles from "./productCard.module.css";
import Text from "../../Text";

export default function ProductCard({ title, image }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </div>

      <div className={styles.content}>
        <Text as="p" fs14 fontMont className={styles.title}>
          {title}
        </Text>
      </div>
    </div>
  );
}
