"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Đăng nhập
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Viết bài
          </Link>
          <span className={styles.link} onClick={signOut}>
            Đăng xuất
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Trang chủ</Link>
          <Link href="/">Giới thiệu</Link>
          <Link href="/">Liên Hệ</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Đăng nhập</Link>
          ) : (
            <>
              <Link href="/write">Viết Bài</Link>
              <span className={styles.link}>Đăng xuất</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
