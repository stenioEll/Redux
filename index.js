const redux = require('redux')
const createStore = redux.createStore

const  CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const bindActionCreators = redux.bindActionCreators

function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload:1
    } 

}

function restockCake( qty = 1 ) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    } 

}

const initialState = {
    numOfCakes: 10, 
}
 

//(previousState, action) => new State
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state, //copy of state property and chage only the property i wanna
                numOfCakes: state.numOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state, 
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state
    }
}

const store = createStore(reducer) //store hold the state aplication

console.log('Initial state', store.getState()) //Allow acess of inicial state

const unsubscribe = store.subscribe(() => console.log('update state', store.getState()))

const actions = bindActionCreators({ orderCake, restockCake}, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)

unsubscribe()


