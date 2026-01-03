import React, { useState } from "react";

import { products } from "../../utils/data";
import styles from "./product.module.css";
import ProductCard from "./Card/ProductCard";
import Text from "../Text";

export default function Products({ marginTop = false }) {
  const categories = ["all", ...Object.keys(products)];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? Object.values(products).flatMap((cat) => cat.items)
      : products[activeCategory].items;

  return (
    <div id="products">
      <div
        className={styles.products_header}
        style={{ marginTop: marginTop === true ? "3rem" : undefined }}
      >
        <Text as="h3" fs30 weight textGreen margin>
          Our Products
        </Text>
        <Text as="p" fs16 weight={false} fontMont letterSpacing>
          Carefully selected and processed Indian Basmati & Non-Basmati rice to
          meet international export regulations, ensuring purity, consistency,
          and superior grain quality.
        </Text>
      </div>

      <div className={styles.tabs_wrapper}>
        <div className={styles.selectedCategory}>
          <Text fs16 weight textGrey>
            Showing:{" "}
            <Text fs16 weight textBlack>
              {activeCategory.replace("-", " ").toUpperCase()}
            </Text>
          </Text>
        </div>

        <div className={styles.tabs}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.tab} ${
                activeCategory === category ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category === "all"
                ? "ALL"
                : products[category].label.toUpperCase()}
            </button>
          ))}
        </div>

        {/* MOBILE DROPDOWN */}
        <select
          className={styles.tabsDropdown}
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === "all"
                ? "ALL"
                : products[category].label.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <section className={styles.grid}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
          />
        ))}
      </section>
    </div>
  );
}
