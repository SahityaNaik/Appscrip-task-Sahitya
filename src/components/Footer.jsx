"use client";

import React, { useState } from "react";
import styles from "../styles/Footer.module.css";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

const Footer = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isQuickOpen, setIsQuickOpen] = useState(false);
  const [isFollowOpen, setIsFollowOpen] = useState(false);

  return (
    <footer className={styles.footer}>
      {/* Top Section  */}
      <div className={styles.topSection}>
        <div className={styles.newsletter}>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className={styles.subscribeBox}>
            <input type="email" placeholder="Enter your email..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.contactCurrency}>
          <div className={styles.contactUs}>
            <h4>CONTACT US</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>

          <div className={styles.currency}>
            <h4>CURRENCY</h4>
            <div className={styles.currencySelector}>
              <span className={styles.flag}>
                <Image
                  src="/icons/flag.jpg"
                  alt="Flag"
                  width={20}
                  height={20}
                />
              </span>
              <span className={styles.code}>USD</span>
            </div>
            <p className={styles.currencyInfo}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Bottom Section  */}
      <div className={styles.bottomSection}>
        <div className={styles.left}>
          <h4
            onClick={() => setIsAboutOpen(!isAboutOpen)}
            className={styles.dropdownTitle}
          >
            mettā muse
            <IoIosArrowDown
              className={`${styles.dropdownIcon} ${
                isAboutOpen ? styles.rotate : ""
              }`}
            />
          </h4>
          <ul
            className={`${styles.dropdownContent} ${
              isAboutOpen ? styles.open : ""
            }`}
          >
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className={styles.center}>
          <h4
            onClick={() => setIsQuickOpen(!isQuickOpen)}
            className={styles.dropdownTitle}
          >
            QUICK LINKS
            <IoIosArrowDown
              className={`${styles.dropdownIcon} ${
                isQuickOpen ? styles.rotate : ""
              }`}
            />
          </h4>
          <ul
            className={`${styles.dropdownContent} ${
              isQuickOpen ? styles.open : ""
            }`}
          >
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className={styles.right}>
          <h4
            onClick={() => setIsFollowOpen(!isFollowOpen)}
            className={styles.dropdownTitle}
          >
            FOLLOW US
            <IoIosArrowDown
              className={`${styles.dropdownIcon} ${
                isFollowOpen ? styles.rotate : ""
              }`}
            />
          </h4>
          <div
            className={`${styles.dropdownContent} ${
              isFollowOpen ? styles.open : ""
            }`}
          >
            <div className={styles.socialIcons}>
              <AiFillInstagram className={styles.instagramIcon} />
              <AiFillLinkedin className={styles.linkedinIcon} />
            </div>
          </div>
            
            <hr className={styles.dividerMobile} />
            <h4 className={styles.accepts}>mettā muse ACCEPTS</h4>
            <div className={styles.paymentIcons}>
              <Image
                src="/icons/gpay.png"
                alt="Google Pay"
                width={35}
                height={20}
              />
              <Image
                src="/icons/mastercard.png"
                alt="Mastercard"
                width={35}
                height={20}
              />
              <Image
                src="/icons/paypal.png"
                alt="PayPal"
                width={35}
                height={20}
              />
              <Image src="/icons/amex.png" alt="Amex" width={35} height={20} />
              <Image
                src="/icons/applepay.png"
                alt="Apple Pay"
                width={35}
                height={20}
              />
              <Image
                src="/icons/shoppay.png"
                alt="Shop Pay"
                width={35}
                height={20}
              />
            </div>
          </div>
        </div>
      

      {/* Copyright Section  */}
      <div className={styles.copyright}>
        Copyright © 2023 mettā muse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
