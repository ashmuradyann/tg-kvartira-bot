import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import clsx from "clsx";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./ad-list.module.css";

const Card = ({
  customClass,
  price,
  squarePrice,
  apartamentMaterial,
  addressDistrict,
  addressStreet,
  apartamentType,
  square,
  kitchen,
  floor,
  wallHeight,
  complexName,
  deadline,
  url,
  images,
  phone,
  resetCardData = null,
}: any) => {
  const formatNumber = (num: any) => {
    return new Intl.NumberFormat("en-US", {
      useGrouping: true,
    })
      .format(num)
      .replace(/,/g, " ");
  };

  const formatPhoneNumber = (num: any) => {
    const cleaned = num.toString().replace(/\D/g, "");
    return `8 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(
      7,
      9
    )}-${cleaned.slice(9, 11)}`;
  };

  return (
    <div className={clsx(styles.card, customClass)}>
      {resetCardData !== null && (
        <div className={styles.close__button} onClick={resetCardData}></div>
      )}
      <Swiper
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        slidesPerView={1}
        style={{ width: "100%", height: "250px" }}
      >
        {images.map((el: string) => (
          <SwiperSlide>
            <img src={el} alt="apart-img" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.info}>
        <p className={styles.price}>{formatNumber(price)} ₽</p>
        <p className={styles.square}>{formatNumber(squarePrice)} ₽/м2</p>
        <p className={styles.title}>Тип дома: {apartamentMaterial}</p>
        <p className={styles.address}>
          г.{addressDistrict}, ул.{addressStreet}
        </p>
        <ul>
          <li>
            <p>Тип:</p>
            <span></span>
            <p>{apartamentType}</p>
          </li>
          <li>
            <p>Площадь:</p>
            <span></span>
            <p>{square} м²</p>
          </li>
          <li>
            <p>Кухня:</p>
            <span></span>
            <p>{kitchen} м²</p>
          </li>
          <li>
            <p>Этаж:</p>
            <span></span>
            <p>{floor}</p>
          </li>
          <li>
            <p>Высота потолков:</p>
            <span></span>
            <p>{wallHeight}</p>
          </li>
          <li>
            <p>Наименование ЖК:</p>
            <span></span>
            <p>{complexName}</p>
          </li>
          <li>
            <p>Срок сдачи:</p>
            <span></span>
            <p>{deadline}</p>
          </li>
        </ul>
        <a className={styles.call} href={`tel:${phone}`}>
          {formatPhoneNumber(phone)}
        </a>
      </div>
    </div>
  );
};

export default Card;
