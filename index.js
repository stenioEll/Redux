const redux = require('redux')
const createStore = redux.createStore
const  combineReducers = redux.combineReducers 

const applyMiddleware = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const  CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'


function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1
    } 

}

function restockCake( qty = 1 ) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    } 

}

function orderIcescream( qty = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

function restockeIcescream( qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

const initialState = {
    numOfCakes: 10, 
    numOfIceCreams: 20
}

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}
 

//(previousState, action) => new State
const cakeReducer = (state = initialCakeState, action) => {
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

const IceCreamreducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state, 
                numOfIceCreams: state.numOfIceCreams - 1
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state, 
                numOfIceCreams: state.numOfIceCreams + action.payload
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: IceCreamreducer
})

const store = createStore(rootReducer, applyMiddleware(logger)) //store hold the state aplication

console.log('Initial state', store.getState()) //Allow acess of inicial state

const unsubscribe = store.subscribe(() => {})

store.dispatch(orderCake())
store.dispatch(restockCake(1))
store.dispatch(orderIcescream())
store.dispatch(restockeIcescream(1))



unsubscribe()


