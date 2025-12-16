import styles from "./Home.module.css";

export default function Home() {
  return (
    <section id="#home">
      <div className={styles.hero}>
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
      </div>
      <div className={styles.about}>
        <span className={styles.rice_highlight}>Premium Quality Export</span>
        <h1 className={styles.rice_heading}>Basmati Rice</h1>
        <span className={styles.rice_description}>
          Vinland Exports provides the finest quality Basmati Rice, known for
          its extra-long grains, rich aroma, and premium quality. Our Basmati
          Rice is perfect for international markets and bulk purchases.
        </span>
        <br />
        <span className={styles.rice_description}>
          We Supply Basmati Rice to our Clients. Basmati, Meaning "Queen of
          Fragrance" is a Variety of Long Grain Rice. Basmati Rice is famous for
          its Fragrance and Good Aroma. Basmati is a variety of long grain rice,
          which is traditionally from India. The variety of Rice is grown in
          North India. The Basmati Rice are available in a variety of packs that
          are resistant to moisture content and that can retain the aroma for a
          time period. Indian Basmati Rice is a perfect treat for the World for
          it's quality and aroma. We at Graceferro exports Premium Quality
          Products that match International Standards. The Quality and Packing
          is done as per Customer Specification.
        </span>
      </div>
    </section>
  );
}
