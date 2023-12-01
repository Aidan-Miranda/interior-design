import styles from "../app/page.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

interface ColumnProps {
  images: any[];
  y?: any;
}

export const Column = ({ images, y = 0 }: ColumnProps) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image src={src} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};

export const ColumnStatic = ({ images }: ColumnProps) => {
  return (
    <div className={styles.columnStatic}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image src={src} alt="image" fill />
          </div>
        );
      })}
    </div>
  );
};
