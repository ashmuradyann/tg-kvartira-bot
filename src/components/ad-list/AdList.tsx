import React, { useState } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";

import Sort from "./Sort";

import styles from "./ad-list.module.css";
import Card from "./Card";

const AdList: React.FC = (): any => {
  const { city, adList }: any = useSelector(
    (state: any) => state.adList
  );

  const [adListToShow, setAdListToShow] = useState(adList);

  const sortByDefault = () => {
    setAdListToShow(adList);
  };

  const sortByPrice = (sortType: string) => {
    setAdListToShow(
      [...adList].sort((a: any, b: any): any =>
        sortType === "cheap"
          ? Number(a.price) - Number(b.price)
          : Number(b.price) - Number(a.price)
      )
    );
  };

  const sortBySquarePrice = (sortType: string) => {
    setAdListToShow(
      [...adList].sort((a: any, b: any): any =>
        sortType === "cheap"
          ? Number(a.squarePrice) - Number(b.squarePrice)
          : Number(b.squarePrice) - Number(a.squarePrice)
      )
    );
  };

  const sortBySquare = (sortType: string) => {
    setAdListToShow(
      [...adList].sort((a: any, b: any): any =>
        sortType === "cheap"
          ? Number(a.square) - Number(b.square)
          : Number(b.square) - Number(a.square)
      )
    );
  };

  const sortByDate = (sortType: string) => {
    const parseDate = (dateString: string): Date => {
      const [day, month, year] = dateString.split(".").map(Number);
      return new Date(year, month - 1, day); // Month is 0-indexed in JavaScript
    };
    setAdListToShow(
      [...adList].sort((a, b) =>
        sortType === "fromOldest"
          ? parseDate(a.createdAt).getTime() - parseDate(b.createdAt).getTime()
          : parseDate(b.createdAt).getTime() - parseDate(a.createdAt).getTime()
      )
    );
  };

  return (
    <div className={styles.adList}>
      <p>Купить недвижимость в {city}е</p>
      <Sort
        apartmentCount={adList.length}
        sortByDefault={sortByDefault}
        sortByPrice={sortByPrice}
        sortBySquarePrice={sortBySquarePrice}
        sortBySquare={sortBySquare}
        sortByDate={sortByDate}
      />
      <div className={clsx(styles.cards, "flex-column")}>
        {adListToShow.map((el: any, i: number) => (
          <Card key={i} {...el} />
        ))}
      </div>
    </div>
  );
};

export default AdList;
