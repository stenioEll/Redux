const redux = require('redux')


const initialState = {
    name: 'Stênio',
    address: {
        street: '123 Main St',
        city: 'Joao Pessoa',
        state: 'PB'    
    },
}

const STREET_UPDATED = 'STREET_UPDATED' //const for action type 

const updateStreet = (street) => { //action creator
    return {
        type: STREET_UPDATED,
        payload: street, //return object where the type is street updated and the payload is the passed in parameter(street) 
    } 

}

const reducer = (state = initialState, action) => { //define the reducer to handle this action 
    switch(action.type) {
        case STREET_UPDATED:
            return {
                ...state, //copy of state property and chage only the property i wanna
                address: {
                    ...state.address, // spread address to not affect city and state
                    street: action.payload,
                }
            }     
        default:
            return state
    }
}

const store = redux.createStore(reducer)                          // store hold the state aplication
console.log('Initial state', store.getState())              // gives the current state in the store 
const unsubscribe = store.subscribe(() => {                 // function which is executed anytime the state in the redux store changes 
    console.log('Update State', store.getState())            
})

store.dispatch(updateStreet('456 Main St'))                 // the store provides a dispatch method to update the state and accepts a action as parameter
unsubscribe()                                               //
