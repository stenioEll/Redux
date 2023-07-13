const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({              //automatic generate action creators with the same names as the reducer functions  
    name: 'cake',
    initialState,
    reducers: {
       ordered: (state) => {                 //dont need action because we will only decrement the num of cakes
            state.numOfCakes--               //rtk allow directly mutate the state and we dont need to return
       },
       restocked: (state, action) => {
            state.numOfCakes += action.payload
       },
    }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions