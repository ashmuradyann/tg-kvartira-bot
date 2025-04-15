import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  city: "Воронеж",
  adList: [
    {
      price: "10504200",
      squarePrice: "123000",
      apartamentMaterial: "Кирпично-монолитный",
      addressDistrict: "Воронеж",
      addressStreet: "Краснознаменная, д.57/5",
      apartamentType: "квартира",
      square: 70,
      kitchen: "12.3",
      createdAt: "05.04.2025",
      floor: "25",
      wallHeight: "2.75",
      complexName: "ЖК Высота",
      deadline: "2026",
      url: "",
      images: [
        "https://draperandkramer.com/wp-content/uploads/2020/04/insights-what-does-a-renovated-apartment-mean-draperandkramer_20200408_header-image.png",
        "https://cdn.sanity.io/images/v48q37k7/production/d09208183125ab47493d5de2f8710b6faa27d7cc-3000x2000.jpg",
        "https://www.thespruce.com/thmb/BpZG-gG2ReQwYpzrQg302pezLr0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Stocksy_txp3d216bb1tUq300_Medium_4988078-56c96ac19def4bf8ba430cf5063b6b38.jpg",
      ],
      phone: "87777777777",
      points: [51.672, 39.1843],
    },
    {
      price: "9504200",
      squarePrice: "122000",
      apartamentMaterial: "Кирпично-монолитный",
      addressDistrict: "Воронеж",
      addressStreet: "Краснознаменная, д.60/5",
      apartamentType: "квартира",
      square: 50,
      kitchen: "18.3",
      createdAt: "04.04.2025",
      floor: "18",
      wallHeight: "2.75",
      complexName: "ЖК Высота",
      deadline: "2026",
      url: "",
      images: [
        "https://draperandkramer.com/wp-content/uploads/2020/04/insights-what-does-a-renovated-apartment-mean-draperandkramer_20200408_header-image.png",
        "https://cdn.sanity.io/images/v48q37k7/production/d09208183125ab47493d5de2f8710b6faa27d7cc-3000x2000.jpg",
        "https://www.thespruce.com/thmb/BpZG-gG2ReQwYpzrQg302pezLr0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Stocksy_txp3d216bb1tUq300_Medium_4988078-56c96ac19def4bf8ba430cf5063b6b38.jpg",
      ],
      phone: "87777777777",
      points: [51.675, 39.19],
    },
  ],
};

const adListSlice = createSlice({
  name: "adList",
  initialState: initialState,
  reducers: {
    setAdList: (state, action) => {
      state.adList = action.payload;
    },
  },
});
export const { setAdList } = adListSlice.actions;

export default adListSlice.reducer;
