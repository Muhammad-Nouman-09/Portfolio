import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./SliceFolder/AddCartSlice.js"
// import productReducer from "./prodects/productsSlice.js"

export const store = configureStore({
    reducer: { 
        counter: counterReducer,
        
    },
});