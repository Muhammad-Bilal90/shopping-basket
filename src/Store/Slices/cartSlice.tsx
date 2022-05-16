import { productStateType } from "../../Types/ProductStateType";
import { images } from "../imagesPath/shoeImages";
import { createSlice } from '@reduxjs/toolkit';

const initialState: productStateType[] = [
  {
    id: "1",
    shoeName: "Nike Original 1",
    slug: "Nike-Original-1",
    price: 500,
    image: images.Shoe1,
    count: 1,
    added: false,
  },
  {
    id: "2",
    shoeName: "Nike Original 2",
    slug: "Nike-Original-2",
    price: 1000,
    image: images.Shoe2,
    count: 1,
    added: false,
  },
  {
    id: "3",
    shoeName: "Nike Original 3",
    slug: "Nike-Original-3",
    price: 1500,
    image: images.Shoe3,
    count: 1,
    added: false,
  },
  {
    id: "4",
    shoeName: "Nike Original 4",
    slug: "Nike-Original-4",
    price: 2000,
    image: images.Shoe4,
    count: 1,
    added: false,
  },
  {
    id: "5",
    shoeName: "Nike Original 5",
    slug: "Nike-Original-5",
    price: 2500,
    image: images.Shoe5,
    count: 1,
    added: false,
  },
  {
    id: "6",
    shoeName: "Nike Original 6",
    slug: "Nike-Original-6",
    price: 3000,
    image: images.Shoe6,
    count: 1,
    added: false,
  },
  {
    id: "7",
    shoeName: "Nike Original 7",
    slug: "Nike-Original-7",
    price: 3500,
    image: images.Shoe7,
    count: 1,
    added: false,
  },
  {
    id: "8",
    shoeName: "Nike Original 8",
    slug: "Nike-Original-8",
    price: 4000,
    image: images.Shoe8,
    count: 1,
    added: false,
  },
  {
    id: "9",
    shoeName: "Nike Original 9",
    slug: "Nike-Original-9",
    price: 4500,
    image: images.Shoe9,
    count: 1,
    added: false,
  },
];

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: initialState,
  reducers: {
    ADD: (state, action) => {
      return state.map((product) => {
        if(product.id !== action.payload){
          return product;
        }else {
          return {
            ...product,
            added: true,
          }
        }
      });
    },
    DELETE: (state, action) => {
      return state.map((product) => {
        if(product.id !== action.payload){
          return product;
        }else {
          return {
            ...product,
            added: false,
          }
        }
      });
    },
    INCREMENT: (state, action) => {
      return state.map((product) => {
        if(product.id !== action.payload){
          return product;
        }else {
          return {
            ...product,
            count: product.count + 1,
          }
        }
      });
    },
    DECREMENT: (state, action) => {
      return state.map((product) => {
        if(product.id !== action.payload){
          return product;
        }else {
          return {
            ...product,
            count: product.count-1,
          }
        }
      });
    }
  }
});

export default cartSlice.reducer;
export const { ADD, DELETE , INCREMENT, DECREMENT } = cartSlice.actions;
