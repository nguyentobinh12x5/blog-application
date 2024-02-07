"use client";
import React, { useEffect, useState } from "react";
import styles from "./CategoryList.module.css";
import Link from "next/link";
import Image from "next/image";
const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("http://localhost:3000/api/categories");
      const data = await res.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.titleCategories}>Danh mục phổ biến</h1>
      <div className={styles.categories}>
        {categories.map((category) => (
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.style}`}
            key={category._id}
          >
            <Image
              src={category.img}
              width={32}
              height={32}
              className={styles.image}
              alt={styles.title}
            />
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
