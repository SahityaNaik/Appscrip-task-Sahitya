"use client";

import React, { useState } from "react";
import styles from "../styles/FilterSidebar.module.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const filtersData = [
  { title: "IDEAL FOR", options: ["Men", "Women", "Baby & Kids"] },
  { title: "OCCASION", options: ["Casual", "Formal", "Party"] },
  { title: "WORK", options: ["Office", "Remote"] },
  { title: "FABRIC", options: ["Cotton", "Silk", "Denim"] },
  { title: "SEGMENT", options: ["Premium", "Standard"] },
  { title: "SUITABLE FOR", options: ["Hot Weather", "Cold Weather", "Rainy Season"],},
  { title: "RAW MATERIALS", options: ["Cotton", "Polyester"] },
  { title: "PATTERN", options: ["Solid", "Print"] },
];

const FilterSidebar = ({ isFilterOpen, onClose }) => {
  const [expanded, setExpanded] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleCheckboxChange = (filterTitle, option) => {
    setSelectedOptions((prev) => {
      const current = prev[filterTitle] || [];
      const updated = current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option];
      return { ...prev, [filterTitle]: updated };
    });
  };

  const selectAll = (filterTitle, options) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [filterTitle]: [...options],
    }));
  };

  const unselectAll = (filterTitle) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [filterTitle]: [],
    }));
  };

  return (
    <>
      {isFilterOpen && (
        <aside
          className={`${styles.sidebar} ${
            isFilterOpen ? styles.open : styles.closed
          }`}
        >
          <div className={styles.customizable}>
            <input type="checkbox" id="customizable" />
            <label htmlFor="customizable">CUSTOMIZABLE</label>
          </div>

          <div className={styles.filters}>
            {filtersData.map((filter, index) => (
              <div key={filter.title} className={styles.title}>
                <div
                  className={styles.filterHeader}
                  onClick={() => toggleExpand(index)}
                >
                  <div className={styles.filterHeaderDefault}>
                    <div>{filter.title}</div>
                    <div
                      className={styles.allOption}
                      onClick={(e) => {
                        e.stopPropagation();
                        selectAll(filter.title, filter.options);
                      }}
                    >
                      All
                    </div>
                  </div>
                  {expanded === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>

                {expanded === index && (
                  <ul className={styles.optionsList}>
                    <li>
                      <span
                        className={styles.unselectAll}
                        onClick={() => unselectAll(filter.title)}
                      >
                        Unselect All
                      </span>
                    </li>
                    {filter.options.map((option) => (
                      <li key={option}>
                        <input
                          type="checkbox"
                          id={`${filter.title}-${option}`}
                          checked={
                            selectedOptions[filter.title]?.includes(option) ||
                            false
                          }
                          onChange={() =>
                            handleCheckboxChange(filter.title, option)
                          }
                        />
                        <label htmlFor={`${filter.title}-${option}`}>
                          {option}
                        </label>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </aside>
      )}
    </>
  );
};

export default FilterSidebar;
