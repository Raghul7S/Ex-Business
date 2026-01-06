import React, { useState } from "react";

import Text from "../../Text";
import styles from "./productCard.module.css";

export default function ProductCard({ title, image, product, onMore }) {
  const [isFlipped, setIsFlipped] = useState(false);

  console.log(product);

  return (
    <div
      className={styles.cardContainer}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`${styles.cardInner} ${isFlipped ? styles.flipped : ""}`}>
        {/* FRONT SIDE */}
        <div className={`${styles.card} ${styles.cardFront}`}>
          <div className={styles.imageWrapper}>
            <img src={image} alt={title} className={styles.image} />
          </div>
          <Text as="p" fs14 fontMont className={styles.title}>
            {title}
          </Text>
        </div>

        {/* BACK SIDE */}
        <div className={`${styles.card} ${styles.cardBack}`}>
          <div className={styles.content}>
            <Text as="p" fs14 fontMont className={styles.title}>
              Name: {title}
            </Text>
            <button
              className={styles.details_btn}
              onClick={() => onMore(product)}
            >
              More details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
