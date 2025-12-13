import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.overlay}>
        <div className="container">
          <div className={styles.content}>
            <span className={styles.smallText}>Premium Quality Export</span>

            <h1 className={styles.title}>
              Bringing the World's Finest{" "}
              <span style={{ color: "#d4af37" }}>Rice</span> to Your Table
            </h1>

            <p className={styles.description}>
              We specialize in exporting premium Basmati and Non-Basmati rice
              varieties globally. Sourced directly from the finest farms,
              ensuring purity, aroma, and taste in every grain.
            </p>

            <button className={styles.ctaBtn}>Explore Products</button>
          </div>
        </div>
      </div>
    </section>
  );
}
