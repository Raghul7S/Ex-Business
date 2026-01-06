import React, { useState, useEffect } from "react";

import ProductCard from "./Card/ProductCard";
import Text from "../Text";
import { products } from "../../utils/data";
import styles from "./product.module.css";
import Modal from "../Modal";

export default function Products({ marginTop = false }) {
  const ITEMS_PER_LOAD = 12;
  const categories = ["all", ...Object.keys(products)];
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setVisibleCount(ITEMS_PER_LOAD);
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;

    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsAnimating(false);
    }, 300);
  };

  const categoryCounts = {
    all: Object.values(products).reduce(
      (sum, cat) => sum + cat.items.length,
      0
    ),
    ...Object.fromEntries(
      Object.entries(products).map(([key, value]) => [key, value.items.length])
    ),
  };

  const filteredProducts =
    activeCategory === "all"
      ? Object.values(products).flatMap((cat) => cat.items)
      : products[activeCategory].items;

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const ToggleModal = ({ product }) => {
    if (!open || !product) return null;
  };

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
            <div className={styles.tooltipWrapper} key={category}>
              <button
                className={`${styles.tab} ${
                  activeCategory === category ? styles.active : ""
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category === "all"
                  ? "ALL"
                  : products[category].label.toUpperCase()}
              </button>

              <span className={styles.tooltip}>
                {categoryCounts[category]} items
              </span>
            </div>
          ))}
        </div>

        {/* MOBILE DROPDOWN */}
        <select
          className={styles.tabsDropdown}
          value={activeCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
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

      <section
        className={`${styles.grid} ${
          isAnimating ? styles.fadeOut : styles.fadeIn
        }`}
      >
        {visibleProducts.map((product) => (
          <div key={product.id} className={styles.cardWrapper}>
            <ProductCard
              title={product.title}
              image={product.image}
              product={product}
              onMore={setSelectedProduct}
            />
          </div>
        ))}
      </section>
      {filteredProducts.length > ITEMS_PER_LOAD &&
        visibleCount < filteredProducts.length && (
          <div className={styles.loadMoreWrapper}>
            <button
              className={styles.loadMoreBtn}
              onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_LOAD)}
            >
              Load More
            </button>
          </div>
        )}
      <Modal
        open={ToggleModal}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
