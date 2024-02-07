"use client";
import React, { useEffect, useState } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";
import "react-quill/dist/quill.bubble.css";
import ReactQuill from "react-quill";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/ultils/firebase";
const WritePage = () => {
  const { status, data: session } = useSession();
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "unauthenticated") {
    router.push("/");
  }
  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }
  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/posts/new", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc: value,
          img: media,
          urlTitle: slugify(title),
          userId: session.user.id,
        }),
      });
      const data = await res.json();
      router.push(`/posts/${data._id}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/image.png" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Viết câu chuyện của bạn tại đây!!!"
          className={styles.textArea}
        />
        {media && (
          <Image
            src={media}
            alt="up load file"
            width={100}
            height={100}
          ></Image>
        )}
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Đăng bài
      </button>
    </div>
  );
};

export default WritePage;
