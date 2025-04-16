import React, { useEffect, useState } from "react";

import Tabs from "./Tabs";
import AdList from "../ad-list/AdList";
import MyMap from "../map/MyMap";

import styles from "./main.module.css";
import BigFilter from "../big-filter/BigFilter";

const Main = () => {
  const [adsShowType, setAdsShowType] = useState<any>("Списком");
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (filterIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [filterIsOpen]);

  return (
    <div className={styles.main}>
      <Tabs
        adsShowType={adsShowType}
        setAdsShowType={setAdsShowType}
        setFilterIsOpen={setFilterIsOpen}
      />
      {filterIsOpen && <BigFilter />}
      {adsShowType === "Списком" ? <AdList /> : <MyMap />}
    </div>
  );
};

export default Main;
