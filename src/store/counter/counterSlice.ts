/**
 * createSlice is the core Redux Toolkit function that creates a "slice" of your store
 * A slice = state + reducers + actions all bundled together
 */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * Defines the shape of your counter state
 * Ensures type safety - TypeScript will catch errors if you try to use wrong types
 */
interface CounterState {
    value: number;
}

/**
 * Initial State
 * Sets the starting value when the app loads
 * Typed with CounterState so it matches the interface
 */
const initialState: CounterState = {
    value: 0
}

/**
 * Create the Slice
 * You're directly mutating state.value += 1 but 
 * Redux Toolkit uses Immer under the hood, which converts this to an immutable update automatically!
 */
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, () => {
                console.log("incrementAsync.pending")
            })
            .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
                state.value = + action.payload;
            })
    }
})

/**
 * async action
 * 
 */
export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return amount;
    }
)

/**
 * Export Actions & Reducer
 * createSlice auto-generates action creators from your reducer names
 * You export increment and decrement to dispatch from components
 * You export the reducer to add to rootReducer
 */
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;