import { createSlice } from "@reduxjs/toolkit";

export const addSlice = createSlice({
    name: 'add',
    initialState: {
        add: 4,
    },
    reducers: {
        addIncrease(state) {
            state.add = state.add + 5
        }
    }
});

// export const { addIncrease } = addSlice.actions;

export default addSlice.reducer;

export const {addIncrease} = addSlice.actions;