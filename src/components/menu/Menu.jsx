import React from "react";
import styles from "./Menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategory from "../menuCategory/MenuCategory";
const Menu = () => {
  return (
    <div className={styles.container}>
      <MenuPosts />
      <MenuCategory />
    </div>
  );
};

export default Menu;
