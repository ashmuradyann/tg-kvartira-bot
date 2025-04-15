import React, { useState } from "react";
import clsx from "clsx";

import sortIcon from "../../images/icons/sort.png";

import styles from "./ad-list.module.css";

const sortValues = [
  "По умолчанию",
  "По цене - сначала дешевле",
  "По цене - сначала дороже",
  "По цене за м² - сначала дешевле",
  "По цене за м² - сначала дороже",
  "По общей площади - сначала меньше",
  "По общей площади - сначала больше",
  "По дате добавления - сначала старые",
  "По дате добавления - сначала новые",
];

const Sort: React.FC<any> = ({
  apartmentCount,
  sortByDefault,
  sortByPrice,
  sortBySquarePrice,
  sortBySquare,
  sortByDate,
}) => {
  const [sortValue, setSortValue] = useState<any>("По умолчанию");
  const [isSortOpen, setSortIsOpen] = useState<any>(false);

  const setSortValueFunc = (value: string) => {
    setSortValue(value);
    switch (value) {
      case "По умолчанию":
        sortByDefault();
        break;
      case "По цене - сначала дешевле":
        sortByPrice("cheap");
        break;
      case "По цене - сначала дороже":
        sortByPrice("expensive");
        break;
      case "По цене за м² - сначала дешевле":
        sortBySquarePrice("cheap");
        break;
      case "По цене за м² - сначала дороже":
        sortBySquarePrice("expensive");
        break;
      case "По общей площади - сначала меньше":
        sortBySquare("cheap");
        break;
      case "По общей площади - сначала больше":
        sortBySquare("expensive");
        break;
      case "По дате добавления - сначала старые":
        sortByDate("fromOldest");
        break;
      case "По дате добавления - сначала новые":
        sortByDate("fromNewest");
        break;
    }
    setSortIsOpen(false);
  };

  return (
    <div className={clsx(styles.sort, "flex-between")}>
      <p>{apartmentCount} квартир</p>
      <img
        className={clsx(sortValue !== "По умолчанию" && styles.active)}
        src={sortIcon}
        alt="sort-icon"
        onClick={() => setSortIsOpen((prev: any) => !prev)}
      />
      {isSortOpen && (
        <div className={clsx(styles.options, "flex-column")}>
          {sortValues.map((el) => (
            <p
              className={clsx(el === sortValue && styles.active)}
              onClick={() => setSortValueFunc(el)}
            >
              {el}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sort;
