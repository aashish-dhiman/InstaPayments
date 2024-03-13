import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    paymentOptions: [],
    finalPrice: 0,
    status: "",
    paymentMode: "",
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setPaymentOptions: (state, action) => {
            state.paymentOptions = action.payload;
        },
        setFinalPrice: (state, action) => {
            state.finalPrice = action.payload;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        setPaymentMode: (state, action) => {
            state.paymentMode = action.payload;
        },
    },
});

export const {
    setProducts,
    setPaymentOptions,
    setFinalPrice,
    setStatus,
    setPaymentMode,
} = dataSlice.actions;

export default dataSlice.reducer;
