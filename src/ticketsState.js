import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTickets = createAsyncThunk(
    'tickets/fetchTickets',
    async () => {
        const response = await fetch('https://api.npoint.io/163b5e66df9f2741243e');
        const formattedResponse = await response.json();
        return formattedResponse;
    }   
)

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState: {
        tickets: [],
        isLoading: false,
        isChanged: false,
    },
    reducers: {
        chooseCheap(state) {
            if(state.isChanged) {
                state.isChanged = !state.isChanged;
                state.tickets.sort((prev, next) => prev.price - next.price);
                console.log(state.isChanged);
            } else {
                state.isChanged = !state.isChanged;
                fetchTickets();
                state.tickets.sort((prev, next) => prev.price - next.price);
                console.log(state.isChanged);
            }
        },
        chooseFast(state) {
            if(state.isChanged) {
                state.isChanged = !state.isChanged;
                state.tickets.sort((prev, next) => prev.info.duration < next.info.duration ? -1 : 1);
                console.log(state.isChanged);
            } else {
                state.isChanged = !state.isChanged;
                fetchTickets();
                state.tickets.sort((prev, next) => prev.info.duration < next.info.duration ? -1 : 1);
                console.log(state.isChanged);
            }
        },
        chooseOptimal(state) {
            if(state.isChanged) {
                state.isChanged = !state.isChanged;         
                state.tickets.sort((prev, next) => prev.price < next.price ? 1 : -1).sort((prev, next) => prev.info.duration < next.info.duration ? 1 : -1);
                console.log(state.isChanged);
            } else {
                state.isChanged = !state.isChanged;
                fetchTickets();
                state.tickets.sort((prev, next) => prev.price < next.price ? 1 : -1).sort((prev, next) => prev.info.duration < next.info.duration ? 1 : -1);
                console.log(state.isChanged);
            }
        },
        chooseTrans(state, payload) {
            state.tickets.filter(item => item.info.stops.length === 2);
            console.log(state);
        }
    },
    extraReducers: {
        [fetchTickets.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchTickets.fulfilled]: (state, action) => {
            state.tickets = action.payload;
            state.isLoading = false;
        },
        [fetchTickets]: (state) => {
            state.isLoading = false;
        },
        [fetchTickets]: (state) => {
            state.tickets.forEach(item => {
                let unix = item.info.duration;
                let date = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(unix)//9:27:16 PM
                console.log(date);
            })
        }
    }
});

export default ticketsSlice.reducer;

export const { chooseCheap, chooseFast, chooseOptimal, chooseTrans } = ticketsSlice.actions;