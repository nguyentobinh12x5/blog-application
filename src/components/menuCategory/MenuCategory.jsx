import React from "react";
import Link from "next/link";
import styles from "./MenuCategory.module.css";
const MenuCategory = () => {
  return (
    <div>
      <h2 className={styles.subtitle}>Khám phá theo chủ đề</h2>
      <h1 className={styles.title}>Danh mục</h1>
      <div className={styles.categories}>
        <Link href="/" className={`${styles.category} ${styles.style}`}>
          Style
        </Link>
        <Link href="/" className={`${styles.category} ${styles.travel}`}>
          Travel
        </Link>
        <Link href="/" className={`${styles.category} ${styles.coding}`}>
          Coding
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
