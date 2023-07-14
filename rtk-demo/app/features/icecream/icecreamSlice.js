const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOficecreams: 20
}

const icecreamSlice = createSlice({              //automatic generate action creators with the same names as the reducer functions  
    name: 'icecream',
    initialState,
    reducers: {
       ordered: (state) => {                 //dont need action because we will only decrement the num of cakes
            state.numOficecreams--               //rtk allow directly mutate the state and we dont need to return
       },
       restocked: (state, action) => {
            state.numOficecreams += action.payload
       },
    }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions