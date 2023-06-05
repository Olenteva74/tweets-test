import { createSlice } from "@reduxjs/toolkit";
import { ALL } from "constants/constants";

const filterSlice = createSlice( {
    name: "filter",
    initialState: {
        status: ALL
    },
    reducers: {
        setStatusFilter(state, action) {
            state.status = action.payload;
        }
    }
});

export const {setStatusFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer; 