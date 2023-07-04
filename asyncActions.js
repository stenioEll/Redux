// Fetch a list of users from an api endpoint and stores( Async actions ) 

const redux = require('redux')
const createStore = redux.createStore 

//STATE 

const initialState = {
    loading: false,                                           // Flag whether indicate is currently being fetched or not (display a loading spinner).
    users: [],                                                // List of users.
    error: '',                                                // Api request failed (display error to the user).
}


//ACTIONS
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'        // List of users have been requested from api endpoint.
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'        // If fetch users succeeded.
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'              // If fetch users failed.


//ACTION CREATORS

const fetchUsersRequested = () => {                         // request to fetch the data 
    return {
        type: FETCH_USERS_REQUESTED,
    }
}

const fetchUsersSucceeded = (users) => {                   // store the list of users if the requesta be successful
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users
    }
}

const fetchUsersFailure = error => {                      // error message 
    return {
        type: FETCH_USERS_FAILED,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILED:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    }
}

//Creating Store

const store = createStore(reducer)