import React from "react";
import styles from "./Featured.module.css";
import Image from "next/image";
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Xin chào, mình là Bình đây!</b> Cùng đọc và lắng nghe những câu
        chuyện của mình nhé.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="Story" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            unde facere mollitia recusandae nisi tempore ipsum, voluptas
            eligendi sit facilis minima dolore quis voluptatem quidem?
          </p>
          <button className={styles.button}>Đọc thêm</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
