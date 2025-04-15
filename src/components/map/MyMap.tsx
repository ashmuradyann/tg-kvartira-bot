import React, { useState } from "react";
import {
  YMaps,
  Map,
  ObjectManager,
  Placemark,
  Clusterer,
} from "react-yandex-maps";

import locationIcon from "../../images/icons/location.png";

import styles from "./my-map.module.css";
import { useSelector } from "react-redux";
import Card from "../ad-list/Card";
import OutsideClickHandler from "react-outside-click-handler";

const MyMap = () => {
  const { adList }: any = useSelector((state: any) => state.adList);

  const [cardData, setCardData] = useState<any>(null);

  return (
    <div className={styles.map}>
      {cardData !== null && (
        <OutsideClickHandler onOutsideClick={() => setCardData(null)}>
          <Card
            resetCardData={() => setCardData(null)}
            customClass={styles.map__modal}
            {...cardData}
          />
        </OutsideClickHandler>
      )}
      <YMaps>
        <Map
          defaultState={{ center: [51.672, 39.1843], zoom: 10 }}
          style={{ width: "100%", height: "100%" }}
        >
          <Clusterer
            options={{
              preset: "islands#invertedVioletClusterIcons",
              groupByCoordinates: false,
            }}
          >
            {adList.map((el: any, index: any) => (
              <Placemark
                key={index}
                geometry={el.points}
                options={{
                  iconLayout: "default#image",
                  iconImageHref: locationIcon,
                  iconImageSize: [40, 40],
                }}
                onClick={() => setCardData(el)}
                properties={{
                  balloonContent: `Cluster point ${index + 1}`,
                }}
              />
            ))}
          </Clusterer>
        </Map>
      </YMaps>
    </div>
  );
};

export default MyMap;
