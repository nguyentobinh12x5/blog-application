import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={post.img}
          fill
          className={styles.image}
          alt="conatianer"
        ></Image>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{post.createdAt}</span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>{post.title}</h1>
        </Link>
        <p
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: post.desc.substring(0, 60) }}
        />
        <Link href={`/posts/${post._id}`} className={styles.link}>
          Đọc thêm
        </Link>
      </div>
    </div>
  );
};

export default Card;
