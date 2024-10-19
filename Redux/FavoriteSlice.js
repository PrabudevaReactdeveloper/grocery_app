
import { createSlice } from '@reduxjs/toolkit'
const FavoriteSlice = createSlice({
    name: 'Favorite',
    initialState: [],
    reducers: {
        AddToFavoriteCart: (state, action) => {
            let isAvailable1 = state.find((e) => e == action.payload.name);
            if (isAvailable1) {
                action.payload["quantity"] += 1;   
            }
            else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        RemoveFavoriteCart: (state, action) => {
            let isAvailable1 = state.filter((e) => e.name != action.payload.name);
            return (state = isAvailable1);
        },
        IncremenFavoriteQuantity: (state, action) => {
            let isAvailable1 = state.find((e) => e.name == action.payload.name);
            if (isAvailable1) {
                isAvailable1.quantity ++;
            }
            else {
                console.log("Alert");
            }
        },
        DecrementFavoriteQuantity: (state, action) => {
            let isAvailable1 = state.find((e) => e.name == action.payload.name);
            if (isAvailable1.quantity == 1) {
                isAvailable1.quantity = 1;
            }
            else {
                isAvailable1.quantity--;
            }
        },
    },
})

export const { AddToFavoriteCart, RemoveFavoriteCart, IncremenFavoriteQuantity, DecrementFavoriteQuantity } = FavoriteSlice.actions
export default FavoriteSlice.reducer;