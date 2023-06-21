const  CAKE_ORDERED = 'CAKE_ORDERED'

function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity:1
    } 

}

const initialState = {
    numOfCakes: 10, 
    anotherProperty: 0, 

}
 

//(previousState, action) => new State
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state, //copy of state property and chage only the property i wanna
                numOfCakes: state.numOfCakes - 1
            }
            default:
                return state
    }
}

