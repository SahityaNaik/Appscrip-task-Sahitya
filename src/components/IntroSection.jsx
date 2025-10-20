import React from "react";
import styles from "../styles/IntroSection.module.css";

const IntroSection = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.breadcrumb}>
        <span className={styles.home}>HOME</span> |{" "}
        <span className={styles.shop}>SHOP</span>
      </div>
      <h1 className={styles.title}>DISCOVER OUR PRODUCTS</h1>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
        praesentium in veritatis obcaecati fugit eaque quidem dignissimos
        numquam veniam quos?
      </p>
    </section>
  );
};

export default IntroSection;
