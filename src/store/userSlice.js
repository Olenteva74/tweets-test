import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./operations";

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        isLoading: false,
        error: null,
        showLoadButton: false,
        page: 1
    },
    reducers: {
        toggleStatus(state, action) {
            for (const user of state.users) {
                if(user.id === action.payload) {
                    user.isFollowing = !user.isFollowing;
                    break;
                }
            }
        },
        cleanMemory(state) {
            state.users = [];
            state.showLoadButton = false;
            state.page = 1;
        },
        addPage(state, action) {
            state.page = state.page + action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.users.push(...action.payload);
            state.isLoading = false;
            state.error = null;
            state.showLoadButton = true;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
            state.showLoadButton = false;
        })
    }
});

export const {toggleStatus, cleanMemory, addPage} = userSlice.actions;
export const userReducer = userSlice.reducer;