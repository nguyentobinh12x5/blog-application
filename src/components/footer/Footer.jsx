import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src="/AvatarBlog.jpg"
            width={50}
            height={50}
            alt="nguyentobinh"
            className={styles.logoImage}
          />
          <h1 className={styles.logoText}>Jerome Blog</h1>
        </div>
        <p className={styles.desc}>
          Cám ơn mọi người dã ghé thăm blog của mình. Mình là Bình, sinh viên
          năm 3 ngành Thương Mại Điện Tử, Đại Học UEH. Mình không thích viết
          lách tuy nhiên muốn chia sẻ kiến thức và cuộc sống của mình với mọi
          người. Hy vọng những bài viết của mình sẽ có ích tới mọi người.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" width={18} height={18} />
          <Image src="/instagram.png" width={18} height={18} />
          <Image src="/tiktok.png" width={18} height={18} />
          <Image src="/youtube.png" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Liên kết</span>
          <Link href="/">Trang chủ</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Thông tin</Link>
          <Link href="/">Liên hệ</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Liên hệ</span>
          <Link href="/">Trang chủ</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Thông tin</Link>
          <Link href="/">Liên hệ</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Liên hệ</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Linkedin</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Github</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
