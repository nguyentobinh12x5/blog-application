import React from "react";
import styles from "./MenuPosts.module.css";
import Link from "next/link";
import Image from "next/image";
const MenuPosts = () => {
  return (
    <div>
      <h2 className={styles.subtitle}>What's hot?</h2>
      <h1 className={styles.title}>Phổ biến nhất</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              fill
              className={styles.image}
              alt="container"
            />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            </h3>
            <div className={styles.detail}>
              <span className={styles.date}>11.02.2024 - </span>
              <span className={styles.username}>Jerome Nguyen</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MenuPosts;
