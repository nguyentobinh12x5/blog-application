import React from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";
const NavBar = () => {
  return (
    <header className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="twitter" width={24} height={24} />
        <Image src="/youtube.png" alt="search" width={24} height={24} />
      </div>
      <div className={styles.logo}>Jerome Blog</div>
      <nav className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Trang chủ
        </Link>
        <Link href="/about" className={styles.link}>
          Giới thiệu
        </Link>
        <Link href="/contact" className={styles.link}>
          Liên hệ
        </Link>
        <AuthLinks />
      </nav>
    </header>
  );
};

export default NavBar;
