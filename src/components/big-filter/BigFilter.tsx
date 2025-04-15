import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

import styles from "./big-filter.module.css";
import { useRef, useState } from "react";

const BigFilter = () => {
  const [apartamentType, setApartamentType] = useState<number>(5);
  const [apartamentPlan, setApartamentPlan] = useState<number>(5);
  const [apartamentFloor, setApartamentFloor] = useState<number>(5);
  const [buildingFloor, setBuildingFloor] = useState<number>(5);

  const [floorValue, setFloorValue] = useState<number>(5);
  const [buildingFloorValue, setBuildingFloorValue] = useState<number>(5);

  const [selectedBuilderValue, setSelectedBuilderValue] = useState<string>(
    "Выбрать застройщика"
  );
  const [excludedBuilderValue, setExcludedBuilderValue] = useState<string>(
    "Исключить застройщика"
  );

  return (
    <div className={styles.big__filter}>
      <p className={styles.title}>Все фильтры</p>
      <p className={styles.subtitle}>Общие</p>
      <div className={styles.filter__block}>
        <p className={styles.filter__name}>Тип жилья</p>
        <div className={styles.filter__range}>
          <RangeSlider
            min={1}
            max={10}
            onInput={(e) => setApartamentType(e[1])}
            defaultValue={[0, 5]}
            thumbsDisabled={[true, false]}
            rangeSlideDisabled={true}
          />
          <p>Приоритет при подборе: {apartamentType}</p>
          <label htmlFor="">
            <input type="checkbox" />
            Квартира
          </label>
          <label htmlFor="">
            <input type="checkbox" />
            Апартаменты
          </label>
        </div>
      </div>
      <div className={styles.filter__block}>
        <p className={styles.filter__name}>Планировка</p>
        <div className={styles.filter__range}>
          <RangeSlider
            min={1}
            max={10}
            onInput={(e) => setApartamentPlan(e[1])}
            defaultValue={[0, 5]}
            thumbsDisabled={[true, false]}
            rangeSlideDisabled={true}
          />
          <p>Приоритет при подборе: {apartamentPlan}</p>
          <label htmlFor="">
            <input type="checkbox" />
            Смежная
          </label>
          <label htmlFor="">
            <input type="checkbox" />
            Изолированная
          </label>
        </div>
      </div>
      <div className={styles.filter__block}>
        <p className={styles.filter__name}>Этаж</p>
        <div className={styles.filter__range}>
          <RangeSlider
            min={1}
            max={10}
            onInput={(e) => setApartamentFloor(e[1])}
            defaultValue={[0, 5]}
            thumbsDisabled={[true, false]}
            rangeSlideDisabled={true}
          />
          <p>Приоритет при подборе: {apartamentFloor}</p>
          <RangeSlider
            className="floor-range"
            min={1}
            value={[0, floorValue]}
            max={50}
            onInput={(e): any => setFloorValue(e[1])}
            defaultValue={[0, 10]}
            thumbsDisabled={[true, false]}
            rangeSlideDisabled={true}
          />
          <input
            type="number"
            min={1}
            max={50}
            value={floorValue}
            onChange={(e: any) => setFloorValue(e.target.value)}
          />
          <label htmlFor="">
            <input type="checkbox" />
            Не первый
          </label>
          <label htmlFor="">
            <input type="checkbox" />
            Не последний
          </label>
          <label htmlFor="">
            <input type="checkbox" />
            Только последний
          </label>
        </div>
      </div>
      <div className={styles.filter__block}>
        <p className={styles.filter__name}>Этажей в доме</p>
        <div className={styles.filter__range}>
          <RangeSlider
            min={1}
            max={10}
            onInput={(e) => setBuildingFloor(e[1])}
            defaultValue={[0, 5]}
            thumbsDisabled={[true, false]}
            rangeSlideDisabled={true}
          />
          <p>Приоритет при подборе: {buildingFloor}</p>
          <RangeSlider
            className="floor-range"
            min={1}
            value={[0, buildingFloorValue]}
            max={50}
            onInput={(e): any => setBuildingFloorValue(e[1])}
            defaultValue={[0, 10]}
            thumbsDisabled={[true, false]}
            rangeSlideDisabled={true}
          />
          <input
            type="number"
            min={1}
            max={50}
            value={buildingFloorValue}
            onChange={(e: any) => setBuildingFloorValue(e.target.value)}
          />
        </div>
        <select
          value={selectedBuilderValue}
          onChange={(e) => setSelectedBuilderValue(e.target.value)}
        >
          <option value="Выбрать застройщика">Выбрать застройщика</option>
          <option value="АО СХ ФК 'АКСИОМА'">АО СХ ФК 'АКСИОМА'</option>
          <option value="ООО Предприятие «ИП К.И.Т.»">
            ООО Предприятие «ИП К.И.Т.»
          </option>
          <option value="ООО 'СТЭЛ инвест'">ООО 'СТЭЛ инвест'</option>
        </select>
        <select
          value={excludedBuilderValue}
          onChange={(e) => setExcludedBuilderValue(e.target.value)}
        >
          <option value="Исключить застройщика">Исключить застройщика</option>
          <option value="АО СХ ФК 'АКСИОМА'">АО СХ ФК 'АКСИОМА'</option>
          <option value="ООО Предприятие «ИП К.И.Т.»">
            ООО Предприятие «ИП К.И.Т.»
          </option>
          <option value="ООО 'СТЭЛ инвест'">ООО 'СТЭЛ инвест'</option>
        </select>
      </div>
    </div>
  );
};

export default BigFilter;
