import clsx from "clsx";
import Button from "../ui/button/Button";

import filterIcon from "../../images/icons/filter.png";
import listIcon from "../../images/icons/list.png";
import locationIcon from "../../images/icons/location.png";

import styles from "./main.module.css";

const Tabs = ({ adsShowType, setAdsShowType, setFilterIsOpen }: any) => {
  const changeAdsShowType = () => {
    if (adsShowType === "На карте") {
      setAdsShowType("Списком");
    } else {
      setAdsShowType("На карте");
    }
  };

  return (
    <div className={clsx(styles.tabs, "flex-between")}>
      <Button
        customClassName={styles.tab}
        onClick={() => setFilterIsOpen((prev: any) => !prev)}
      >
        <img src={filterIcon} alt="filter-icon" />
        Фильтр
      </Button>
      <Button customClassName={styles.tab} onClick={changeAdsShowType}>
        <img
          src={adsShowType === "Списком" ? locationIcon : listIcon}
          alt="button-icon"
        />
        {adsShowType === "Списком" ? "На карте" : "Списком"}
      </Button>
    </div>
  );
};

export default Tabs;
