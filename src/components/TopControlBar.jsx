"use client";

import React, { useState } from "react";
import styles from "../styles/TopControlBar.module.css";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const TopControlBar = ({ isFilterOpen, setIsFilterOpen }) => {
  const [sortOption, setSortOption] = useState("RECOMMENDED");

  const options = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE: HIGH TO LOW",
    "PRICE: LOW TO HIGH",
  ];

  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <span className={styles.itemsCount}>3435 ITEMS</span>

        {/* Toggle Filter logic  */}
        <button
          className={styles.filterToggle}
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          {isFilterOpen ? (
            <MdOutlineKeyboardArrowLeft className={styles.arrowIcon} />
          ) : (
            <MdOutlineKeyboardArrowRight className={styles.arrowIcon} />
          )}
          {isFilterOpen ? "HIDE FILTER" : "SHOW FILTER"}
        </button>
      </div>

      <div className={styles.right}>
        <select
          className={styles.sortSelect}
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option === sortOption ? "✔ " : ""}
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Mobile view */}
      <div className={styles.mobileBar}>
        <span
          className={styles.mobileFilter}
          onClick={() => setIsFilterOpen(true)}
        >
          FILTER
        </span>
        <span className={styles.mobileDivider}></span>
        <select
          className={styles.mobileSort}
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TopControlBar;
