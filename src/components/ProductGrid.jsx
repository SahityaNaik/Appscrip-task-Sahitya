"use client";

import React, { useState } from "react";
import styles from "../styles/ProductGrid.module.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Leather Handbag",
    image: "/images/leather-handbag.jpg",
    price: "$120",
    isNew: true,
  },
  {
    id: 2,
    name: "Kids Toy Set",
    image: "/images/kids-toy-set.jpg",
    price: "$35",
  },
  {
    id: 3,
    name: "Men's Cap",
    image: "/images/mens-cap.jpg",
    price: "$25",
    outOfStock: true,
  },
  {
    id: 4,
    name: "Women's Sunglasses",
    image: "/images/womens-sunglasses.jpg",
    price: "$80",
  },
  {
    id: 5,
    name: "Leather Belt",
    image: "/images/leather-belt.jpg",
    price: "$45",
  },
  {
    id: 6,
    name: "Teddy Bear",
    image: "/images/teddy-bear.jpg",
    price: "$30",
  },
  {
    id: 7,
    name: "Canvas Backpack",
    image: "/images/canvas-bagpack.jpg",
    price: "$70",
    isNew: true,
  },
  {
    id: 8,
    name: "Toy Train Set",
    image: "/images/toy-train-set.jpg",
    price: "$40",
  },
  {
    id: 9,
    name: "Men's Watch",
    image: "/images/mens-watch.jpg",
    price: "$150",
  },
  {
    id: 10,
    name: "Women's Scarf",
    image: "/images/womens-scarp.jpg",
    price: "$35",
  },
  {
    id: 11,
    name: "Leather Wallet",
    image: "/images/leather-wallet.jpg",
    price: "$60",
  },
  {
    id: 12,
    name: "Stuffed Elephant",
    image: "/images/stuffed-elephant.jpg",
    price: "$28",
  },
];

const ProductGrid = ({ isFilterOpen }) => {
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = (id) => {
    setLikedProducts((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div
      className={`${styles.gridContainer} ${
        isFilterOpen ? styles.withFilter : styles.noFilter
      }`}
    >
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <div className={styles.imageWrapper}>
            {product.isNew && (
              <span className={styles.newTag}>NEW PRODUCT</span>
            )}
            {product.outOfStock && (
              <span className={styles.outOfStockTag}>OUT OF STOCK</span>
            )}
            <img
              src={product.image}
              alt={product.name}
              className={styles.productImage}
            />
          </div>

          <div className={styles.info}>
            <h3 className={styles.name}>{product.name}</h3>
            <div className={styles.bottomRow}>
              <span className={styles.price}>{product.price}</span>

              {/* Toggle heart icon */}
              <div
                onClick={() => toggleLike(product.id)}
                className={styles.heartWrapper}
              >
                {likedProducts.includes(product.id) ? (
                  <FaHeart
                    className={styles.heartIcon}
                    style={{ color: "#ff4d4d" }}
                  />
                ) : (
                  <FaRegHeart className={styles.heartIcon} />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
