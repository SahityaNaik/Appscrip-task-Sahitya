"use client";

import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiAccountCircleLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className={styles.navbar}>
      {/* Top Section */}
      <div className={styles.topRow}>
        <div className={styles.left}>
          {/* Hamburger appears only on mobile */}
          <div
            className={styles.hamburger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <RxHamburgerMenu />
          </div>

          <Image
            src="/images/logo.png"
            alt="Logo"
            width={25}
            height={25}
            className={styles.logoImage}
          />
        </div>

        <div className={styles.center}>
          <h1 className={styles.logoText}>LOGO</h1>
        </div>

        <div className={styles.right}>
          <div className={styles.iconGroup}>
            <span>
              <IoSearch />
            </span>
            <span>
              <FaRegHeart />
            </span>
            <span>
              <HiOutlineShoppingBag />
            </span>
            <span className={styles.accountIcon}>
              <RiAccountCircleLine />
            </span>
          </div>

          <select className={styles.languageSelect}>
            <option>ENG</option>
            <option>HIN</option>
          </select>
        </div>
      </div>

      {/* Bottom Section */}
      <nav className={`${styles.menuBar} ${isMenuOpen ? styles.showMenu : ""}`}>
        <ul>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
