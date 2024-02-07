"use client";
import React, { useEffect, useState } from "react";
import styles from "./CardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
const CardList = ({ page, cat }) => {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(
        `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`
      );
      const data = await res.json();
      console.log(data);
      setPosts(data.posts);
      setCount(data.count);
    };
    fetchPosts();
  }, [page, cat]);
  console.log(posts);
  const POST_PER_PAGE = 3;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bài viết gần đây </h1>
      <div className={styles.posts}>
        {posts?.map((post) => (
          <Card key={post._id} post={post} />
        ))}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
};

export default CardList;
