"use client";
import React, { useEffect, useState } from "react";
import styles from "./Comments.module.css";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
const Comments = ({ postId }) => {
  const { status, data: session } = useSession();
  const [comments, setComments] = useState([]);
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(true);
  const fetchComments = async () => {
    const res = await fetch(
      `http://localhost:3000/api/comments?postId=${postId}`
    );
    const data = await res.json();
    if (!res.ok) {
      const error = new Error(data.message);
      throw error;
    }
    setComments(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchComments();
  }, [postId]);
  const handleSubmit = async () => {
    await fetch(`http://localhost:3000/api/comments`, {
      method: "POST",
      body: JSON.stringify({ desc, postId, userId: session.user.id }),
    });
    setDesc("");
    fetchComments();
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bình luận</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            name=""
            id=""
            className={styles.input}
            placeholder="Write a comment"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          ></textarea>
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {comments?.map((comment) => (
          <div className={styles.comment} key={comment._id}>
            <div className={styles.user}>
              <div className={styles.userImageContainer}>
                {comment?.userId.image && (
                  <Image
                    src={comment.userId.image}
                    alt=""
                    width={50}
                    height={50}
                    className={styles.image}
                  />
                )}
              </div>
              <div className={styles.userTextContainer}>
                <span className={styles.username}>
                  {comment?.userId.username}
                </span>
                <span className={styles.date}>{comment?.createAt}</span>
              </div>
            </div>
            <div className={styles.commentText}>{comment?.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
