import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTickets = createAsyncThunk(
    'tickets/fetchTickets',
    async () => {
        const response = await fetch('https://api.npoint.io/163b5e66df9f2741243e');
        const formattedResponse = await response.json();
        return formattedResponse;
    }   
)

export const fetchCompanies = 
createAsyncThunk(
    'companies/fetchCompanies',
    async () => {
        const response = await fetch('https://api.npoint.io/a1b1c28b32d9785bb26c');
        const formattedResponse = await response.json();
        return formattedResponse;
    }
)

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState: {
        tickets: [],
        companies: [{ id: "876218723879",
    name: 'Все'}],
        isLoading: false,
        isCheap: false,
        isFast: false,
        isOptimal: false,
    },
    reducers: {
        chooseCheap(state) {
            if(state.isCheap === false) {
                state.tickets.sort((prev, next) => prev.price - next.price);
                console.log("now it's cheap");
                state.isCheap = !state.isCheap;
                state.isFast = false;
                state.isOptimal = false;
            } else {
                console.log("it's already cheap!");
                return state;
            }            
        },
        chooseFast(state) {
            if(state.isFast === false) {
                state.tickets.sort((prev, next) => prev.info.duration < next.info.duration ? -1 : 1);
                console.log("now it's fast");
                state.isFast = !state.isFast;
                state.isCheap = false;
                state.isOptimal = false;
            } else {
                console.log("it's already fast!");
            }
        },
        chooseOptimal(state) {
            if(state.isOptimal === false) {
                state.tickets.sort((prev, next) => next.price - prev.price).sort((prev, next) => prev.info.duration < next.info.duration ? -1 : 1);
                console.log("now it's optimal");
                state.isOptimal = !state.isOptimal;
                state.isCheap = false;
                state.isFast = false;
            }
        },
        chooseTrans(state, payload) {
            state.tickets = state.tickets.filter(item => item.info.stops.length === payload.payload);
        },
        chooseCompany(state, payload) {
            state.tickets = state.tickets.filter(item => item.companyId === payload.payload)
        },
        // filterOrigin(state, payload) {
        //     state.tickets = state.tickets.filter(item => item.info.origin.includes(payload.payload));
        //     console.log(payload.value);
        // }
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
        [fetchCompanies.fulfilled]: (state, action) => {
            action.payload.forEach(item => state.companies.push(item));
        }
    }
});

export default ticketsSlice.reducer;

export const { chooseCheap, chooseFast, chooseOptimal, chooseTrans, filterOrigin, chooseCompany } = ticketsSlice.actions;