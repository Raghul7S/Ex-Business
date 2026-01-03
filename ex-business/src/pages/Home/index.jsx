import Products from "../../components/Products";
import Text from "../../components/Text";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <section id="#home">
      <div className={styles.hero}>
        <div className={styles.overlay}>
          <div className="container">
            <div className={styles.content}>
              <Text as="h3" fs16 textGlow weight uppercase>
                Premium Quality Export
              </Text>

              <Text as="h1" fs60 textWhite weight>
                Bringing the World's Finest{" "}
                <Text textGlow fs60>
                  Rice
                </Text>{" "}
                to Your Table
              </Text>

              <Text as="p" fs20 textWhite weight={false} letterSpacing>
                We specialize in exporting premium Basmati and Non-Basmati rice
                varieties globally. Sourced directly from the finest farms,
                ensuring purity, aroma, and taste in every grain.
              </Text>

              <button className={styles.ctaBtn}>Explore Products</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <Text as="h3" fs30 weight textGreen margin>
          Premium Quality Export
        </Text>
        <Text as="h1" fs56 weight margin>
          Basmati Rice & Non Basmati Rice
        </Text>
        <Text as="p" fs16 weight={false} fontMont letterSpacing>
          Vinland Exports provides the finest quality Basmati Rice, known for
          its extra-long grains, rich aroma, and premium quality. Our Basmati
          Rice is perfect for international markets and bulk purchases.
        </Text>
        <br />
        <Text as="p" fs16 weight={false} fontMont letterSpacing>
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
        </Text>
      </div>
      <Products />
    </section>
  );
}
