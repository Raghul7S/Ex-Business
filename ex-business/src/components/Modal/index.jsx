import Text from "../Text";
import styles from "./modal.module.css";

export default function Modal({ open, onClose, product }) {
  if (!open || !product) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <Text fs20 margin center>
          {product.title}
        </Text>

        <table className={styles.table}>
          <tbody>
            {Object.entries(product.details).map(([key, value]) => (
              <tr key={key}>
                <td>
                  <Text uppercase textGrey fs16 fontMont>
                    {key}
                  </Text>
                </td>
                <td>
                  <Text fs16 fontMont>
                    {value}
                  </Text>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className={styles.closeBtn} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
