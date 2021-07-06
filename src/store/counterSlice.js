import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const counterUpdate = createAsyncThunk(
    "count/counterUpdate",
    async (value, thunkApi) => {
        const resp = await fetch('http://localhost:3000/api/count')
        const data = await resp.json()
        console.log("Data",data)
        return data
    }
)



export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
        isLoading:false,
        error:''
    },
    reducers: {
        increment: state => {
            state.count++
        },
        decrement: state => {
            state.count--
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        },
        decrementByAmount: (state, action) => {
            state.count -= action.payload
        }
    },
    extraReducers: {
        [counterUpdate.fulfilled]: (state, action) => {
            state.count += action.payload
            state.isLoading =false 
        },
        [counterUpdate.pending]: (state) => {
            state.isLoading =true 
        },
        [counterUpdate.rejected]:(state,action)=>{
            state.error="Error in api"
            state.isLoading =false 
    }
    }
})

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions

export default counterSlice.reducer