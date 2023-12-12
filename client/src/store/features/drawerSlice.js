import { createSlice } from "@reduxjs/toolkit";

export const drawerSlice = createSlice({
    name: "cart",
    initialState: {
        isOpen: false,
    },
    reducers: {
        openDrawer: (state) => {
            state.isOpen = true;
        },
        closeDrawer: (state) => {
            state.isOpen = false;
        },
        openCloseDrawer: (state, action) => {
            state.isOpen = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { closeDrawer, openDrawer, openCloseDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
